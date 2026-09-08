// resources/js/Navbar.tsx
import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { FluxoraLogoIcon } from "./Icons";
import { motion, AnimatePresence } from "motion/react";
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

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { name: "Portfolio", hasDropdown: false },
        { name: "Team", hasDropdown: false },
        { name: "Contact", hasDropdown: false },
        { name: "Review", hasDropdown: false },
    ];

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : -120 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6 sm:px-8 py-4 flex items-center gap-80 z-[999999]"
        >
            <a href="#hero" className="flex items-center gap-3 group">
                <FluxoraLogoIcon className="w-12 h-12 transition-transform group-hover:scale-105 duration-200" />
                <h3 className="text-2xl font-bold text-white">
                    Ryu<span className="text-orange-500">Devs</span>
                </h3>
            </a>

            {/* Center Nav Capsule - Desktop */}
            <nav className="hidden md:flex items-center liquid-glass-pill rounded-full px-3 py-1.5 relative">
                {navLinks.map((link) => (
                    <div key={link.name} className="relative">
                        {link.hasDropdown ? (
                            <div
                                className="relative"
                                onMouseEnter={() => setFeaturesOpen(true)}
                                onMouseLeave={() => setFeaturesOpen(false)}
                            >
                                <button
                                    onClick={() =>
                                        setFeaturesOpen(!featuresOpen)
                                    }
                                    className="flex items-center gap-1.5 px-4 py-1.5 text-[14px] text-neutral-300 hover:text-white rounded-full hover:bg-white/[0.12] transition-all font-medium cursor-pointer"
                                >
                                    <span>{link.name}</span>
                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform duration-200 text-neutral-400 ${featuresOpen ? "rotate-180 text-white" : ""}`}
                                    />
                                </button>

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {featuresOpen && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: 8,
                                                scale: 0.96,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: 8,
                                                scale: 0.96,
                                            }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 mt-2 w-52 liquid-glass-dropdown rounded-2xl p-2 z-50 overflow-hidden"
                                        >
                                            <div className="text-[11px] font-semibold text-neutral-400 px-3 py-1 uppercase tracking-wider">
                                                Solutions
                                            </div>
                                            <a
                                                href="#core-engine"
                                                className="block px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.1] rounded-xl transition-colors"
                                            >
                                                Core AI Engine
                                            </a>
                                            <a
                                                href="#adaptive-ui"
                                                className="block px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.1] rounded-xl transition-colors"
                                            >
                                                Adaptive UI System
                                            </a>
                                            <a
                                                href="#analytics"
                                                className="block px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/[0.1] rounded-xl transition-colors"
                                            >
                                                Real-time Analytics
                                            </a>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <a
                                href={`#${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                                className="px-4 py-1.5 text-[14px] text-neutral-300 hover:text-white rounded-full hover:bg-white/[0.12] transition-all font-medium block"
                            >
                                {link.name}
                            </a>
                        )}
                    </div>
                ))}
            </nav>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-3">
                <button className="bg-white text-black font-semibold text-[13px] px-4 py-2 rounded-full hover:bg-neutral-200 shadow-md">
                    Get Started
                </button>
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-2 text-neutral-300 hover:text-white liquid-glass-pill rounded-full"
                >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-6 right-6 mt-3 liquid-glass-dropdown rounded-2xl p-5 md:hidden overflow-hidden z-50 flex flex-col gap-3"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={`#${link.name.toLowerCase().replace(/\s+/g, "-")}`}
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
