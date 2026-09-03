import React, { useEffect, useState } from 'react';

export interface PortfolioItem {
    id: number;
    title: string;
    slug: string;
    description: string;
    thumbnail: string;
    project_url: string;
    github_url: string;
    category: string;
    is_featured: boolean;
}

interface ApiResponse {
    success: boolean;
    data: PortfolioItem[];
}

const API_BASE_URL = 'http://localhost:8000';

export function Portfolio() {
    const [projects, setProjects] = useState<PortfolioItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/portfolios`, {
                    headers: {
                        'Accept': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Gagal mengambil data: ${response.statusText}`);
                }

                const result: ApiResponse = await response.json();
                setProjects(result.data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Terjadi kesalahan');
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolios();
    }, []);

    return (
        <section id="portfolio" className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-20 relative z-10">
            <div className="mb-12">
                <p className="text-neutral-400 text-3xl max-w-4xl mx-auto text-center">
                    Our Portfolio
                </p>
                <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4 text-center">
                    Some Of <span className="text-orange-500">Our Works.</span>
                </h2>
                <div className="border-b-4 border-white pb-4 w-44 rounded mx-auto"></div>
            </div>

            {/* State Handling: Loading & Error */}
            {loading && (
                <div className="text-center text-neutral-400 py-12">
                    Memuat data portfolio...
                </div>
            )}

            {error && (
                <div className="text-center text-red-500 py-12">
                    Gagal memuat portfolio: {error}
                </div>
            )}

            {/* Render Data dari Backend Filament */}
            {!loading && !error && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative rounded-2xl bg-neutral-900/50 border border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] flex flex-col"
                        >
                            {/* Image Container dengan Zoom Effect */}
                            <div className="relative aspect-video w-full overflow-hidden bg-neutral-800">
                                <img
                                    src={`http://localhost:8000/storage/${project.thumbnail}`}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                                {/* Category Badge */}
                                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-950/80 backdrop-blur-md rounded-full border border-indigo-500/30">
                                    {project.category}
                                </span>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col flex-grow justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-300 mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-neutral-400 line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Action Link / External URLs */}
                                <div className="mt-6 flex items-center justify-between">
                                    <a
                                        href={project.project_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                                    >
                                        View Project
                                        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>

                                    {project.github_url && (
                                        <a
                                            href={project.github_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs font-semibold text-neutral-400 hover:text-white transition-colors duration-300"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}