'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix des icônes de marqueur par défaut (cassées avec les bundlers modernes)
const defaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

export default function MapComponent() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Initialisation impérative de la carte
        const map = L.map(containerRef.current, {
            center: [43.6425, 5.0983],
            zoom: 16,
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.marker([43.641081492255296, 5.095579902413643], { icon: defaultIcon })
            .addTo(map)
            .bindPopup(
                '<strong>IcFog Informatique</strong><br />' +
                    '45 Place du Général de Gaulle<br />' +
                    '13300 Salon-de-Provence'
            );

        // Nettoyage propre de la carte (évite l'erreur appendChild au hot-reload)
        return () => {
            map.remove();
        };
    }, []);

    return <div ref={containerRef} style={{ height: '100%', width: '100%' }} />;
}