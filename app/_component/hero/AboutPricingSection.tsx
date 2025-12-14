'use client';
import { useEffect, useState } from 'react';
import Link from "next/link";

interface PricingCard {
    id: number;
    title: string;
    services: string[];
    popular?: boolean;
    isLinks?: boolean;
}

const pricingCards: PricingCard[] = [
    {
        id: 1,
        title: 'Diagnostic',
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
        services: [
            'Remplacement composants',
            'Réparation carte mère',
            'Upgrade RAM/SSD',
            'Réparation écran/clavier',
        ]
    },
    {
        id: 4,
        title: 'Outils recommandés',
        services: [
            'AnyDesk|https://anydesk.com/fr|Accès à distance sécurisé',
            'RustDesk|https://rustdesk.com/fr/|Alternative open source pour le contrôle distant',
            'ESET|https://www.eset.com/fr/home/free-trial/|Protection antivirus professionnelle'
        ],
        isLinks: true
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
            className="w-full"
            style={{ minHeight: '100vh', position: 'relative' }}
        >
            {/* Ancre pour About */}
            <div id="about" style={{ position: 'absolute', top: '-80px' }}></div>
            {/* Ancre pour Pricing */}
            <div id="pricing" style={{ position: 'absolute', top: '-80px' }}></div>
            
            <div className="flex flex-col lg:flex-row w-full min-h-screen">

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
                                        lineHeight: '1.7',
                                        textAlign: 'justify'
                                    }}
                                >
                                    <strong>Une passion pour vos appareils, une expertise fiable</strong>
                                    <br /><br />
                                    Depuis plus de 10 ans, notre passion pour l'univers Apple guide chacune de nos interventions. 
                                    Nous allions expertise technique pointue et savoir-faire artisanal pour offrir à chaque client 
                                    un service personnalisé et des réparations durables.
                                </p>

                                <p
                                    className="leading-relaxed"
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: windowWidth < 768 ? '14px' : windowWidth < 1024 ? '16px' : '18px',
                                        color: '#2E2E2E',
                                        lineHeight: '1.7',
                                        textAlign: 'justify'
                                    }}
                                >
                                    Notre atelier est équipé des outils de diagnostic les plus récents, et nous utilisons uniquement 
                                    des pièces certifiées, garantissant un travail de qualité irréprochable.
                                </p>

                                <p
                                    className="leading-relaxed"
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: windowWidth < 768 ? '14px' : windowWidth < 1024 ? '16px' : '18px',
                                        color: '#2E2E2E',
                                        lineHeight: '1.7',
                                        textAlign: 'justify'
                                    }}
                                >
                                    Si notre cœur reste Apple, nous accompagnons également nos clients sur PC et sur tous les systèmes 
                                    Linux et Windows, pour l'optimisation, la maintenance ou la réparation de leurs appareils.
                                </p>

                                <p
                                    className="leading-relaxed"
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: windowWidth < 768 ? '14px' : windowWidth < 1024 ? '16px' : '18px',
                                        color: '#2E2E2E',
                                        lineHeight: '1.7',
                                        textAlign: 'justify'
                                    }}
                                >
                                    <em>Notre philosophie : redonner vie à vos outils numériques avec le même soin et la même attention 
                                    que vous leur portez au quotidien.</em>
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
                                Prestations
                            </h2>
                        </div>

                        {/* Grille de cartes 2x2 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                            {pricingCards.map((card) => (
                                <div
                                    key={card.id}
                                    className={`relative rounded-xl p-6 transition-all duration-300 hover:translate-y-[-2px] ${
                                        card.popular ? 'ring-2 ring-offset-2 ring-offset-slate-700' : ''
                                    }`}
                                    style={{
                                        backgroundColor: card.isLinks ? 'rgba(255, 255, 255, 0.95)' : undefined,
                                        backgroundImage: card.isLinks 
                                            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(249, 250, 251, 0.95) 100%)'
                                            : undefined,
                                        border: card.isLinks ? '1px solid rgba(195, 141, 67, 0.2)' : undefined,
                                        boxShadow: card.isLinks 
                                            ? '0 20px 25px -5px rgba(195, 141, 67, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)'
                                            : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                        filter: 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))',
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
                                        className="mb-5 font-semibold text-center"
                                        style={{
                                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                                            fontSize: card.isLinks ? '20px' : '18px',
                                            color: card.isLinks ? '#C38D43' : '#FFFF',
                                            letterSpacing: card.isLinks ? '0.3px' : 'normal'
                                        }}
                                    >
                                        {card.title}
                                    </h3>

                                    {/* Liste des services */}
                                    {card.isLinks ? (
                                        <div className="space-y-3">
                                            {card.services.map((service, index) => {
                                                const [name, url, description] = service.split('|');
                                                return (
                                                    <a
                                                        key={index}
                                                        href={url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block p-3 rounded-lg transition-all duration-200 hover:scale-[1.02]"
                                                        style={{
                                                            backgroundColor: 'rgba(195, 141, 67, 0.05)',
                                                            border: '1px solid rgba(195, 141, 67, 0.15)'
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.currentTarget.style.backgroundColor = 'rgba(195, 141, 67, 0.1)';
                                                            e.currentTarget.style.borderColor = 'rgba(195, 141, 67, 0.3)';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.style.backgroundColor = 'rgba(195, 141, 67, 0.05)';
                                                            e.currentTarget.style.borderColor = 'rgba(195, 141, 67, 0.15)';
                                                        }}
                                                    >
                                                        <div className="flex items-start gap-3">
                                                            <div 
                                                                className="p-2 rounded-md flex-shrink-0 mt-0.5"
                                                                style={{ backgroundColor: 'rgba(195, 141, 67, 0.15)' }}
                                                            >
                                                                <svg
                                                                    className="w-4 h-4"
                                                                    fill="none"
                                                                    stroke="#C38D43"
                                                                    viewBox="0 0 24 24"
                                                                    strokeWidth={2}
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                                                    />
                                                                </svg>
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <div
                                                                    className="font-semibold mb-1"
                                                                    style={{
                                                                        fontFamily: 'Inter, sans-serif',
                                                                        fontSize: '14px',
                                                                        color: '#C38D43'
                                                                    }}
                                                                >
                                                                    {name}
                                                                </div>
                                                                <div
                                                                    className="leading-relaxed"
                                                                    style={{
                                                                        fontFamily: 'Inter, sans-serif',
                                                                        fontSize: '11px',
                                                                        color: '#64748b',
                                                                        lineHeight: '1.4'
                                                                    }}
                                                                >
                                                                    {description}
                                                                </div>
                                                            </div>
                                                            <svg
                                                                className="w-4 h-4 flex-shrink-0 mt-1"
                                                                fill="none"
                                                                stroke="#C38D43"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={2}
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    ) : (
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
                                    )}
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
