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
}