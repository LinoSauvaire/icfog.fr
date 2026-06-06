'use client';

import {
    Laptop,
    Monitor,
    Smartphone,
    Tablet,
    Watch,
    Cpu,
    ShieldCheck,
    Database,
    Wrench,
    Building2
} from 'lucide-react';

const devices = [
    {
        title: 'MacBook',
        icon: Laptop,
        description:
            'Écran Retina, batterie, clavier, carte mère, récupération de données et optimisation.'
    },
    {
        title: 'iMac',
        icon: Monitor,
        description:
            'Migration SSD, alimentation, démarrage, nettoyage et performances.'
    },
    {
        title: 'iPhone',
        icon: Smartphone,
        description:
            'Écran, batterie, Face ID, connecteur de charge et carte mère.'
    },
    {
        title: 'iPad',
        icon: Tablet,
        description:
            'Vitre tactile, écran LCD, batterie et dépannage logiciel.'
    },
    {
        title: 'Apple Watch',
        icon: Watch,
        description:
            'Écran, batterie, synchronisation et diagnostic complet.'
    },
    {
        title: 'Mac Pro & Studio',
        icon: Cpu,
        description:
            'Maintenance avancée et assistance professionnelle.'
    }
];

const advantages = [
    {
        title: 'Expertise Apple',
        icon: ShieldCheck,
        text: 'Techniciens spécialisés Apple, Intel et Apple Silicon.'
    },
    {
        title: 'Récupération de données',
        icon: Database,
        text: 'Protection et récupération de vos fichiers importants.'
    },
    {
        title: 'Maintenance préventive',
        icon: Wrench,
        text: 'Nettoyage, optimisation et prolongation de la durée de vie.'
    },
    {
        title: 'Solutions entreprises',
        icon: Building2,
        text: 'Gestion de flotte Apple et accompagnement professionnel.'
    }
];

export default function AppleSection() {
    return (
        <section
            className="w-full py-24 px-6 lg:px-16"
            style={{
                background:
                    'linear-gradient(180deg,#ffffff 0%,#f8fafc 100%)'
            }}
        >
            <div className="max-w-7xl mx-auto">

                {/* Header */}

                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span
                        className="uppercase tracking-[3px] font-semibold"
                        style={{
                            color: '#C38D43'
                        }}
                    >
                        Réparation Apple
                    </span>

                    <h2
                        className="mt-4 font-bold"
                        style={{
                            fontSize: 'clamp(2rem,5vw,3.5rem)',
                            lineHeight: '1.1',
                            color: '#334155'
                        }}
                    >
                        L'expertise au service de vos appareils Apple
                    </h2>

                    <p
                        className="mt-8 text-lg leading-8"
                        style={{
                            color: '#64748B'
                        }}
                    >
                        Diagnostic, réparation, maintenance, optimisation et
                        récupération de données sur l'ensemble de l'écosystème
                        Apple. Nous intervenons sur MacBook, iMac, iPhone,
                        iPad, Apple Watch et stations professionnelles.
                    </p>
                </div>

                {/* Grid appareils */}

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-24">
                    {devices.map((device) => {
                        const Icon = device.icon;

                        return (
                            <div
                                key={device.title}
                                className="group rounded-3xl bg-white p-8 transition-all duration-300 hover:-translate-y-2"
                                style={{
                                    boxShadow:
                                        '0 15px 40px rgba(0,0,0,0.06)'
                                }}
                            >
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                                    style={{
                                        background:
                                            'rgba(195,141,67,.1)'
                                    }}
                                >
                                    <Icon
                                        size={28}
                                        color="#C38D43"
                                    />
                                </div>

                                <h3
                                    className="font-semibold text-xl mb-4"
                                    style={{
                                        color: '#334155'
                                    }}
                                >
                                    {device.title}
                                </h3>

                                <p
                                    className="leading-7"
                                    style={{
                                        color: '#64748B'
                                    }}
                                >
                                    {device.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Services complémentaires */}

                <div
                    className="rounded-[40px] p-12 lg:p-16 mb-24"
                    style={{
                        background: '#334155'
                    }}
                >
                    <div className="grid lg:grid-cols-2 gap-12">

                        <div>
                            <h3
                                className="text-3xl font-bold mb-8 text-white"
                            >
                                Services spécialisés Apple
                            </h3>

                            <ul className="space-y-4 text-slate-200">
                                <li>✓ Réinstallation macOS</li>
                                <li>✓ Configuration iCloud</li>
                                <li>✓ Optimisation des performances</li>
                                <li>✓ Sauvegarde Time Machine</li>
                                <li>✓ Suppression des logiciels malveillants</li>
                                <li>✓ Migration SSD</li>
                                <li>✓ Réparation après oxydation</li>
                                <li>✓ Récupération de données</li>
                            </ul>
                        </div>

                        <div>
                            <h3
                                className="text-3xl font-bold mb-8"
                                style={{
                                    color: '#C38D43'
                                }}
                            >
                                Maintenance préventive
                            </h3>

                            <p className="text-slate-300 leading-8">
                                Une maintenance régulière permet
                                d'éviter les pannes, réduire les
                                températures, améliorer les
                                performances et prolonger la durée
                                de vie de vos appareils Apple.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Pourquoi nous */}

                <div className="mb-24">

                    <h3
                        className="text-center text-4xl font-bold mb-14"
                        style={{
                            color: '#334155'
                        }}
                    >
                        Pourquoi nous choisir ?
                    </h3>

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {advantages.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="bg-white rounded-3xl p-8 text-center"
                                    style={{
                                        boxShadow:
                                            '0 10px 30px rgba(0,0,0,.05)'
                                    }}
                                >
                                    <Icon
                                        size={42}
                                        color="#C38D43"
                                        className="mx-auto mb-5"
                                    />

                                    <h4
                                        className="font-semibold text-xl mb-3"
                                        style={{
                                            color: '#334155'
                                        }}
                                    >
                                        {item.title}
                                    </h4>

                                    <p
                                        style={{
                                            color: '#64748B'
                                        }}
                                    >
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* SEO */}

                <div className="max-w-5xl mx-auto mb-24">

                    <details className="border-b py-6">
                        <summary className="font-semibold text-xl cursor-pointer">
                            Réparation MacBook
                        </summary>

                        <div className="mt-4 text-slate-600 leading-8">
                            Écran Retina, batterie, clavier,
                            Touch Bar, USB-C, carte mère,
                            refroidissement, récupération de
                            données et optimisation système.
                        </div>
                    </details>

                    <details className="border-b py-6">
                        <summary className="font-semibold text-xl cursor-pointer">
                            Réparation iPhone
                        </summary>

                        <div className="mt-4 text-slate-600 leading-8">
                            Remplacement d'écran, batterie,
                            Face ID, caméra, connecteur de
                            charge, haut-parleurs et carte mère.
                        </div>
                    </details>

                    <details className="border-b py-6">
                        <summary className="font-semibold text-xl cursor-pointer">
                            Réparation iMac
                        </summary>

                        <div className="mt-4 text-slate-600 leading-8">
                            SSD, alimentation, démarrage,
                            problèmes graphiques et migration
                            système.
                        </div>
                    </details>
                </div>

                {/* CTA */}

                <div
                    className="rounded-[40px] p-16 text-center"
                    style={{
                        background:
                            'linear-gradient(135deg,#334155 0%,#1e293b 100%)'
                    }}
                >
                    <h3
                        className="font-bold text-white mb-6"
                        style={{
                            fontSize: 'clamp(2rem,4vw,3rem)'
                        }}
                    >
                        Besoin d'une réparation Apple ?
                    </h3>

                    <p
                        className="max-w-3xl mx-auto mb-10 text-slate-300 text-lg"
                    >
                        Panne matérielle, problème logiciel,
                        baisse de performances ou récupération
                        de données : nous vous proposons un
                        diagnostic précis et une solution durable.
                    </p>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-10 py-5 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                        style={{
                            backgroundColor: '#C38D43',
                            color: '#fff'
                        }}
                    >
                        Demander un diagnostic
                    </a>
                </div>

            </div>
        </section>
    );
}