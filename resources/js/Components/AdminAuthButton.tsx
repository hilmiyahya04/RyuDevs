"use client";

import React, { useState, useEffect } from "react";

export default function AdminAuthButton() {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);

    const checkAuth = () => {
        const token = localStorage.getItem("adminToken");
        setIsAdminLoggedIn(!!token);
    };

    useEffect(() => {
        // Cek saat komponen dimuat
        checkAuth();

        // Cek ulang saat jendela browser kembali aktif/fokus
        window.addEventListener("focus", checkAuth);
        return () => window.removeEventListener("focus", checkAuth);
    }, []);

    const handleLoginClick = () => {
        // Set token simulasi jika belum ada (sesuaikan dengan alur autentikasi Anda)
        localStorage.setItem("adminToken", "true");
        setIsAdminLoggedIn(true);
    };

    const handleLogoutClick = () => {
        localStorage.removeItem("adminToken");
        setIsAdminLoggedIn(false);
    };

    return (
        <div className="hidden md:flex items-center">
            {isAdminLoggedIn ? (
                <a
                    href="/admin"
                    onClick={handleLogoutClick}
                    className="bg-black text-white font-semibold text-[14px] px-5 py-2.5 rounded-full hover:bg-neutral-800 active:scale-95 transition-all shadow-md cursor-pointer inline-block text-center"
                >
                    Dashboard Admin
                </a>
            ) : (
                <a
                    href="/admin/login"
                    onClick={handleLoginClick}
                    className="bg-white text-black font-semibold text-[14px] px-5 py-2.5 rounded-full hover:bg-neutral-200 active:scale-95 transition-all shadow-md cursor-pointer inline-block text-center"
                >
                    Login
                </a>
            )}
        </div>
    );
}