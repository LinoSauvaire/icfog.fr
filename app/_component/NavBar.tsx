'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: 'À propos' },
        { href: '#services', label: 'Compétences' },
        { href: '#pricing', label: 'Services' },
        { href: '#contact', label: 'Contact' }
    ];

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) {
            const offset = scrolled ? 70 : 90; // Align dynamic offset to the navbar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsOpen(false);
        }
    };

    return (
        <nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100/50 py-3' 
                    : 'bg-transparent py-4 md:py-6'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-16' : 'h-20 md:h-24'}`}>
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link 
                            href="/" 
                            className="flex items-center transition-all duration-300 transform-gpu hover:scale-105"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({top: 0, behavior: 'smooth'});
                            }}
                        >
                            {/* Logo transparent sans fond ni cadre */}
                            <div 
                                className={`relative transition-all duration-300 ${
                                    scrolled 
                                        ? 'w-[90px] h-[90px]' 
                                        : 'w-[120px] h-[120px] md:w-[130px] md:h-[130px]'
                                }`}
                            >
                                <Image
                                    src="/favicon.png"
                                    alt="ICFog Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Menu desktop décalé légèrement vers le bas de 4px pour s'aligner sur la ligne de base du logo */}
                    <div className="hidden xl:flex xl:items-center xl:space-x-8 2xl:space-x-12 translate-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative py-2 text-[20px] md:text-[22px] font-bold tracking-wide transition-colors duration-300 group whitespace-nowrap"
                                style={{ fontFamily: 'Inter, sans-serif', color: '#243940' }}
                                onClick={(e) => handleScrollTo(e, link.href)}
                            >
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#C38D43]">
                                    {link.label}
                                </span>
                                {/* Ligne animée sous le lien au survol */}
                                <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#C38D43] transition-all duration-300 group-hover:w-full rounded-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Bouton CTA Desktop également abaissé et harmonisé */}
                    <div className="hidden xl:flex xl:items-center translate-y-1">
                        <Link
                            href="#contact"
                            className="text-[16px] md:text-[18px] uppercase tracking-wider font-extrabold text-white px-7 py-4.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
                            style={{ 
                                background: 'linear-gradient(135deg, #C38D43 0%, #A27232 100%)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                            onClick={(e) => handleScrollTo(e, '#contact')}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                                e.currentTarget.style.filter = 'brightness(1.08)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                                e.currentTarget.style.filter = 'none';
                            }}
                        >
                            Prendre Rendez-vous
                        </Link>
                    </div>

                    {/* Bouton menu mobile */}
                    <div className="xl:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-xl text-slate-700 hover:text-[#C38D43] hover:bg-slate-50 transition-all duration-200"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Ouvrir le menu</span>
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Menu mobile */}
                <div 
                    className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen
                            ? 'max-h-[350px] opacity-100 mt-4 pb-4'
                            : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-2 bg-white rounded-2xl border border-slate-100 shadow-xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block text-slate-700 hover:text-[#C38D43] hover:bg-slate-50 px-4 py-3 rounded-xl text-xl font-semibold transition-all duration-200"
                                style={{ fontFamily: 'Inter, sans-serif' }}
                                onClick={(e) => handleScrollTo(e, link.href)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-3 px-4">
                            <Link
                                href="#contact"
                                className="block w-full text-center text-white px-5 py-3 rounded-full font-bold text-base uppercase tracking-wider transition-all duration-300"
                                style={{ 
                                    background: 'linear-gradient(135deg, #C38D43 0%, #A27232 100%)'
                                }}
                                onClick={(e) => handleScrollTo(e, '#contact')}
                            >
                                Prendre Rendez-vous
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;