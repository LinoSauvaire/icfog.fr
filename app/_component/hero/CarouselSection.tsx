'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CarouselSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right'>('right');

    const images = [
        '/assets/carrousels/1.webp',
        '/assets/carrousels/2.webp',
        '/assets/carrousels/3.webp',
        '/assets/carrousels/4.webp',
        '/assets/carrousels/5.webp',
        '/assets/carrousels/6.webp'
    ];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto-play
    useEffect(() => {
        const interval = setInterval(() => {
            setDirection('right');
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => {
        setDirection('right');
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setDirection('left');
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 'right' : 'left');
        setCurrentIndex(index);
    };

    const getVisibleImages = () => {
        if (isMobile) {
            return [{ img: images[currentIndex], position: 'center' }];
        }
        const prev = (currentIndex - 1 + images.length) % images.length;
        const next = (currentIndex + 1) % images.length;
        return [
            { img: images[prev], position: 'left' },
            { img: images[currentIndex], position: 'center' },
            { img: images[next], position: 'right' }
        ];
    };

    return (
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F9FAFB' }}>
            <div className="max-w-7xl mx-auto">
                {/* Titre */}
                <div className="text-center mb-12">
                    <h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        style={{
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                            color: '#243940'
                        }}
                    >
                        Notre atelier en images
                    </h2>
                    <div
                        className="w-20 h-1 mx-auto rounded-full"
                        style={{ backgroundColor: '#C38D43' }}
                    ></div>
                </div>

                {/* Carrousel */}
                <div className="relative">
                    {/* Container des images */}
                    <div className="relative overflow-visible">
                        <div 
                            className="flex gap-4 md:gap-6 items-center justify-center"
                            style={{
                                padding: isMobile ? '0' : '0 2rem',
                                minHeight: isMobile ? '300px' : '420px'
                            }}
                        >
                            {getVisibleImages().map((item, idx) => {
                                const isCenter = isMobile ? true : item.position === 'center';
                                const isLeft = item.position === 'left';
                                const isRight = item.position === 'right';
                                
                                return (
                                    <div
                                        key={`${item.img}-${idx}`}
                                        className="transition-all ease-in-out"
                                        style={{
                                            width: isMobile ? '100%' : isCenter ? '42%' : '24%',
                                            minWidth: isMobile ? '100%' : isCenter ? '42%' : '24%',
                                            opacity: isCenter ? 1 : 0.5,
                                            transform: `
                                                scale(${isCenter ? 1 : 0.88})
                                                translateY(${isCenter ? '0px' : '20px'})
                                            `,
                                            filter: isCenter ? 'none' : 'brightness(0.65)',
                                            zIndex: isCenter ? 20 : 10,
                                            transitionDuration: '1500ms',
                                            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                                        }}
                                    >
                                        <div
                                            className="relative rounded-xl overflow-hidden"
                                            style={{
                                                height: isMobile ? '300px' : isCenter ? '380px' : '320px',
                                                boxShadow: isCenter 
                                                    ? '0 20px 40px -12px rgba(0, 0, 0, 0.25)' 
                                                    : '0 8px 20px -5px rgba(0, 0, 0, 0.12)'
                                            }}
                                        >
                                            <Image
                                                src={item.img}
                                                alt="Atelier"
                                                fill
                                                style={{
                                                    objectFit: 'cover',
                                                    objectPosition: 'center'
                                                }}
                                                quality={100}
                                                unoptimized
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Boutons navigation */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 md:-left-4 top-1/2 transform -translate-y-1/2 z-20 rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110"
                        style={{
                            backgroundColor: '#C38D43',
                            color: '#FFFFFF',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)'
                        }}
                    >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 md:-right-4 top-1/2 transform -translate-y-1/2 z-20 rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110"
                        style={{
                            backgroundColor: '#C38D43',
                            color: '#FFFFFF',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)'
                        }}
                    >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Indicateurs */}
                <div className="flex justify-center mt-8 gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className="transition-all duration-300"
                            style={{
                                width: index === currentIndex ? '32px' : '10px',
                                height: '10px',
                                borderRadius: '5px',
                                backgroundColor: index === currentIndex ? '#C38D43' : '#D1D5DB'
                            }}
                            aria-label={`Aller à l'image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
