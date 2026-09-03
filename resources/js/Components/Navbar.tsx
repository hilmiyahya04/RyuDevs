// resources/js/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { FluxoraLogoIcon } from './Icons';
import { motion, AnimatePresence } from 'motion/react';
import AdminAuthButton from "./AdminAuthButton";

export default function Navbar() {
    const [featuresOpen, setFeaturesOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // State untuk kontrol visibilitas navbar berdasarkan scroll
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Jika posisi di paling atas halaman (hero), selalu tampilkan navbar
            if (currentScrollY <= 10) {
                setIsVisible(true);
            }
            // Jika scroll KE BAWAH -> Tampilkan Navbar
            else if (currentScrollY > lastScrollY) {
                setIsVisible(true);
            }
            // Jika scroll KE ATAS -> Sembunyikan Navbar
            else {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { name: 'Portfolio', hasDropdown: false },
        { name: 'Team', hasDropdown: false },
        { name: 'Contact', hasDropdown: false },
        { name: 'Review', hasDropdown: false },
    ];

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : -120 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 sm:px-8 py-4 flex items-center justify-between z-50"
        >
            <a href="#hero" className="flex items-center gap-3 group">
                <FluxoraLogoIcon className="w-12 h-12 transition-transform group-hover:scale-105 duration-200" />
                <span className="text-white text-2xl font-bold tracking-tight">RyuDevs</span>
            </a>

            {/* Center Nav Capsule - Desktop */}
            <nav className="hidden md:flex items-center bg-[#111114]/90 backdrop-blur-md border border-white/[0.12] rounded-full px-2 py-1.5 shadow-2xl relative">
                {navLinks.map((link) => (
                    <div key={link.name} className="relative">
                        {link.hasDropdown ? (
                            <div
                                className="relative"
                                onMouseEnter={() => setFeaturesOpen(true)}
                                onMouseLeave={() => setFeaturesOpen(false)}
                            >
                                <button
                                    onClick={() => setFeaturesOpen(!featuresOpen)}
                                    className="flex items-center gap-1.5 px-4 py-1.5 text-[14px] text-neutral-300 hover:text-white rounded-full hover:bg-white/[0.08] transition-all font-medium cursor-pointer"
                                >
                                    <span>{link.name}</span>
                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform duration-200 text-neutral-400 ${featuresOpen ? 'rotate-180 text-white' : ''}`}
                                    />
                                </button>

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {featuresOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 mt-2 w-52 bg-[#141417]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl z-50 overflow-hidden"
                                        >
                                            <div className="text-[11px] font-semibold text-neutral-500 px-3 py-1 uppercase tracking-wider">Solutions</div>
                                            <a href="#core-engine" className="block px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.08] rounded-xl transition-colors">
                                                Core AI Engine
                                            </a>
                                            <a href="#adaptive-ui" className="block px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.08] rounded-xl transition-colors">
                                                Adaptive UI System
                                            </a>
                                            <a href="#analytics" className="block px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.08] rounded-xl transition-colors">
                                                Real-time Analytics
                                            </a>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <a
                                href={`#${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                                className="px-4 py-1.5 text-[14px] text-neutral-300 hover:text-white rounded-full hover:bg-white/[0.08] transition-all font-medium block"
                            >
                                {link.name}
                            </a>
                        )}
                    </div>
                ))}
            </nav>

            {/* Bagian Tombol Admin (Memanggil Komponen Terpisah) */}
            <AdminAuthButton />

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-3">
                <button className="bg-white text-black font-semibold text-[13px] px-4 py-2 rounded-full hover:bg-neutral-200">
                    Get Started
                </button>
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-2 text-neutral-300 hover:text-white bg-white/5 border border-white/10 rounded-full"
                >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-6 right-6 mt-3 bg-[#121215] border border-white/10 rounded-2xl p-5 shadow-2xl md:hidden overflow-hidden z-50 flex flex-col gap-3"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={`#${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-neutral-300 hover:text-white py-2 text-base font-medium border-b border-white/5"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}