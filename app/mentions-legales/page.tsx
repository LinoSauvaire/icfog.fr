import Link from 'next/link';

export default function MentionsLegales() {
    return (
        <div className="min-h-screen bg-white">
            {/* Bouton retour */}
            <div className="max-w-4xl mx-auto px-4 pt-8">
                <Link 
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-[#028BA3] transition-colors duration-200"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                    >
                        <path 
                            fillRule="evenodd" 
                            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                            clipRule="evenodd" 
                        />
                    </svg>
                    Retour à l'accueil
                </Link>
            </div>

            {/* Contenu des mentions légales */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 
                    className="text-4xl font-bold mb-8"
                    style={{
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                        color: '#243940'
                    }}
                >
                    Mentions légales
                </h1>

                <div 
                    className="prose prose-lg max-w-none"
                    style={{
                        fontFamily: 'Inter, sans-serif',
                        color: '#374151'
                    }}
                >
                    <p className="mb-8 text-gray-600">
                        Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), 
                        il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
                    </p>

                    {/* Éditeur du site */}
                    <section className="mb-10">
                        <h2 
                            className="text-2xl font-semibold mb-4"
                            style={{ color: '#243940' }}
                        >
                            Éditeur du site
                        </h2>
                        <div className="space-y-2">
                            <p><strong>Nom / Raison sociale :</strong> IcFog Informatique</p>
                            <p><strong>Activité :</strong> Réparation et maintenance informatique</p>
                            <p><strong>Adresse du siège social :</strong> 45 Place du Général de Gaulle, 13330 Salon-de-Provence</p>
                            <p><strong>Numéro de téléphone :</strong> 04 90 57 76 34</p>
                            <p><strong>Adresse e-mail :</strong> <a href="mailto:gilles@icfog.fr" className="text-[#028BA3] hover:underline">gilles@icfog.fr</a></p>
                            <p><strong>Numéro d'immatriculation :</strong> RCS Salon-de-Provence</p>
                            <p><strong>Numéro SIRET :</strong> 795 365 295 00042</p>
                            <p><strong>Responsable de la publication :</strong> IcFog Informatique</p>
                        </div>
                    </section>

                    <hr className="my-8 border-gray-300" />

                    {/* Hébergement */}
                    <section className="mb-10">
                        <h2 
                            className="text-2xl font-semibold mb-4"
                            style={{ color: '#243940' }}
                        >
                            Hébergement
                        </h2>
                        <div className="space-y-2">
                            <p><strong>Hébergeur :</strong> o2switch</p>
                            <p><strong>Adresse :</strong> Chemin des Pardiaux, 63000 Clermont-Ferrand – France</p>
                            <p><strong>Téléphone :</strong> 04 44 44 60 40</p>
                            <p><strong>Site web :</strong> <a href="https://www.o2switch.fr" target="_blank" rel="noopener noreferrer" className="text-[#028BA3] hover:underline">www.o2switch.fr</a></p>
                        </div>
                    </section>

                    <hr className="my-8 border-gray-300" />

                    {/* Propriété intellectuelle */}
                    <section className="mb-10">
                        <h2 
                            className="text-2xl font-semibold mb-4"
                            style={{ color: '#243940' }}
                        >
                            Propriété intellectuelle
                        </h2>
                        <p className="mb-4">
                            L'ensemble des contenus présents sur ce site (textes, images, graphismes, logos, icônes, sons, logiciels, etc.) 
                            est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
                        </p>
                        <p>
                            Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, 
                            des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, 
                            sauf autorisation écrite préalable de l'éditeur.
                        </p>
                    </section>

                    <hr className="my-8 border-gray-300" />

                    {/* Responsabilité */}
                    <section className="mb-10">
                        <h2 
                            className="text-2xl font-semibold mb-4"
                            style={{ color: '#243940' }}
                        >
                            Responsabilité
                        </h2>
                        <p className="mb-4">
                            IcFog Informatique met tout en œuvre pour fournir des informations aussi précises que possible. 
                            Toutefois, il ne saurait être tenu responsable des omissions, des inexactitudes ou des carences dans la mise à jour.
                        </p>
                        <p>
                            L'utilisateur reconnaît utiliser les informations fournies sous sa responsabilité exclusive.
                        </p>
                    </section>

                    <hr className="my-8 border-gray-300" />

                    {/* Données personnelles */}
                    <section className="mb-10">
                        <h2 
                            className="text-2xl font-semibold mb-4"
                            style={{ color: '#243940' }}
                        >
                            Données personnelles
                        </h2>
                        <p className="mb-4">
                            Les informations éventuellement recueillies via les formulaires du site sont destinées exclusivement à IcFog Informatique 
                            et ne sont en aucun cas cédées à des tiers.
                        </p>
                        <p className="mb-4">
                            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, 
                            de rectification, d'effacement et d'opposition concernant vos données personnelles.
                        </p>
                        <p>
                            Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:gilles@icfog.fr" className="text-[#028BA3] hover:underline">gilles@icfog.fr</a>
                        </p>
                    </section>

                    <hr className="my-8 border-gray-300" />

                    {/* Cookies */}
                    <section className="mb-10">
                        <h2 
                            className="text-2xl font-semibold mb-4"
                            style={{ color: '#243940' }}
                        >
                            Cookies
                        </h2>
                        <p className="mb-4">
                            Le site peut être amené à utiliser des cookies afin d'améliorer l'expérience utilisateur et réaliser des statistiques de navigation.
                        </p>
                        <p>
                            L'utilisateur peut configurer son navigateur pour refuser les cookies ou être informé de leur utilisation.
                        </p>
                    </section>

                    <hr className="my-8 border-gray-300" />

                    {/* Droit applicable */}
                    <section className="mb-10">
                        <h2 
                            className="text-2xl font-semibold mb-4"
                            style={{ color: '#243940' }}
                        >
                            Droit applicable
                        </h2>
                        <p>
                            Les présentes mentions légales sont soumises au droit français. 
                            En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.
                        </p>
                    </section>

                    <hr className="my-8 border-gray-300" />

                    {/* Politique de confidentialité - RGPD */}
                    <section className="mb-10">
                        <h1 
                            className="text-3xl font-bold mb-6 mt-12"
                            style={{
                                fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif',
                                color: '#243940'
                            }}
                        >
                            Politique de confidentialité
                        </h1>
                        <p className="mb-8">
                            La présente politique de confidentialité a pour but d'informer les utilisateurs du site IcFog Informatique 
                            des modalités de collecte, d'utilisation et de protection de leurs données personnelles, 
                            conformément au Règlement Général sur la Protection des Données (RGPD – UE 2016/679).
                        </p>

                        {/* 1. Responsable du traitement */}
                        <h3 className="text-xl font-semibold mb-3" style={{ color: '#243940' }}>
                            1. Responsable du traitement des données
                        </h3>
                        <p className="mb-2">Le responsable du traitement est :</p>
                        <div className="mb-6 pl-4">
                            <p><strong>IcFog Informatique</strong></p>
                            <p>45 Place du Général de Gaulle, 13330 Salon-de-Provence</p>
                            <p>Email : <a href="mailto:gilles@icfog.fr" className="text-[#028BA3] hover:underline">gilles@icfog.fr</a></p>
                            <p>Téléphone : 04 90 57 76 34</p>
                        </div>

                        {/* 2. Données personnelles collectées */}
                        <h3 className="text-xl font-semibold mb-3" style={{ color: '#243940' }}>
                            2. Données personnelles collectées
                        </h3>
                        <p className="mb-2">IcFog Informatique peut collecter les données personnelles suivantes :</p>
                        <ul className="list-disc pl-6 mb-6 space-y-1">
                            <li>Nom et prénom</li>
                            <li>Adresse e-mail</li>
                            <li>Numéro de téléphone</li>
                            <li>Message transmis via le formulaire de contact</li>
                        </ul>
                        <p className="mb-6">
                            Ces données sont collectées uniquement lorsque l'utilisateur les transmet volontairement via le site.
                        </p>

                        {/* 3. Finalités du traitement */}
                        <h3 className="text-xl font-semibold mb-3" style={{ color: '#243940' }}>
                            3. Finalités du traitement
                        </h3>
                        <p className="mb-2">Les données personnelles collectées ont pour finalité :</p>
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                            <li>Répondre aux demandes de contact et de devis</li>
                            <li>Assurer le suivi des demandes clients</li>
                            <li>Communiquer des informations relatives aux services proposés</li>
                        </ul>
                        <p className="mb-6">
                            Aucune donnée personnelle n'est utilisée à des fins commerciales sans le consentement explicite de l'utilisateur.
                        </p>

                        {/* 4. Base légale */}
                        <h3 className="text-xl font-semibold mb-3" style={{ color: '#243940' }}>
                            4. Base légale du traitement
                        </h3>
                        <p className="mb-2">Le traitement des données repose sur :</p>
                        <ul className="list-disc pl-6 mb-6 space-y-1">
                            <li>Le consentement de l'utilisateur</li>
                            <li>L'intérêt légitime d'IcFog Informatique pour répondre aux demandes</li>
                        </ul>

                        {/* 5. Durée de conservation */}
                        <h3 className="text-xl font-semibold mb-3" style={{ color: '#243940' }}>
                            5. Durée de conservation des données
                        </h3>
                        <p className="mb-2">
                            Les données personnelles sont conservées uniquement pendant la durée nécessaire aux finalités 
                            pour lesquelles elles ont été collectées :
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-1">
                            <li>Données de contact : 3 ans maximum après le dernier échange</li>
                        </ul>

                        {/* 6. Destinataires */}
                        <h3 className="text-xl font-semibold mb-3" style={{ color: '#243940' }}>
                            6. Destinataires des données
                        </h3>
                        <p className="mb-4">
                            Les données collectées sont destinées exclusivement à IcFog Informatique.
                        </p>
                        <p className="mb-6">
                            Elles ne sont ni vendues, ni échangées, ni transmises à des tiers, sauf obligation légale.
                        </p>

                        {/* 7. Sécurité */}
                        <h3 className="text-xl font-semibold mb-3" style={{ color: '#243940' }}>
                            7. Sécurité des données
                        </h3>
                        <p className="mb-6">
                            IcFog Informatique met en œuvre toutes les mesures techniques et organisationnelles appropriées 
                            afin de garantir la sécurité et la confidentialité des données personnelles.
                        </p>

                        {/* 8. Droits des utilisateurs */}
                        <h3 className="text-xl font-semibold mb-3" style={{ color: '#243940' }}>
                            8. Droits des utilisateurs
                        </h3>
                        <p className="mb-2">Conformément au RGPD, vous disposez des droits suivants :</p>
                        <ul className="list-disc pl-6 mb-4 space-y-1">
                            <li>Droit d'accès</li>
                            <li>Droit de rectification</li>
                            <li>Droit d'effacement</li>
                            <li>Droit d'opposition</li>
                            <li>Droit à la limitation du traitement</li>
                            <li>Droit à la portabilité des données</li>
                        </ul>
                        <p className="mb-2">
                            Vous pouvez exercer ces droits en adressant votre demande par email à : <a href="mailto:gilles@icfog.fr" className="text-[#028BA3] hover:underline">gilles@icfog.fr</a>
                        </p>
                        <p className="mb-6">
                            Une réponse vous sera apportée dans un délai maximum de 30 jours.
                        </p>

                        {/* 9. Cookies */}
                        <h3 className="text-xl font-semibold mb-3" style={{ color: '#243940' }}>
                            9. Cookies
                        </h3>
                        <p className="mb-4">
                            Le site peut utiliser des cookies strictement nécessaires à son fonctionnement ou à des fins de statistiques anonymes.
                        </p>
                        <p className="mb-6">
                            Lors de votre première visite, un bandeau d'information vous permet d'accepter ou de refuser l'utilisation des cookies.
                        </p>

                        {/* 10. Réclamation */}
                        <h3 className="text-xl font-semibold mb-3" style={{ color: '#243940' }}>
                            10. Réclamation
                        </h3>
                        <p className="mb-6">
                            Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, 
                            vous pouvez adresser une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#028BA3] hover:underline">www.cnil.fr</a>
                        </p>

                        {/* 11. Modification */}
                        <h3 className="text-xl font-semibold mb-3" style={{ color: '#243940' }}>
                            11. Modification de la politique de confidentialité
                        </h3>
                        <p className="mb-4">
                            IcFog Informatique se réserve le droit de modifier la présente politique de confidentialité à tout moment.
                        </p>
                        <p className="mb-6">
                            La dernière mise à jour a été effectuée le : <strong>Décembre 2025</strong>
                        </p>
                    </section>

                    <hr className="my-8 border-gray-300" />

                    <p className="text-sm text-gray-500 italic">
                        Dernière mise à jour : Décembre 2025
                    </p>
                </div>
            </div>
        </div>
    );
}
