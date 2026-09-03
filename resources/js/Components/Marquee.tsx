import React from 'react';

interface MarqueeProps {
    itemsRow1?: string[];
    itemsRow2?: string[];
    speed?: number; // Durasi animasi dalam detik (contoh: 20 = 20s)
}

export const Marquee: React.FC<MarqueeProps> = ({
    itemsRow1 = ['WORDPRESS', 'JAVASCRIPT', 'CSS', 'HTML', 'PHP', 'DESIGN', 'LOGO'],
    itemsRow2 = ['REACT', 'NEXTJS', 'TAILWIND', 'TYPESCRIPT', 'NODEJS', 'PYTHON', 'UI/UX'],
    speed = 20 // Default 20 detik
}) => {
    return (
        <div className="overflow-hidden bg-black text-white py-6 space-y-4">
            {/* Baris 1: Bergerak ke Kiri */}
            <div className="flex overflow-hidden whitespace-nowrap">
                <div
                    className="inline-flex space-x-8 animate-marquee"
                    style={{ animationDuration: `${speed}s` }} // Atur kecepatan di sini
                >
                    {itemsRow1.map((tag, index) => (
                        <span key={`row1-primary-${index}`} className="text-5xl sm:text-6xl font-bold tracking-wider">
                            #{tag}
                        </span>
                    ))}
                    {itemsRow1.map((tag, index) => (
                        <span key={`row1-duplicate-${index}`} className="text-5xl sm:text-6xl font-bold tracking-wider">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Baris 2: Bergerak ke Kanan */}
            <div className="flex overflow-hidden whitespace-nowrap">
                <div
                    className="inline-flex space-x-8 animate-marquee-reverse"
                    style={{ animationDuration: `${speed}s` }} // Atur kecepatan di sini
                >
                    {itemsRow2.map((tag, index) => (
                        <span key={`row2-primary-${index}`} className="text-5xl sm:text-6xl font-bold tracking-wider text-orange-500">
                            #{tag}
                        </span>
                    ))}
                    {itemsRow2.map((tag, index) => (
                        <span key={`row2-duplicate-${index}`} className="text-5xl sm:text-6xl font-bold tracking-wider text-orange-500">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marquee;