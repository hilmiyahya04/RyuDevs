import React from 'react';

// Interface untuk tipe data review
interface ReviewItem {
    id: number;
    title: string;
    description: string;
    email: string;
    address: string;
    phone: string;
}

// Data review
const reviews: ReviewItem[] = [
    {
        id: 1,
        title: 'What Client Say.',
        description: 'Berikut adalah beberapa review dari client kami:',
        email: 'hello@pixeldrift.io',
        address: '912 Nova Street, Sector 14, Berlin',
        phone: '+44 1234 567890',
    },
    {
        id: 2,
        title: 'Great Experience.',
        description: 'Sangat puas dengan hasil pengerjaan proyek dan komunikasi tim.',
        email: 'support@pixeldrift.io',
        address: '456 Tech Avenue, San Francisco',
        phone: '+1 800 555 0199',
    },
    {
        id: 3,
        title: 'Highly Recommended.',
        description: 'Kualitas desain dan performa web sangat memuaskan melebihi ekspektasi.',
        email: 'contact@pixeldrift.io',
        address: '789 Innovation Way, London',
        phone: '+44 20 7946 0912',
    },
];

export default function Review(): React.ReactElement {
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
                                <h3 className="text-3xl font-bold tracking-tight text-white mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    {item.description}
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
                                <div className="flex items-center gap-3">
                                    <img
                                        src="/Logos/home.png"
                                        alt="Address Icon"
                                        className="h-5 w-auto object-contain"
                                    />
                                    <p className="text-neutral-400 text-xs">{item.address}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <img
                                        src="/Logos/phone.png"
                                        alt="Phone Icon"
                                        className="h-5 w-auto object-contain"
                                    />
                                    <p className="text-neutral-400 text-xs">{item.phone}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}