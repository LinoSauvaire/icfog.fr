'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CarouselSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const images = [
        '/assets/carrousels/1.jpg',
        '/assets/carrousels/2.jpg',
        '/assets/carrousels/3.jpg',
        '/assets/carrousels/4.jpg',
        '/assets/carrousels/5.jpg',
        '/assets/carrousels/6.jpg',
        '/assets/carrousels/7.jpg',
        '/assets/carrousels/8.jpg'
    ];

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, images.length]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="max-w-6xl mx-auto">
                {/* Titre */}
                <div className="text-center mb-12">
                    <h2
                        className="text-2xl md:text-3xl font-bold mb-4"
                        style={{
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                            color: '#243940',
                            fontSize: windowWidth < 768 ? '28px' : '32px'
                        }}
                    >
                        Notre atelier en images
                    </h2>
                    <div
                        className="w-20 h-0.5 mx-auto"
                        style={{ backgroundColor: '#C38D43' }}
                    ></div>
                </div>

                {/* Carrousel */}
                <div className="relative">
                    <div
                        className="relative overflow-hidden rounded-2xl"
                        style={{
                            height: windowWidth < 768 ? '300px' : windowWidth < 1024 ? '400px' : '500px',
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                        }}
                    >
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                                    index === currentSlide
                                        ? 'opacity-100 translate-x-0'
                                        : index < currentSlide
                                        ? 'opacity-0 -translate-x-full'
                                        : 'opacity-0 translate-x-full'
                                }`}
                            >
                                <img
                                    src={image}
                                    alt={`Atelier ${index + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                        ))}

                        {/* Boutons navigation */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 transition-all duration-200 hover:scale-110"
                            style={{
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                color: '#243940'
                            }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 transition-all duration-200 hover:scale-110"
                            style={{
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                color: '#243940'
                            }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Indicateurs */}
                    <div className="flex justify-center mt-6 gap-3">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${
                                    index === currentSlide
                                        ? 'w-12 h-3'
                                        : 'w-3 h-3 hover:scale-125'
                                }`}
                                style={{
                                    backgroundColor: index === currentSlide ? '#C38D43' : '#D1D5DB'
                                }}
                                aria-label={`Aller à l'image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
