'use client';

import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Optimiser son réseau Wi-Fi à la maison',
    excerpt:
      'Découvrez comment améliorer la stabilité et la portée de votre connexion internet.',
    tag: 'Réseau',
    slug: 'optimiser-reseau-wifi-maison'
  },
  {
    title: 'Les pannes informatiques les plus fréquentes',
    excerpt:
      'Un tour d’horizon des problèmes matériels et logiciels les plus courants.',
    tag: 'Dépannage',
    slug: 'pannes-informatiques-frequentes'
  },
  {
    title: 'Sécuriser son réseau contre les intrusions',
    excerpt:
      'Bonnes pratiques pour protéger vos appareils et vos données.',
    tag: 'Cybersécurité',
    slug: 'securiser-reseau-intrusions'
  }
];

export default function BlogHero() {
  return (
    <section className="w-full py-24 px-6 lg:px-16 bg-white">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1
          className="font-bold"
          style={{
            fontSize: 'clamp(2.2rem,5vw,3.5rem)',
            color: '#334155'
          }}
        >
          Blog informatique & réseaux
        </h1>

        <p className="mt-6 text-lg text-slate-500 leading-8">
          Conseils, tutoriels et guides pour mieux comprendre vos appareils,
          votre réseau et résoudre les problèmes du quotidien.
        </p>
      </div>

      {/* Grid articles */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white rounded-3xl p-8 border hover:-translate-y-2 transition-all duration-300"
            style={{
              boxShadow: '0 12px 35px rgba(0,0,0,0.06)'
            }}
          >
            <span className="text-sm font-semibold text-[#C38D43] uppercase tracking-widest">
              {post.tag}
            </span>

            <h3 className="mt-4 text-xl font-semibold text-slate-800">
              {post.title}
            </h3>

            <p className="mt-4 text-slate-500 leading-7">
              {post.excerpt}
            </p>

            <div className="mt-6 flex items-center text-sm font-medium text-slate-700 group-hover:gap-2 transition-all">
              Lire l’article <ArrowRight size={16} className="ml-2" />
            </div>
          </a>
        ))}
        <div className="col-span-full text-center mt-8">
          <button className="px-6 py-3 bg-[#C38D43] text-white rounded-full font-semibold hover:bg-[#b07a3a] transition-colors" onClick={() => window.location.href = '/blog'}>
            Voir tous les articles
          </button>
        </div>
      </div>
    </section>
  );
}