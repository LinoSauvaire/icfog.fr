'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HeroSection(){
    const [scrollY, setScrollY] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        const handleResize = () => setWindowWidth(window.innerWidth);

        // Initialiser la largeur
        setWindowWidth(window.innerWidth);

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Calculer l'échelle selon la taille d'écran
    const getImageScale = () => {
        if (windowWidth < 768) return 1; // Mobile - moins de zoom
        if (windowWidth < 1024) return 1.2; // Tablet - zoom moyen
        return 1.1;
    };

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Image de fond avec déZoom responsive */}
            <img
                src="/assets/image0.jpeg"
                alt="IC Fog Background"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: `${100 * getImageScale()}%`,
                    height: `${100 * getImageScale()}%`,
                    objectFit: 'cover',
                    transform: `translate(-50%, -50%) translateY(${scrollY * 0.5}px) scale(${getImageScale()})`,
                    transformOrigin: 'center center',
                    zIndex: 1
                }}
            />

            {/* Overlay semi-transparent */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    zIndex: 2
                }}
            />

            {/* Contenu centré - responsive */}
            <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" style={{ zIndex: 10 }}>
                {/* Titre principal */}
                <h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
                    style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        color: '#243940',
                        fontSize: windowWidth < 768 ? 'clamp(28px, 8vw, 36px)' : 'clamp(32px, 5vw, 48px)'
                    }}
                >
                    Réparer. Préserver. Optimiser.
                </h1>

                {/* Sous-titre */}
                <p
                    className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed"
                    style={{
                        fontFamily: 'Inter, sans-serif',
                        color: '#4a5568',
                        fontSize: windowWidth < 768 ? 'clamp(14px, 4vw, 18px)' : 'clamp(16px, 2.5vw, 20px)'
                    }}
                >
                    Spécialiste Apple en maintenance et réparation.
                </p>

                {/* Boutons - responsive */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                    <Link
                        href="#services"
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                        style={{
                            backgroundColor: '#028BA3',
                            fontSize: windowWidth < 768 ? '14px' : '16px'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#026b7a';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#028BA3';
                        }}
                    >
                        Nos services
                    </Link>

                    <Link
                        href="#contact"
                        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white font-medium rounded-lg border-2 transition-all duration-200 hover:shadow-lg transform hover:scale-105"
                        style={{
                            color: '#028BA3',
                            borderColor: '#028BA3',
                            fontSize: windowWidth < 768 ? '14px' : '16px'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#028BA3';
                            e.currentTarget.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#ffffff';
                            e.currentTarget.style.color = '#028BA3';
                        }}
                    >
                        Contactez-nous
                    </Link>
                </div>
            </div>

            {/* Indicateur de scroll - responsive */}
            <div
                className="absolute left-1/2 transform -translate-x-1/2 animate-bounce"
                style={{
                    zIndex: 10,
                    bottom: windowWidth < 768 ? '20px' : '32px'
                }}
            >
                <div
                    className="border-2 border-white rounded-full flex justify-center"
                    style={{
                        width: windowWidth < 768 ? '20px' : '24px',
                        height: windowWidth < 768 ? '32px' : '40px'
                    }}
                >
                    <div
                        className="bg-white rounded-full mt-2 animate-pulse"
                        style={{
                            width: windowWidth < 768 ? '2px' : '4px',
                            height: windowWidth < 768 ? '8px' : '12px'
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
};