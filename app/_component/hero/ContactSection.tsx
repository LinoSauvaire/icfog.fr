
'use client';
import { useState, useEffect, useRef } from 'react';

interface FormData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    message: string;
}

export default function ContactSection() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [windowWidth, setWindowWidth] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            observer.disconnect();
        };
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    message: ''
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            ref={sectionRef}
            className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
            style={{ backgroundColor: '#F9F9F9' }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Formulaire (gauche) */}
                    <div
                        className={`transition-all duration-1000 ${
                            isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                        }`}
                    >
                        <div
                            className="bg-white rounded-2xl p-8 lg:p-10"
                            style={{
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                            }}
                        >
                            <h3
                                className="mb-8 font-bold"
                                style={{
                                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontSize: windowWidth < 768 ? '24px' : '28px',
                                    color: '#334155'
                                }}
                            >
                                Contactez-nous
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Nom et Prénom */}
                                <div
                                    className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-1000 delay-200 ${
                                        isVisible
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-8'
                                    }`}
                                >
                                    <div>
                                        <label
                                            htmlFor="firstName"
                                            className="block mb-2 font-medium"
                                            style={{
                                                fontFamily: 'Inter, sans-serif',
                                                fontSize: '14px',
                                                color: '#334155'
                                            }}
                                        >
                                            Prénom *
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                                            style={{
                                                fontFamily: 'Inter, sans-serif',
                                                fontSize: '16px'
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="lastName"
                                            className="block mb-2 font-medium"
                                            style={{
                                                fontFamily: 'Inter, sans-serif',
                                                fontSize: '14px',
                                                color: '#334155'
                                            }}
                                        >
                                            Nom *
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                                            style={{
                                                fontFamily: 'Inter, sans-serif',
                                                fontSize: '16px'
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Email et Téléphone */}
                                <div
                                    className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-1000 delay-400 ${
                                        isVisible
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-8'
                                    }`}
                                >
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 font-medium"
                                            style={{
                                                fontFamily: 'Inter, sans-serif',
                                                fontSize: '14px',
                                                color: '#334155'
                                            }}
                                        >
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                                            style={{
                                                fontFamily: 'Inter, sans-serif',
                                                fontSize: '16px'
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block mb-2 font-medium"
                                            style={{
                                                fontFamily: 'Inter, sans-serif',
                                                fontSize: '14px',
                                                color: '#334155'
                                            }}
                                        >
                                            Téléphone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                                            style={{
                                                fontFamily: 'Inter, sans-serif',
                                                fontSize: '16px'
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div
                                    className={`transition-all duration-1000 delay-600 ${
                                        isVisible
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-8'
                                    }`}
                                >
                                    <label
                                        htmlFor="message"
                                        className="block mb-2 font-medium"
                                        style={{
                                            fontFamily: 'Inter, sans-serif',
                                            fontSize: '14px',
                                            color: '#334155'
                                        }}
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-vertical"
                                        style={{
                                            fontFamily: 'Inter, sans-serif',
                                            fontSize: '16px'
                                        }}
                                    />
                                </div>

                                {/* Bouton d'envoi */}
                                <div
                                    className={`transition-all duration-1000 delay-800 ${
                                        isVisible
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-8'
                                    }`}
                                >
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 px-8 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                        style={{
                                            backgroundColor: '#C38D43',
                                            color: '#FFFFFF',
                                            fontFamily: 'Inter, sans-serif',
                                            fontSize: '16px'
                                        }}
                                    >
                                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                                    </button>
                                </div>

                                {/* Messages de statut */}
                                {submitStatus === 'success' && (
                                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                        <p style={{ color: '#065f46', fontFamily: 'Inter, sans-serif' }}>
                                            Message envoyé avec succès ! Nous vous répondrons rapidement.
                                        </p>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                        <p style={{ color: '#dc2626', fontFamily: 'Inter, sans-serif' }}>
                                            Erreur lors de l'envoi. Veuillez réessayer.
                                        </p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Coordonnées (droite) */}
                    <div
                        className={`transition-all duration-1000 delay-300 ${
                            isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-8'
                        }`}
                    >
                        <div className="space-y-8">
                            <h3
                                className="font-bold"
                                style={{
                                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                                    fontSize: windowWidth < 768 ? '24px' : '28px',
                                    color: '#334155'
                                }}
                            >
                                Nos coordonnées
                            </h3>

                            {/* Informations de contact */}
                            <div className="space-y-6">
                                {/* Adresse */}
                                <div className="flex items-start space-x-4">
                                    <div
                                        className="w-6 h-6 mt-1 flex-shrink-0"
                                        style={{ color: '#334155' }}
                                    >
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4
                                            className="font-semibold mb-1"
                                            style={{
                                                fontFamily: 'Inter, sans-serif',
                                                fontSize: '16px',
                                                color: '#334155'
                                            }}
                                        >
                                            Adresse
                                        </h4>
                                        <p
                                            style={{
                                                fontFamily: 'Inter, sans-serif',
                                                fontSize: '14px',
                                                color: '#64748b',
                                                lineHeight: '1.5'
                                            }}
                                        >
                                            45 Place du Général de Gaulle<br />
                                            13300 Salon-de-Provence, France
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                    <div
                                        className="w-6 h-6 mt-1 flex-shrink-0"
                                        style={{ color: '#334155' }}
                                    >
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4
                                            className="font-semibold mb-1"
                                            style={{
                                                fontFamily: 'Inter, sans-serif',
                                                fontSize: '16px',
                                                color: '#334155'
                                            }}
                                        >
                                            Email
                                        </h4>
                                        <a
                                            href="mailto:gilles@icfog.fr"
                                            style={{
                                                fontFamily: 'Inter, sans-serif',
                                                fontSize: '14px',
                                                color: '#64748b',
                                                textDecoration: 'none'
                                            }}
                                            className="hover:underline"
                                        >
                                            gilles@icfog.fr
                                        </a>
                                    </div>
                                </div>

                                {/* Téléphone */}
                                <div className="flex items-start space-x-4">
                                    <div
                                        className="w-6 h-6 mt-1 flex-shrink-0"
                                        style={{ color: '#334155' }}
                                    >
                                        <svg fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4
                                            className="font-semibold mb-1"
                                            style={{
                                                fontFamily: 'Inter, sans-serif',
                                                fontSize: '16px',
                                                color: '#334155'
                                            }}
                                        >
                                            Téléphone
                                        </h4>
                                        <a
                                            href="tel:+330490577634"
                                            style={{
                                                fontFamily: 'Inter, sans-serif',
                                                fontSize: '14px',
                                                color: '#64748b',
                                                textDecoration: 'none'
                                            }}
                                            className="hover:underline"
                                        >
                                            +33 04 90 57 76 34
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Réseaux sociaux */}
                            <div>
                                <h4
                                    className="font-semibold mb-4"
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '16px',
                                        color: '#334155'
                                    }}
                                >
                                    Suivez-nous
                                </h4>
                                <div className="flex space-x-4">
                                    {/* Facebook */}
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                                        style={{ backgroundColor: '#C38D43' }}
                                    >
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                                        </svg>
                                    </a>

                                    {/* LinkedIn */}
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                                        style={{ backgroundColor: '#C38D43' }}
                                    >
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                                        </svg>
                                    </a>

                                    {/* Instagram */}
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                                        style={{ backgroundColor: '#C38D43' }}
                                    >
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.125 10c0 2.278-1.847 4.125-4.125 4.125S5.875 12.278 5.875 10 7.722 5.875 10 5.875 14.125 7.722 14.125 10zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM15.375 5.375a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}