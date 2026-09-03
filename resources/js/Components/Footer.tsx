import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="relative z-10 border-t border-white/10 bg-black/60 backdrop-blur-md text-gray-400 py-12 px-4 mt-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                {/* Brand / Logo Section */}
                <div className="space-y-4 md:col-span-1">
                    <h3 className="text-2xl font-bold text-white">
                        My<span className="text-orange-500">Brand</span>
                    </h3>
                    <p className="text-sm text-gray-400">
                        Memberikan solusi kreatif dan inovatif untuk kebutuhan digital bisnis Anda.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-4 text-lg">Navigasi</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#hero" className="hover:text-orange-500 transition-colors">Beranda</a></li>
                        <li><a href="#portfolio" className="hover:text-orange-500 transition-colors">Portofolio</a></li>
                        <li><a href="#team" className="hover:text-orange-500 transition-colors">Tim Kami</a></li>
                        <li><a href="#contact" className="hover:text-orange-500 transition-colors">Kontak</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-semibold mb-4 text-lg">Layanan</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Web Development</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">UI/UX Design</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Branding Strategy</a></li>
                        <li><a href="#" className="hover:text-orange-500 transition-colors">Video Production</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h4 className="text-white font-semibold mb-4 text-lg">Ikuti Kami</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-orange-500 hover:text-white transition-all">
                            Instagram
                        </a>
                        <a href="#" className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-orange-500 hover:text-white transition-all">
                            LinkedIn
                        </a>
                        <a href="#" className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-orange-500 hover:text-white transition-all">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 text-center text-xs text-gray-500">
                <p>&copy; {new Date().getFullYear()} MyBrand. Hak Cipta Dilindungi Undang-Undang.</p>
            </div>
        </footer>
    );
};

export default Footer;