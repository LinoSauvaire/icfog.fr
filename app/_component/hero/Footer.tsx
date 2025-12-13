
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <footer
            className="py-6 px-4 sm:px-6 lg:px-8"
            style={{ backgroundColor: '#243940' }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <p
                        className="leading-relaxed"
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: windowWidth < 768 ? '14px' : '16px',
                            color: '#ffffff',
                            lineHeight: '1.6'
                        }}
                    >
                        © IcFog 2025 – Apple Friendly –
                        <Link
                            href="/mentions-legales"
                            className="hover:underline ml-1 transition-all duration-200"
                            style={{
                                color: '#ffffff',
                                textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#C38D43';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = '#ffffff';
                            }}
                        >
                            Mentions légales
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}