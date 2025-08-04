'use client';
import { useEffect, useState } from 'react';
import Link from "next/link";

interface PricingCard {
    id: number;
    title: string;
    price: string;
    services: string[];
    popular?: boolean;
}

const pricingCards: PricingCard[] = [
    {
        id: 1,
        title: 'Diagnostic',
        price: '29€',
        services: [
            'Analyse complète du système',
            'Identification des pannes',
            'Devis détaillé gratuit',
            'Conseils d\'optimisation'
        ]
    },
    {
        id: 2,
        title: 'Entretien complet',
        price: '79€',
        services: [
            'Nettoyage interne complet',
            'Mise à jour système',
            'Optimisation performances',
            'Vérification composants',
        ],
        popular: true
    },
    {
        id: 3,
        title: 'Réparation Mac',
        price: 'Sur devis',
        services: [
            'Remplacement composants',
            'Réparation carte mère',
            'Upgrade RAM/SSD',
            'Réparation écran/clavier',
        ]
    },
    {
        id: 4,
        title: 'Remplacement écran iPhone',
        price: 'À partir de 89€',
        services: [
            'Écran certifié qualité originale',
            'Installation professionnelle',
            'Test complet tactile',
        ]
    }
];

export default function AboutPricingSection() {
    const [scrollY, setScrollY] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleResize = () => setWindowWidth(window.innerWidth);

        setWindowWidth(window.innerWidth);
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section
            id={'about'}
            className="w-full"
            style={{ minHeight: '100vh' }}
        >
            <div className="flex flex-col lg:flex-row w-full min-h-screen" id={"pricing"}>

                {/* Section À propos (gauche) - 50% */}
                <div className="w-full lg:w-1/2 relative flex items-center overflow-hidden">
                    {/* Image de fond avec parallaxe */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: "url('/assets/image1.jpeg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundAttachment: windowWidth > 1024 ? 'fixed' : 'scroll',
                            transform: `translateY(${scrollY * 0.3}px)`,
                        }}
                    />

                    {/* Overlay semi-transparent */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.85)',
                            backdropFilter: 'blur(1px)'
                        }}
                    />

                    {/* Contenu À propos */}
                    <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
                        <div className="max-w-2xl">
                            {/* Titre */}
                            <h2
                                className="mb-8 lg:mb-12 font-bold leading-tight"
                                style={{
                                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                                    color: '#C38D43',
                                    fontSize: windowWidth < 768 ? '24px' : windowWidth < 1024 ? '28px' : '32px',
                                    lineHeight: '1.2'
                                }}
                            >
                                Une passion Apple, une expertise fiable
                            </h2>

                            {/* Texte narratif */}
                            <div className="space-y-6">
                                <p
                                    className="leading-relaxed"
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: windowWidth < 768 ? '14px' : windowWidth < 1024 ? '16px' : '18px',
                                        color: '#2E2E2E',
                                        lineHeight: '1.7'
                                    }}
                                >
                                    Depuis plus de 10 ans, notre passion pour l'univers Apple nous guide dans chaque intervention.
                                    Nous combinons une expertise technique pointue avec une approche artisanale, garantissant à chaque
                                    client un service personnalisé et des réparations durables.
                                </p>

                                <p
                                    className="leading-relaxed"
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: windowWidth < 768 ? '14px' : windowWidth < 1024 ? '16px' : '18px',
                                        color: '#2E2E2E',
                                        lineHeight: '1.7'
                                    }}
                                >
                                    Notre atelier est équipé des derniers outils de diagnostic et nous travaillons exclusivement
                                    avec des pièces certifiées. Témoignage de notre confiance en la qualité de notre travail.
                                </p>

                                <p
                                    className="leading-relaxed"
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: windowWidth < 768 ? '14px' : windowWidth < 1024 ? '16px' : '18px',
                                        color: '#2E2E2E',
                                        lineHeight: '1.7'
                                    }}
                                >
                                    Au-delà de la simple réparation, nous accompagnons nos clients dans l'optimisation et la
                                    préservation de leurs appareils Apple. Notre philosophie : redonner vie à vos outils numériques
                                    avec le même soin que vous leur portez au quotidien.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Tarifs (droite) - 50% */}
                <div
                    className="w-full lg:w-1/2 flex items-center px-8 sm:px-12 lg:px-16 py-16 lg:py-24"
                    style={{ backgroundColor: '#334155' }}
                >
                    <div className="w-full max-w-2xl mx-auto">
                        {/* Titre centré */}
                        <div className="text-center mb-12">
                            <h2
                                className="font-bold"
                                style={{
                                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                                    color: '#FFFFFF',
                                    fontSize: windowWidth < 768 ? '24px' : windowWidth < 1024 ? '28px' : '32px',
                                    lineHeight: '1.2'
                                }}
                            >
                                Tarifs & prestations
                            </h2>
                        </div>

                        {/* Grille de cartes 2x2 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            {pricingCards.map((card) => (
                                <div
                                    key={card.id}
                                    className={`relative bg-primary rounded-xl p-6 transition-all duration-300 hover:translate-y-[-2px] ${
                                        card.popular ? 'ring-2 ring-offset-2 ring-offset-slate-700' : ''
                                    }`}
                                    style={{
                                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                        filter: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))',
                                        // ringColor: card.popular ? '#C38D43' : 'transparent'
                                    }}
                                >
                                    {/* Badge populaire */}
                                    {card.popular && (
                                        <div
                                            className="absolute -top-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium text-white"
                                            style={{ backgroundColor: '#C38D43' }}
                                        >
                                            Populaire
                                        </div>
                                    )}

                                    {/* Titre */}
                                    <h3
                                        className="mb-4 font-semibold text-center"
                                        style={{
                                            fontFamily: 'Inter, sans-serif',
                                            fontSize: '18px',
                                            color: '#FFFF'
                                        }}
                                    >
                                        {card.title}
                                    </h3>

                                    {/* Liste des services */}
                                    <ul className="space-y-2">
                                        {card.services.map((service, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start"
                                                style={{
                                                    fontFamily: 'Inter, sans-serif',
                                                    fontSize: '12px',
                                                    color: '#64748b'
                                                }}
                                            >
                                                <svg
                                                    className="w-3 h-3 mr-2 mt-0.5 flex-shrink-0"
                                                    style={{ color: '#10b981' }}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span className="leading-relaxed">{service}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Bouton CTA centré */}
                        <div className="text-center">
                            <Link href={'#contact'} style={{
                                scrollBehavior: 'smooth'
                            }}>
                                <button
                                    className="px-8 py-4 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                                    style={{
                                        backgroundColor: '#FFFFFF',
                                        color: '#C38D43',
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '16px'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#f8fafc';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                                    }}
                                >
                                    Prendre RDV
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}