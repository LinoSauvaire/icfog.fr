import fs from "fs";
import path from "path";
import type { Metadata } from "next";

// Données SEO locales (villes)
interface SeoCityData {
    city: string;
    slug: string;
    meta_title: string;
    meta_description: string;
    h1: string;
    content_markdown: string;
}

// Fonction pour convertir le markdown simplifié ([H1], [H2], [H3], Q/R) en HTML
function renderMarkdown(markdown: string): string {
    const lines = markdown.split("\n");
    let html = "";
    let inList = false;

    for (const line of lines) {
        const trimmed = line.trim();

        if (trimmed.startsWith("[H1]")) {
            html += `<h1>${trimmed.replace("[H1]", "").trim()}</h1>`;
        } else if (trimmed.startsWith("[H2]")) {
            html += `<h2>${trimmed.replace("[H2]", "").trim()}</h2>`;
        } else if (trimmed.startsWith("[H3]")) {
            html += `<h3>${trimmed.replace("[H3]", "").trim()}</h3>`;
        } else if (trimmed.startsWith("Q") && trimmed.includes(":")) {
            const [q, ...rest] = trimmed.split(":");
            html += `<p><strong>${q} :</strong>${rest.join(":").trim()}</p>`;
        } else if (trimmed.startsWith("R") && trimmed.includes(":")) {
            const [r, ...rest] = trimmed.split(":");
            html += `<p><strong>${r} :</strong>${rest.join(":").trim()}</p>`;
        } else if (trimmed.startsWith("- ")) {
            if (!inList) {
                html += "<ul>";
                inList = true;
            }
            html += `<li>${trimmed.replace("- ", "").trim()}</li>`;
        } else if (trimmed === "") {
            if (inList) {
                html += "</ul>";
                inList = false;
            }
        } else {
            if (inList) {
                html += "</ul>";
                inList = false;
            }
            html += `<p>${trimmed}</p>`;
        }
    }

    if (inList) html += "</ul>";
    return html;
}

async function getSeoData(): Promise<SeoDataData[]> {
    const filePath = path.join(process.cwd(), "public", "data", "icfog_seo_local_data.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContent);
}

export const metadata: Metadata = {
    title: "Expert Apple en Provence | Dépannage Mac & Formation | ICFOG",
    description:
        "ICFOG Informatique : expert Apple à Salon-de-Provence et dans toute la Provence. Dépannage MacBook, iMac, configuration iCloud, sauvegarde Time Machine et formation à domicile.",
    robots: {
        index: true,
        follow: true,
    },
};

export default async function ExpertApplePage() {
    const cities = await getSeoData();

    return (
        <main className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1
                    className="text-4xl font-bold mb-8"
                    style={{
                        fontFamily: "SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif",
                        color: "#243940",
                    }}
                >
                    Expert Apple en Provence : Assistance, Dépannage et Formation Mac
                </h1>

                <div
                    className="prose prose-lg max-w-none"
                    style={{ fontFamily: "Inter, sans-serif", color: "#374151" }}
                >
                    <p className="mb-8 text-gray-600">
                        ICFOG Informatique intervient à domicile et en entreprise dans toute la Provence
                        pour l&apos;assistance, le dépannage et la formation Apple. Découvrez nos services
                        détaillés pour chaque commune.
                    </p>

                    {/* Sommaire des villes */}
                    <nav className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4" style={{ color: "#243940" }}>
                            Villes desservies
                        </h2>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {cities.map((city) => (
                                <li key={city.slug}>
                                    <a
                                        href={`#${city.slug}`}
                                        className="text-[#028BA3] hover:underline"
                                    >
                                        {city.city}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Contenu SEO par ville */}
                    {cities.map((city) => (
                        <section
                            key={city.slug}
                            id={city.slug}
                            className="mb-16 border-t border-gray-200 pt-8"
                        >
                            <div
                                dangerouslySetInnerHTML={{ __html: renderMarkdown(city.content_markdown) }}
                            />
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}