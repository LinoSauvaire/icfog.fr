'use client';

import { useState } from 'react';
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
    Building2,
    Zap,
    Search,
    ChevronRight,
    Check
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
        title: 'Mac Pro & Studio',
        icon: Cpu,
        description:
            'Maintenance avancée et assistance professionnelle.'
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
    const [activeTab, setActiveTab] = useState(0);

    const tabsData = [
        {
            id: 0,
            title: 'Diagnostic',
            icon: Search,
            heading: 'Diagnostic Apple',
            subheading: 'Diagnostic Mac, iPhone, iPad et appareils Apple',
            intro: "Votre appareil Apple rencontre un problème de démarrage, une baisse de performances ou un dysfonctionnement inexpliqué ? Nous réalisons un diagnostic complet afin d'identifier rapidement l'origine de la panne et de vous proposer une solution adaptée.\n\nNotre expertise couvre l'ensemble de l'écosystème Apple : MacBook, iMac, iPhone, iPad, Apple Watch et stations de travail professionnelles.",
            listTitle: 'Ce que comprend notre diagnostic',
            listItems: [
                'Analyse matérielle et logicielle',
                'Contrôle de l\'état des composants',
                'Vérification du stockage et de la mémoire',
                'Test des batteries et systèmes d\'alimentation',
                'Détection des erreurs système et des conflits logiciels',
                'Rapport détaillé et recommandations'
            ],
            boxTitle: 'Pourquoi faire réaliser un diagnostic ?',
            boxText: "Un diagnostic précis permet d'éviter les réparations inutiles, de réduire les coûts d'intervention et de garantir une prise en charge efficace de votre équipement Apple.",
            ctaText: "Besoin d'un diagnostic rapide ? Contactez-nous pour une analyse complète de votre appareil Apple."
        },
        {
            id: 1,
            title: 'Réparation',
            icon: Wrench,
            heading: 'Réparation Apple',
            subheading: 'Réparation MacBook, iMac, iPhone et iPad',
            intro: "Nous intervenons sur les pannes matérielles et logicielles affectant les appareils Apple afin de restaurer leurs performances et leur fiabilité.\n\nGrâce à notre expertise technique, nous prenons en charge aussi bien les réparations courantes que les interventions complexes sur l'ensemble de la gamme Apple.",
            listTitle: 'Nos services de réparation',
            listItems: [
                'Réparation de MacBook et iMac',
                'Remplacement d\'écran iPhone et iPad',
                'Remplacement de batterie',
                'Réparation des connecteurs de charge',
                'Résolution des problèmes de démarrage',
                'Réparation après dégât liquide',
                'Réinstallation et réparation de macOS et iOS',
                'Remplacement de composants défectueux'
            ],
            boxTitle: 'Une intervention adaptée à votre matériel',
            boxText: "Chaque appareil bénéficie d'une analyse approfondie afin de garantir une réparation fiable et durable.",
            ctaText: "Confiez votre appareil Apple à un spécialiste de la réparation et retrouvez un équipement parfaitement fonctionnel."
        },
        {
            id: 2,
            title: 'Maintenance',
            icon: ShieldCheck,
            heading: 'Maintenance Apple',
            subheading: 'Maintenance préventive pour Mac, iPhone et équipements Apple',
            intro: "Une maintenance régulière permet d'améliorer les performances, de prolonger la durée de vie de vos appareils et de limiter les risques de panne.\n\nNous proposons des prestations de maintenance adaptées aux particuliers, professionnels, indépendants et entreprises utilisant des solutions Apple au quotidien.",
            listTitle: 'Prestations de maintenance',
            listItems: [
                'Nettoyage matériel et logiciel',
                'Contrôle de l\'état des composants',
                'Vérification des batteries',
                'Installation des mises à jour système',
                'Optimisation de la sécurité',
                'Contrôle des sauvegardes',
                'Vérification des performances générales'
            ],
            boxTitle: 'Les avantages d\'une maintenance régulière',
            listItemsSecondary: [
                'Réduction des risques de panne',
                'Meilleures performances',
                'Sécurité renforcée',
                'Durée de vie prolongée du matériel',
                'Continuité d\'activité pour les professionnels'
            ],
            ctaText: "Préservez la fiabilité de votre environnement Apple grâce à un suivi technique regulier."
        },
        {
            id: 3,
            title: 'Optimisation',
            icon: Zap,
            heading: 'Optimisation Apple',
            subheading: 'Optimisation des performances Mac et environnement Apple',
            intro: "Votre Mac est plus lent qu'auparavant ? Vos applications manquent de réactivité ? Nous optimisons votre configuration afin de retrouver toute la puissance de votre matériel Apple.",
            listTitle: 'Nos interventions d\'optimisation',
            listItems: [
                'Optimisation de macOS',
                'Nettoyage des fichiers inutiles',
                'Réorganisation du stockage',
                'Paramétrage avancé du système',
                'Optimisation d\'iCloud',
                'Configuration des sauvegardes',
                'Amélioration des performances des postes professionnels'
            ],
            boxTitle: 'Les bénéfices',
            listItemsSecondary: [
                'Démarrage plus rapide',
                'Applications plus fluides',
                'Gain de productivité',
                'Meilleure stabilité système',
                'Utilisation optimale des ressources'
            ],
            boxText: "Que vous soyez particulier, créatif ou entreprise, nous vous aidons à tirer le meilleur parti de vos équipements Apple.",
            ctaText: "Redonnez de la vitesse et de la fluidité à votre environnement Apple."
        },
        {
            id: 4,
            title: 'Données',
            icon: Database,
            heading: 'Récupération de données Apple',
            subheading: 'Récupération de données sur Mac, iPhone, iPad et supports Apple',
            intro: "Une panne, une suppression accidentelle ou un disque défaillant peuvent entraîner la perte de données importantes. Nous mettons en œuvre des procédures spécialisées pour maximiser les chances de récupération.",
            listTitle: 'Supports pris en charge',
            listItems: [
                'SSD MacBook et iMac',
                'Disques externes',
                'Sauvegardes Time Machine',
                'Volumes APFS et HFS+',
                'iPhone et iPad',
                'Supports de stockage professionnels'
            ],
            boxTitle: 'Données récupérables',
            listItemsSecondary: [
                'Documents professionnels',
                'Photos et vidéos',
                'Bibliothèques multimédias',
                'Courriels',
                'Contacts',
                'Projets de création',
                'Archives professionnelles'
            ],
            boxText: "Une intervention sécurisée : Toutes les opérations sont réalisées dans le respect de la confidentialité et de l'intégrité de vos données.",
            ctaText: "Ne prenez pas de risques avec vos fichiers importants. Contactez-nous dès les premiers signes de défaillance."
        }
    ];

    return (
        <section
            className="w-full py-24 px-6 lg:px-16 overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)'
            }}
        >
            {/* Styles pour le scroller infini des petites cartes */}
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes marqueeScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee-infinite {
                    display: flex;
                    width: max-content;
                    animation: marqueeScroll 35s linear infinite;
                }
                .animate-marquee-infinite:hover {
                    animation-play-state: paused;
                }
            `}} />

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span
                        className="uppercase tracking-[3px] font-semibold text-sm"
                        style={{ color: '#C38D43' }}
                    >
                        Réparation Apple
                    </span>

                    <h2
                        className="mt-4 font-bold tracking-tight"
                        style={{
                            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
                            lineHeight: '1.15',
                            color: '#1E293B',
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif'
                        }}
                    >
                        L'expertise au service de vos appareils Apple
                    </h2>

                    <p
                        className="mt-6 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
                        style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}
                    >
                        Diagnostic, réparation, maintenance, optimisation et récupération de données sur l'ensemble de l'écosystème Apple. Nous intervenons sur MacBook, iMac, iPhone, iPad, Apple Watch et stations professionnelles.
                    </p>
                </div>

                {/* 🎠 CAROUSEL / SCROLLER HORIZONTAL INFINI POUR LES PETITES CARTES */}
                <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-24 overflow-hidden py-4">
                    {/* Ombres de dégradé sur les bords pour un effet fondu élégant */}
                    <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#FFFFFF] to-transparent z-10 pointer-events-none" />
                    
                    <div className="animate-marquee-infinite gap-6 px-4">
                        {/* Liste originale + dupliquée pour défilement infini */}
                        {[...devices, ...devices, ...devices].map((device, idx) => {
                            const Icon = device.icon;
                            return (
                                <div
                                    key={`${device.title}-${idx}`}
                                    className="w-[280px] md:w-[320px] flex-shrink-0 group rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 border border-slate-100"
                                    style={{
                                        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.02)'
                                    }}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                                            style={{ background: 'rgba(195,141,67,0.08)' }}
                                        >
                                            <Icon size={24} color="#C38D43" />
                                        </div>
                                        <h3
                                            className="font-bold text-lg"
                                            style={{ color: '#1E293B', fontFamily: 'SF Pro Display, sans-serif' }}
                                        >
                                            {device.title}
                                        </h3>
                                    </div>
                                    <p
                                        className="text-[13px] md:text-[14px] leading-relaxed"
                                        style={{ color: '#64748B', fontFamily: 'Inter, sans-serif' }}
                                    >
                                        {device.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 🗂️ SYSTEME DE TABS INTERACTIF POUR L'INTEGRALITE DU TEXTE */}
                <div className="mb-28">
                    {/* Switcher de Catégories de Prestiges */}
                    <div className="flex overflow-x-auto pb-3 mb-10 -mx-6 px-6 lg:mx-0 lg:px-0 scrollbar-none justify-start lg:justify-center">
                        <div className="flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200/60 max-w-full">
                            {tabsData.map((tab) => {
                                const TabIcon = tab.icon;
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold tracking-wide uppercase transition-all duration-300 whitespace-nowrap ${
                                            isActive 
                                                ? 'bg-white text-[#C38D43] shadow-md scale-[1.02]' 
                                                : 'text-slate-600 hover:text-[#C38D43] hover:bg-white/50'
                                        }`}
                                    >
                                        <TabIcon size={16} className={isActive ? 'text-[#C38D43]' : 'text-slate-400'} />
                                        {tab.title}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Contenu de la catégorie active */}
                    <div className="transition-all duration-500">
                        {tabsData.map((tab) => {
                            if (activeTab !== tab.id) return null;
                            return (
                                <div 
                                    key={tab.id}
                                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-xl shadow-slate-100/40"
                                >
                                    {/* Colonne de gauche (Présentation et Focus) */}
                                    <div className="lg:col-span-7 flex flex-col justify-between">
                                        <div>
                                            <span className="text-[#C38D43] font-extrabold text-sm uppercase tracking-widest block mb-2">
                                                {tab.heading}
                                            </span>
                                            <h3 
                                                className="text-2xl lg:text-3xl font-extrabold mb-6 tracking-tight"
                                                style={{ color: '#1E293B', fontFamily: 'SF Pro Display, sans-serif' }}
                                            >
                                                {tab.subheading}
                                            </h3>
                                            <div 
                                                className="text-slate-600 text-[15px] lg:text-[16px] leading-relaxed space-y-4 mb-8 whitespace-pre-line"
                                                style={{ fontFamily: 'Inter, sans-serif' }}
                                            >
                                                {tab.intro}
                                            </div>
                                        </div>

                                        {/* Box secondaire d'informations spécifiques */}
                                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 mt-auto">
                                            <h4 className="font-extrabold text-sm uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                                                <ChevronRight size={16} className="text-[#C38D43]" />
                                                {tab.boxTitle}
                                            </h4>
                                            {tab.boxText && (
                                                <p className="text-[14px] leading-relaxed text-slate-600">
                                                    {tab.boxText}
                                                </p>
                                            )}
                                            {tab.listItemsSecondary && (
                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                                                    {tab.listItemsSecondary.map((subItem, sIdx) => (
                                                        <li key={sIdx} className="flex items-center gap-2 text-[13px] text-slate-700 font-semibold">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-[#C38D43]" />
                                                            {subItem}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>

                                    {/* Colonne de droite (Liste structurée & CTA intégré) */}
                                    <div className="lg:col-span-5 flex flex-col justify-between">
                                        <div className="bg-slate-50/50 rounded-2xl p-6 lg:p-8 border border-slate-100">
                                            <h4 className="font-extrabold text-[16px] text-slate-800 mb-6 border-b border-slate-200/60 pb-3 uppercase tracking-wide">
                                                {tab.listTitle}
                                            </h4>
                                            <ul className="space-y-4">
                                                {tab.listItems.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <div className="w-5 h-5 rounded-full bg-[#C38D43]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                            <Check size={12} className="text-[#C38D43]" strokeWidth={3} />
                                                        </div>
                                                        <span className="text-[14px] font-medium text-slate-700">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Badge CTA ciblé en bas de carte */}
                                        <div className="mt-8 p-5 rounded-2xl border border-dashed border-[#C38D43]/40 bg-[#C38D43]/5 text-center">
                                            <p className="text-[14px] font-bold text-slate-800 leading-relaxed">
                                                {tab.ctaText}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 👑 ACCENTUATION PREMIUM : EXPERTISE APPLE COMPLETE */}
                <div 
                    className="rounded-[40px] p-8 lg:p-16 mb-28 border border-slate-800"
                    style={{
                        background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)'
                    }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-7">
                            <span className="text-[#C38D43] font-bold text-xs uppercase tracking-widest block mb-3">
                                Expertise Apple complète
                            </span>
                            <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-tight">
                                Votre spécialiste de l'écosystème Apple
                            </h3>
                            <p className="text-slate-300 leading-relaxed text-[16px] lg:text-[18px]">
                                Nous accompagnons particuliers et professionnels dans la gestion, l'entretien et la réparation de leurs équipements Apple :
                            </p>
                            <p className="text-slate-400 font-bold mt-6 text-[14px] lg:text-[15px] italic border-l-2 border-[#C38D43] pl-4">
                                Intervention sur MacBook, iMac, iPhone, iPad, Apple Watch et stations professionnelles Apple. Notre objectif : garantir la performance, la fiabilité et la pérennité de votre environnement Apple.
                            </p>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="bg-white/5 rounded-3xl p-6 lg:p-8 border border-white/10 backdrop-blur-md">
                                <ul className="space-y-4">
                                    {[
                                        'Diagnostic',
                                        'Réparation',
                                        'Maintenance',
                                        'Optimisation',
                                        'Récupération de données'
                                    ].map((exp, expIdx) => (
                                        <li key={expIdx} className="flex items-center gap-4">
                                            <div className="w-8 h-8 rounded-full bg-[#C38D43]/20 flex items-center justify-center">
                                                <img 
                                                    src="https://fonts.gstatic.com/s/e/notoemoji/17.0/2714/72.png" 
                                                    alt="✔" 
                                                    className="w-4 h-4 object-contain"
                                                />
                                            </div>
                                            <span className="text-white font-extrabold text-[16px] lg:text-[18px]">
                                                {exp}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pourquoi nous choisir */}
                <div className="mb-28">
                    <h3
                        className="text-center text-3xl lg:text-4xl font-extrabold mb-14 tracking-tight"
                        style={{ color: '#1E293B', fontFamily: 'SF Pro Display, sans-serif' }}
                    >
                        Pourquoi nous choisir ?
                    </h3>

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {advantages.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="bg-white rounded-3xl p-8 text-center border border-slate-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                    style={{
                                        boxShadow: '0 10px 30px rgba(0,0,0,.03)'
                                    }}
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-[#C38D43]/10 flex items-center justify-center mx-auto mb-6">
                                        <Icon
                                            size={28}
                                            color="#C38D43"
                                        />
                                    </div>

                                    <h4
                                        className="font-bold text-xl mb-3"
                                        style={{ color: '#1E293B' }}
                                    >
                                        {item.title}
                                    </h4>

                                    <p
                                        className="text-sm leading-relaxed"
                                        style={{ color: '#64748B' }}
                                    >
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA FINAL REPARE */}
                <div
                    className="rounded-[40px] p-8 lg:p-16 text-center border border-slate-800"
                    style={{
                        background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)'
                    }}
                >
                    <h3
                        className="font-extrabold text-white mb-6 tracking-tight leading-tight"
                        style={{
                            fontSize: 'clamp(2rem,4vw,3rem)'
                        }}
                    >
                        Besoin d'une réparation Apple ?
                    </h3>

                    <p className="max-w-3xl mx-auto mb-10 text-slate-300 text-base lg:text-lg leading-relaxed">
                        Panne matérielle, problème logiciel, baisse de performances ou récupération de données : nous vous proposons un diagnostic précis et une solution durable.
                    </p>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-10 py-5 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg hover:shadow-amber-500/10"
                        style={{
                            background: 'linear-gradient(135deg, #C38D43 0%, #A27232 100%)'
                        }}
                    >
                        Demander un diagnostic
                    </a>
                </div>

            </div>
        </section>
    );
}