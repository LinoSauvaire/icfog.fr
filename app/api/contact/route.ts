import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const { firstName, lastName, phone, email, message } = await request.json();

        // Configuration du transporteur email (à adapter selon votre fournisseur)
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com', // Remplacer par votre serveur SMTP
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER, // Votre email
                pass: process.env.EMAIL_PASS, // Votre mot de passe d'application
            },
        });

        const mailOptions = {
            from: email,
            to: 'sauvairelino@gmail.com',
            subject: `Nouveau message de contact - ${firstName} ${lastName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #334155;">Nouveau message de contact</h2>
                    
                    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #C38D43; margin-top: 0;">Informations du contact</h3>
                        <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
                        <p><strong>Email :</strong> ${email}</p>
                        ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ''}
                    </div>
                    
                    <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                        <h3 style="color: #334155; margin-top: 0;">Message</h3>
                        <p style="line-height: 1.6;">${message}</p>
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