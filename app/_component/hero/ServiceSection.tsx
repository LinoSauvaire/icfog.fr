'use client';
import {useState, useEffect} from 'react';

interface Service {
    id: number;
    icon: string;
    title: string;
    description: string;
    backText: string;
    backIcon: string;
}

const services: Service[] = [
    {
        id: 1,
        icon: '/assets/svg/WrenchIcon.svg',
        title: 'Dépannage',
        description: 'Diagnostic et réparation rapide de vos équipements',
        backText: 'Service de dépannage informatique professionnel avec intervention rapide pour tous types de pannes.',
        backIcon: '🔧'
    },
    {
        id: 2,
        icon: '/assets/svg/ScreenIcon.svg',
        title: 'Ordinateur fixe et portable',
        description: 'Maintenance et réparation des ordinateurs',
        backText: 'Réparation et maintenance d\'ordinateurs fixes et portables toutes marques. Optimisation des performances.',
        backIcon: '🖥️'
    },
    {
        id: 4,
        icon: '/assets/svg/FaxIcon.svg',
        title: 'Installation de périphériques',
        description: 'Configuration de vos équipements',
        backText: 'Installation et configuration de tous types de périphériques : imprimantes, scanners, équipements réseau.',
        backIcon: '🖨️'
    },
    {
        id: 5,
        icon: '/assets/svg/LaptopIcon.svg',
        title: 'Réparation et assistance informatique',
        description: 'Support technique personnalisé',
        backText: 'Assistance technique complète et dépannage informatique sur site ou à distance selon vos besoins.',
        backIcon: '💻'
    },
    {
        id: 6,
        icon: '/assets/svg/CyberSecurityIcon.svg',
        title: 'Gestion & installation de réseaux',
        description: 'Solutions réseau professionnelles',
        backText: 'Configuration et sécurisation de réseaux d\'entreprise. Installation de serveurs et équipements réseau.',
        backIcon: '🌐'
    }
];

export default function ServicesSection() {
    const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCardFlip = (id: number) => {
        setFlippedCards(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    return (
        <section id='services' className="py-16 px-4" style={{ backgroundColor: '#F5F5F5' }}>
            <div className="max-w-6xl mx-auto">
                {/* Titre avec ligne décorative */}
                <div className="text-center mb-12">
                    <h2
                        className="text-2xl md:text-3xl font-bold mb-4"
                        style={{
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                            color: '#243940',
                            fontSize: windowWidth < 768 ? '28px' : '32px'
                        }}
                    >
                        Nos domaines d'intervention
                    </h2>
                    <div
                        className="w-20 h-0.5 mx-auto"
                        style={{ backgroundColor: '#C38D43' }}
                    ></div>
                </div>

                {/* Grille de services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="relative h-64 cursor-pointer group"
                            onClick={() => handleCardFlip(service.id)}
                            style={{ perspective: '1000px' }}
                        >
                            <div
                                className={`relative w-full h-full transition-transform duration-700 transform-gpu ${
                                    flippedCards.has(service.id) ? 'rotate-y-180' : ''
                                }`}
                                style={{
                                    transformStyle: 'preserve-3d',
                                    transform: flippedCards.has(service.id) ? 'rotateY(180deg)' : 'rotateY(0deg)'
                                }}
                            >
                                {/* Face avant */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:translate-y-[-4px]"
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))'
                                    }}
                                >
                                    {/* Icône */}
                                    <div className="mb-4 flex items-center justify-center">
                                        <img
                                            src={service.icon}
                                            alt={service.title}
                                            className="w-12 h-12 md:w-16 md:h-16"
                                            style={{
                                                filter: 'brightness(0) saturate(100%) invert(24%) sepia(95%) saturate(1247%) hue-rotate(174deg) brightness(94%) contrast(101%)',
                                                objectFit: 'contain', // Assure que tout le SVG est visible
                                                objectPosition: 'center' // Centre le SVG
                                            }}
                                        />
                                    </div>

                                    {/* Titre */}
                                    <h3
                                        className="mb-3 font-semibold"
                                        style={{
                                            fontFamily: 'Inter, sans-serif',
                                            fontSize: '18px',
                                            color: '#243940'
                                        }}
                                    >
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        style={{
                                            fontFamily: 'Inter, sans-serif',
                                            fontSize: '14px',
                                            color: '#64748b',
                                            lineHeight: '1.5'
                                        }}
                                    >
                                        {service.description}
                                    </p>

                                    {/* Indicateur de flip */}
                                    <div
                                        className="absolute bottom-3 right-3 text-xs opacity-60"
                                        style={{ color: '#028BA3' }}
                                    >
                                        ↻
                                    </div>
                                </div>

                                {/* Face arrière */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center"
                                    style={{
                                        backfaceVisibility: 'hidden',
                                        transform: 'rotateY(180deg)',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))'
                                    }}
                                >
                                    {/* Icône secondaire */}
                                    <div
                                        className="text-3xl mb-4"
                                        style={{ color: '#C38D43' }}
                                    >
                                        {service.backIcon}
                                    </div>

                                    {/* Texte explicatif */}
                                    <p
                                        className="leading-relaxed"
                                        style={{
                                            fontFamily: 'Inter, sans-serif',
                                            fontSize: '14px',
                                            color: '#374151',
                                            lineHeight: '1.6'
                                        }}
                                    >
                                        {service.backText}
                                    </p>

                                    {/* Indicateur de retour */}
                                    <div
                                        className="absolute bottom-3 right-3 text-xs opacity-60"
                                        style={{ color: '#C38D43' }}
                                    >
                                        ↻
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}