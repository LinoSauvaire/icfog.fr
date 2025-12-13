'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';



const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-26">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-semibold text-primary" onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({top: 0, behavior: 'smooth'});
                        }}>
                            <Image
                                src="/favicon.png"
                                alt="ICFog Logo"
                                width={100}
                                height={100}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Menu desktop */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <Link
                            href="#services"
                            className="text-primary hover:text-accent font-medium text-base transition-colors duration-200"
                            style={{ fontFamily: 'Inter', fontSize: '20px', color: '#243940' }}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#services')?.scrollIntoView({behavior: 'smooth'});
                            }}
                        >
                            Services
                        </Link>
                        <Link
                            href="#about"
                            className="text-primary hover:text-accent font-medium text-base transition-colors duration-200"
                            style={{ fontFamily: 'Inter', fontSize: '20px', color: '#243940' }}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#about')?.scrollIntoView({behavior: 'smooth'});
                            }}
                        >
                            À propos
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-primary hover:text-accent font-medium text-base transition-colors duration-200"
                            style={{ fontFamily: 'Inter', fontSize: '20px', color: '#243940' }}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#pricing')?.scrollIntoView({behavior: 'smooth'});
                            }}
                        >
                            Tarifs
                        </Link>
                        <Link
                            href="#contact"
                            className="text-primary hover:text-accent font-medium text-base transition-colors duration-200"
                            style={{ fontFamily: 'Inter', fontSize: '20px', color: '#243940' }}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#contact')?.scrollIntoView({behavior: 'smooth'});
                            }}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Bouton CTA Desktop */}
                    <div className="hidden md:flex md:items-center">
                        <Link
                            href="#contact"
                            className="bg-accent text-[20px] hover:bg-primary text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200"
                            style={{ backgroundColor: '#C38D43' }}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#contact')?.scrollIntoView({behavior: 'smooth'});
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#243940';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#C38D43';
                            }}
                        >
                            Contactez-nous
                        </Link>
                    </div>

                    {/* Bouton menu mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-accent transition-colors duration-200"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Ouvrir le menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6 transform transition-transform duration-300" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6 transform rotate-90 transition-transform duration-300"
                                     fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Menu mobile */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${
                    isOpen
                        ? 'max-h-screen opacity-100 pb-6'
                        : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                    <div className="px-2 pt-4 space-y-3 bg-white bg-opacity-95 rounded-lg mt-2">
                        <Link
                            href="#services"
                            className="block text-primary hover:text-accent hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
                            style={{ fontFamily: 'Inter', color: '#243940' }}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#services')?.scrollIntoView({behavior: 'smooth'});
                                setIsOpen(false);
                            }}
                        >
                            Services
                        </Link>
                        <Link
                            href="#about"
                            className="block text-primary hover:text-accent hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
                            style={{ fontFamily: 'Inter', color: '#243940' }}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#about')?.scrollIntoView({behavior: 'smooth'});
                                setIsOpen(false);
                            }}
                        >
                            À propos
                        </Link>
                        <Link
                            href="#pricing"
                            className="block text-primary hover:text-accent hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
                            style={{ fontFamily: 'Inter', color: '#243940' }}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#pricing')?.scrollIntoView({behavior: 'smooth'});
                                setIsOpen(false);
                            }}
                        >
                            Tarifs
                        </Link>
                        <Link
                            href="#contact"
                            className="block text-primary hover:text-accent hover:bg-gray-50 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
                            style={{ fontFamily: 'Inter', color: '#243940' }}
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#contact')?.scrollIntoView({behavior: 'smooth'});
                                setIsOpen(false);
                            }}
                        >
                            Contact
                        </Link>
                        <div className="pt-4 border-t border-gray-200">
                            <Link
                                href="#contact"
                                className="block w-full text-center text-white px-4 py-3 rounded-lg font-medium transition-all duration-200"
                                style={{ backgroundColor: '#C38D43', scrollBehavior: 'smooth' }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#243940';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#C38D43';
                                }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#contact')?.scrollIntoView({behavior: 'smooth'});
                                    setIsOpen(false);
                                }}
                            >
                                Contactez-nous
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};



export default NavBar;