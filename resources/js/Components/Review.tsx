// resources/js/Components/Review.tsx

import React, { useEffect, useState } from 'react';

// Interface untuk tipe data review, disesuaikan dengan response API
interface ReviewItem {
    id: number;
    customer_name: string;
    position: string | null;
    review: string;
    email: string;
}

export default function Review(): React.ReactElement {
    const [reviews, setReviews] = useState<ReviewItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/review`)
            .then((res) => res.json())
            .then((data: ReviewItem[]) => setReviews(data))
            .catch((err) => console.error('Gagal mengambil data review:', err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <section id="review" className="relative z-20 p-10 text-white text-center my-10">
                <p className="text-neutral-400">Memuat review...</p>
            </section>
        );
    }

    if (reviews.length === 0) {
        return (
            <section id="review" className="relative z-20 p-10 text-white text-center my-10">
                <p className="text-neutral-400">Belum ada review.</p>
            </section>
        );
    }

    // Duplikasi array agar looping marquee bergerak lancar tanpa jeda kosong
    const marqueeItems = [...reviews, ...reviews];

    return (
        <section id="review" className="relative z-20 p-10 text-white text-center my-10">
            {/* Custom Keyframes untuk Tailwind CSS via tag <style> standar TSX */}
            <style>{`
        @keyframes marqueeRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>

            <div className="mb-12">
                <p className="text-neutral-400 text-3xl max-w-4xl mx-auto text-center">
                    Our Review
                </p>
                <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4 text-center">
                    Some Of <span className="text-orange-500">Our Review.</span>
                </h2>
                <div className="border-b-4 border-white pb-4 w-44 rounded mx-auto"></div>
            </div>

            {/* Container Marquee */}
            <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                <div className="flex gap-8 shrink-0 animate-[marqueeRight_25s_linear_infinite] hover:[animation-play-state:paused]">
                    {marqueeItems.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            className="w-[350px] shrink-0 group relative rounded-2xl bg-neutral-900/50 border border-white/10 p-8 transition-all duration-500 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] flex flex-col justify-between text-left"
                        >
                            <div>
                                <h3 className="text-2xl font-bold tracking-tight text-white mb-1">
                                    {item.customer_name}
                                </h3>
                                {item.position && (
                                    <p className="text-orange-500 text-sm mb-4">{item.position}</p>
                                )}
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    {item.review}
                                </p>
                            </div>

                            <div className="space-y-3 mt-8">
                                <div className="flex items-center gap-3">
                                    <img
                                        src="/Logos/email.png"
                                        alt="Email Icon"
                                        className="h-5 w-auto object-contain"
                                    />
                                    <p className="text-neutral-400 text-xs">{item.email}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}