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
                    {/* Image de fond avec parallaxe sécurisée (pas d'overflow sur mobile) */}
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: "url('/assets/image1.jpeg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundAttachment: windowWidth > 1024 ? 'fixed' : 'scroll',
                            transform: windowWidth > 1024 ? `translateY(${scrollY * 0.15}px)` : 'none',
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
                                <strong>Une passion Apple née en 1988</strong>
                                <br /><br />
                                Ma relation avec l'univers Apple a commencé bien avant d'en faire mon métier.
                                En 1988, mes parents m'ont offert mon premier Macintosh. À une époque où
                                l'informatique était encore peu présente dans les foyers, ce cadeau a marqué
                                le début d'une passion qui ne m'a jamais quitté.
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
                                Depuis ce premier Mac, j'ai suivi chaque étape de l'évolution d'Apple :
                                des Macintosh d'origine aux Power Macintosh, de l'arrivée de Mac OS X
                                à la transition Intel, jusqu'aux dernières générations Apple Silicon.
                                Pendant plus de trente-cinq ans, j'ai utilisé, entretenu, étudié et accompagné
                                ces machines aussi bien dans un cadre personnel que professionnel.
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
                                Cette expérience me permet aujourd'hui d'apporter bien plus qu'une simple
                                réparation. Chaque appareil Apple possède ses spécificités techniques et
                                son histoire. Comprendre leur évolution sur plusieurs décennies constitue
                                un véritable atout pour établir des diagnostics précis et proposer des
                                solutions durables.
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
                                Mon atelier est équipé d'outils de diagnostic professionnels et chaque
                                intervention est réalisée avec le plus grand soin. Mon objectif reste
                                toujours le même : restaurer les performances de votre appareil,
                                prolonger sa durée de vie et préserver vos données lorsque cela est possible.
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
                                Bien que ma spécialisation soit naturellement orientée vers l'écosystème
                                Apple, j'interviens également sur les environnements Windows et Linux afin
                                d'accompagner particuliers, indépendants et entreprises dans leurs besoins
                                de maintenance, d'optimisation ou de réparation.
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
                                <em>
                                    Derrière chaque Mac, chaque iPhone ou chaque iPad se cachent souvent
                                    des projets professionnels, des souvenirs personnels et une partie de
                                    votre quotidien. C'est avec cet état d'esprit que j'aborde chaque
                                    intervention, en mettant à votre service plus de trois décennies
                                    d'expérience et une passion née d'un simple cadeau reçu en 1988.
                                </em>
                            </p>
                        </div>

                        </div>
                    </div>
                </div>

                {/* Section Tarifs (droite) - 50% */}
                <div
                    className="w-full lg:w-1/2 flex items-center px-8 sm:px-12 lg:px-16 py-16 lg:py-24"
                    style={{ background: 'linear-gradient(135deg, #344154 0%, #1a2333 100%)' }}
                >
                    <div className="w-full max-w-2xl mx-auto">
                        {/* Titre centré */}
                        <div className="text-center mb-12">
                            <h2
                                className="font-bold mb-3"
                                style={{
                                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                                    color: '#FFFFFF',
                                    fontSize: windowWidth < 768 ? '24px' : windowWidth < 1024 ? '28px' : '32px',
                                    lineHeight: '1.2'
                                }}
                            >
                                Prestations
                            </h2>
                            <div className="w-12 h-1 bg-[#C38D43] mx-auto rounded-full" />
                        </div>

                        {/* Grille de cartes 2x2 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                            {pricingCards.map((card) => (
                                <div
                                    key={card.id}
                                    className={`relative rounded-2xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                                        card.popular ? 'ring-2 ring-offset-2 ring-offset-[#1a2333] ring-[#C38D43]' : ''
                                    }`}
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',

                                        border: card.isLinks
                                            ? '1px solid rgba(195,141,67,0.25)'
                                            : card.popular
                                            ? '1px solid rgba(195,141,67,0.4)'
                                            : '1px solid rgba(255,255,255,0.08)',

                                        boxShadow: card.popular
                                            ? '0 20px 40px -15px rgba(195,141,67,0.15), 0 10px 20px -10px rgba(0,0,0,0.4)'
                                            : '0 20px 40px -15px rgba(0,0,0,0.35)',

                                        backdropFilter: 'blur(24px)',
                                    }}
                                >
                                    {/* Badge populaire */}
                                    {card.popular && (
                                        <div
                                            className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-white shadow-md"
                                            style={{ 
                                                background: 'linear-gradient(135deg, #C38D43 0%, #A27232 100%)',
                                                border: '1px solid rgba(255,255,255,0.1)'
                                            }}
                                        >
                                            Populaire
                                        </div>
                                    )}

                                    {/* Titre */}
                                    <h3
                                        className="mb-8 font-bold text-center tracking-wide"
                                        style={{
                                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                                            fontSize: '22px',                                            
                                            color: card.isLinks ? '#C38D43' : '#FFFFFF',
                                            letterSpacing: '0.5px'
                                        }}
                                    >
                                        {card.title}
                                    </h3>

                                    {/* Liste des services */}
                                    {card.isLinks ? (
                                        <div className="space-y-4">
                                            {card.services.map((service, index) => {
                                                const [name, url, description] = service.split('|');

                                                return (
                                                    <a
                                                        key={index}
                                                        href={url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group block"
                                                    >
                                                        <div
                                                            className="rounded-xl p-4 transition-all duration-300 group-hover:scale-[1.03] group-hover:bg-[rgba(255,255,255,0.08)] group-hover:border-[rgba(195,141,67,0.4)]"
                                                            style={{
                                                                background: 'rgba(255, 255, 255, 0.04)',
                                                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                                                boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.2)'
                                                            }}
                                                        >
                                                            <div className="flex justify-between items-center gap-4">

                                                                <div className="flex-1">
                                                                    <div
                                                                        style={{
                                                                            fontSize: '16px',
                                                                            fontWeight: 600,
                                                                            color: '#FFFFFF',
                                                                            marginBottom: '4px'
                                                                        }}
                                                                    >
                                                                        {name}
                                                                    </div>

                                                                    <div
                                                                        style={{
                                                                            fontSize: '12px',
                                                                            lineHeight: '1.5',
                                                                            color: '#94A3B8'
                                                                        }}
                                                                    >
                                                                        {description}
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    className="flex items-center justify-center rounded-xl flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                                    style={{
                                                                        width: '38px',
                                                                        height: '38px',
                                                                        background:
                                                                            'rgba(195,141,67,.15)',
                                                                        color: '#C38D43',
                                                                        fontSize: '16px',
                                                                        fontWeight: 700
                                                                    }}
                                                                >
                                                                    ↗
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <ul className="space-y-4">
                                            {card.services.map((service, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start"
                                                    style={{
                                                        fontFamily: 'Inter, sans-serif',
                                                        fontSize: '15px',
                                                        lineHeight: '1.6',
                                                        color: '#F8FAFC'
                                                    }}
                                                >
                                                    <svg
                                                        className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0"
                                                        style={{ color: '#C38D43' }}
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
                                        e.currentTarget.style.color = '#B27C33';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                                        e.currentTarget.style.color = '#C38D43';
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
