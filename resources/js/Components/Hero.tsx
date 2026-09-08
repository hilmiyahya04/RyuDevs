import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';
import { MetricCard } from './MetricCard';
import { BrandLogos } from './BrandLogos';
import { motion } from 'motion/react';

export function Hero() {
    return (
        <main id='hero' className="w-full max-w-7xl mx-auto px-6 sm:px-8 pt-8 md:pt-14 pb-16 flex flex-col justify-center min-h-[calc(100vh-100px)] relative mt-20">
            {/* Background ambient lighting */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Main Content Area */}
            <div className="relative z-10 flex flex-col items-start max-w-3xl">
                {/* Eyebrow / Tagline Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3.5 mb-6 md:mb-8"
                >
                    <div className="text-white/90">
                        <Globe size={22} strokeWidth={1.5} className="text-white/80" />
                    </div>
                    <div className="w-[1px] h-6 bg-white/20" />
                    <div className="flex flex-col">
                        <span className="text-[11px] font-semibold tracking-[0.14em] text-neutral-200 uppercase leading-none mb-1">
                            Future Innovation coba
                        </span>
                        <span className="text-[11px] font-semibold tracking-[0.14em] text-neutral-400 uppercase leading-none">
                            Technologyyy
                        </span>
                    </div>
                </motion.div>

                {/* Hero Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-[90px] font-light tracking-tight text-white leading-[1.02] sm:leading-[0.98] select-none"
                >
                    <span className="block font-bold">Technologyyy</span>
                    <span className="block font-bold">Crafted for All Coba</span>
                    <span className="block font-bold">
                        Not <span className="font-serif-custom italic font-normal tracking-normal bg-gradient-to-r from-[#ff4b14] via-[#ff6826] to-[#f77e38] bg-clip-text text-transparent pr-2">Machines</span>
                    </span>
                </motion.h1>

                {/* Subtitle Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-neutral-400 text-base sm:text-[18px] max-w-lg font-normal leading-relaxed mt-7 mb-10"
                >
                    We create clear, intuitive, and accessible digital experiences designed for real human behavior.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap items-center gap-6 sm:gap-8 mb-16 lg:mb-20"
                >
                </motion.div>
            </div>
        </main>
    );
}
