import type { Config } from 'tailwindcss'

const config: Config = {
    theme: {
        extend: {
            colors: {
                icfog: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                    950: '#172554'
                },
                accent: '#C38D43',
                'accent-orange': '#ff6b35',
                'accent-green': '#10b981',
                'accent-yellow': '#f59e0b',
                'accent-red': '#ef4444',
                neutral: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                    950: '#0a0a0a'
                }
            },
            backgroundColor: {
                'primary': '#028BA3',
                'secondary': '#F9F9F9',
                'dark': '#1e293b'
            },
            textColor: {
                'primary': '#243940',
                'secondary': '#64748b'
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ]
}

export default config