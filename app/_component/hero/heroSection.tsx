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


    return (
        <section className="relative h-[70vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-32 md:pt-40">
            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
            
            {/* Image de fond en VRAI FULLSCREEN dans sa section (sans zoom artificiel excessif) */}
            <div className="absolute inset-0 z-1 w-full h-full">
                <img
                    src="/assets/image0.jpeg"
                    alt="IC Fog Background"
                    className="w-full h-full object-cover"
                    style={{
                        transform: `translateY(${scrollY * 0.15}px)`,
                        transformOrigin: 'center center',
                    }}
                />
            </div>

            {/* Overlay global sombre semi-transparent pour détacher le texte blanc et doré */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(15, 23, 42, 0.45)', // Slate-900 à 45% pour un contraste parfait
                    zIndex: 2
                }}
            />

            {/* Contenu centré - responsive */}
            <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" style={{ zIndex: 10 }}>
                {/* Titre principal */}
                <h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-tight drop-shadow-md"
                    style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        color: '#FFFFFF',
                        fontSize: windowWidth < 768 ? 'clamp(32px, 8vw, 42px)' : 'clamp(44px, 5vw, 68px)'
                    }}
                >
                    <span 
                        className="inline-block"
                        style={{
                            animation: 'slideIn 0.8s ease-out forwards',
                            opacity: 0,
                            marginRight: '12px'
                        }}
                    >
                        Réparer
                    </span>
                    <span 
                        className="inline-block"
                        style={{
                            animation: 'slideIn 0.8s ease-out 0.4s forwards',
                            opacity: 0,
                            marginRight: '12px'
                        }}
                    >
                        Préserver
                    </span>
                    <span 
                        className="inline-block text-[#C38D43]"
                        style={{
                            animation: 'slideIn 0.8s ease-out 0.8s forwards',
                            opacity: 0
                        }}
                    >
                        Optimiser
                    </span>
                </h1>

                {/* Sous-titre */}
                <p
                    className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-sm"
                    style={{
                        fontFamily: 'Inter, sans-serif',
                        color: '#E2E8F0',
                        fontSize: windowWidth < 768 ? 'clamp(15px, 4vw, 19px)' : 'clamp(18px, 2.5vw, 22px)'
                    }}
                >
                    Le savoir-faire Apple au service de la maintenance et de la réparation
                </p>

                {/* Bouton - responsive */}
                <div className="flex justify-center items-center">
                    <Link
                        href="#services"
                        className="w-full sm:w-auto px-8 py-4 text-white font-extrabold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105 uppercase tracking-wider text-sm"
                        style={{
                            background: 'linear-gradient(135deg, #C38D43 0%, #A27232 100%)',
                            fontSize: windowWidth < 768 ? '13px' : '15px'
                        }}
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.filter = 'brightness(1.08)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.filter = 'none';
                        }}
                    >
                        Nos compétences
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