import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactPayload {
    firstName: string;
    lastName: string;
    phone?: string;
    email: string;
    message: string;
}

function escapeHtml(value: string) {
    return value.replace(/[&<>"']/g, (character) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    })[character] ?? character);
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json() as Partial<ContactPayload>;
        const firstName = body.firstName?.trim();
        const lastName = body.lastName?.trim();
        const phone = body.phone?.trim();
        const email = body.email?.trim();
        const message = body.message?.trim();

        if (!firstName || !lastName || !email || !message) {
            return NextResponse.json({ message: 'Les champs obligatoires sont manquants' }, { status: 400 });
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json({ message: 'Adresse email invalide' }, { status: 400 });
        }

        const emailUser = process.env.EMAIL_USER?.trim();
        const emailPass = process.env.EMAIL_PASS;
        if (!emailUser || !emailPass) {
            throw new Error('EMAIL_USER et EMAIL_PASS doivent être configurées');
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        });

        const mailOptions = {
            from: emailUser,
            to: 'gilles@icfog.fr',
            replyTo: email,
            subject: `Nouveau message de contact - ${firstName} ${lastName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #334155;">Nouveau message de contact</h2>
                    
                    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #C38D43; margin-top: 0;">Informations du contact</h3>
                        <p><strong>Nom :</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
                        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
                        ${phone ? `<p><strong>Téléphone :</strong> ${escapeHtml(phone)}</p>` : ''}
                    </div>
                    
                    <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                        <h3 style="color: #334155; margin-top: 0;">Message</h3>
                        <p style="line-height: 1.6;">${escapeHtml(message).replace(/\r?\n/g, '<br>')}</p>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background-color: #fef3c7; border-radius: 8px;">
                        <p style="margin: 0; font-size: 14px; color: #92400e;">
                            Ce message a été envoyé depuis le formulaire de contact du site ICFog.fr
                        </p>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email envoyé avec succès' }, { status: 200 });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return NextResponse.json({ message: 'Erreur lors de l\'envoi' }, { status: 500 });
    }
}