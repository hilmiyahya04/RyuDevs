import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';
import { MetricCard } from './MetricCard';
import { BrandLogos } from './BrandLogos';
import { motion } from 'motion/react';

export function Hero() {
    return (
        <main id='hero' className="w-full max-w-7xl mx-auto px-6 sm:px-8 pt-8 md:pt-14 pb-16 flex flex-col justify-between min-h-[calc(100vh-100px)] relative mt-20">
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
                            Future Innovation
                        </span>
                        <span className="text-[11px] font-semibold tracking-[0.14em] text-neutral-400 uppercase leading-none">
                            Technology
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
                    <span className="block font-bold">Technology</span>
                    <span className="block font-bold">Crafted for All</span>
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

                {/* CTA & Social Proof Group */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap items-center gap-6 sm:gap-8 mb-16 lg:mb-20"
                >
                    {/* Main Orange Pill CTA Button */}
                    <button
                        id="hero-cta-button"
                        className="group bg-gradient-to-r from-[#e33700] via-[#ea4609] to-[#fa5d20] hover:brightness-110 active:scale-95 transition-all duration-200 text-white font-medium pl-6 pr-2 py-2 rounded-full flex items-center gap-4 shadow-[0_4px_24px_rgba(227,55,0,0.3)] hover:shadow-[0_6px_30px_rgba(227,55,0,0.45)] cursor-pointer"
                    >
                        <span className="text-[15px] font-semibold tracking-tight">Get started</span>
                        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black group-hover:translate-x-0.5 transition-transform">
                            <ArrowRight size={18} strokeWidth={2.4} />
                        </div>
                    </button>

                    {/* Social Proof Avatars & Metric */}
                    <div className="flex items-center gap-3.5">
                        {/* Avatar Stack */}
                        <div className="flex items-center">
                            <img
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                                alt="User"
                                referrerPolicy="no-referrer"
                                className="w-9 h-9 rounded-full object-cover border-2 border-black relative z-30"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                                alt="User"
                                referrerPolicy="no-referrer"
                                className="w-9 h-9 rounded-full object-cover border-2 border-black -ml-3 relative z-20"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                                alt="User"
                                referrerPolicy="no-referrer"
                                className="w-9 h-9 rounded-full object-cover border-2 border-black -ml-3 relative z-10"
                            />
                        </div>

                        {/* Social Proof Text */}
                        <div className="flex flex-col">
                            <span className="text-white text-[13px] font-bold tracking-tight leading-tight">
                                2M+ Happy Users
                            </span>
                            <span className="text-neutral-400 text-[12px] font-medium leading-tight">
                                Worldwide
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Section: Metric Cards & Partner Logos */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-10 pt-4 relative z-10"
            >
                {/* Two Metric Cards on the Left */}
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
                    <MetricCard
                        value="150+"
                        label="Projects delivered"
                        theme="amber"
                    />
                    <MetricCard
                        value="98%"
                        label="Client satisfaction"
                        theme="crimson"
                    />
                </div>

                {/* Partner Logos on the Right */}
                <div className="w-full lg:w-auto lg:pb-3">
                    <BrandLogos />
                </div>
            </motion.div>
        </main>
    );
}
