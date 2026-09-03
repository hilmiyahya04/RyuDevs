import React from 'react';

type LogoProps = {
    className?: string;
    src?: string;
    alt?: string;
};

export function FluxoraLogoIcon({
    className = "w-12 h-12",
    src = "/Logos/ryu.png",
    alt = "Fluxora Logo"
}: LogoProps) {
    return (
        <img
            src={src}
            alt={alt}
            className={`object-contain ${className}`}
        />
    );
}

export function DotMatrixIcon({
    className = "w-8 h-6",
    src = "/Logos/ryu.png",
    alt = "Dot Matrix Icon"
}: LogoProps) {
    return (
        <img
            src={src}
            alt={alt}
            className={`object-contain ${className}`}
        />
    );
}

export function EcoGameLogo({ className = "h-6" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2.5 ${className}`}>
            <svg className="w-5 h-5 text-white flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2z" />
                <path d="M7 12c2.5-4 7.5-4 10 0" />
                <path d="M12 7v10" />
            </svg>
            <span className="text-white text-[17px] font-medium tracking-tight">EcoGame</span>
        </div>
    );
}

export function ZentioLogo({ className = "h-6" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <svg className="w-5 h-5 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 5a2 2 0 0 1 3.4-1.4l9.2 9.2a2 2 0 0 1-2.8 2.8L4.6 6.4A2 2 0 0 1 4 5z" />
                <path d="M20 5a2 2 0 0 0-3.4-1.4L7.4 12.8a2 2 0 0 0 2.8 2.8l9.2-9.2A2 2 0 0 0 20 5z" opacity="0.9" />
                <path d="M7.4 12.8L4.6 15.6a2 2 0 0 0 2.8 2.8l2.8-2.8-2.8-2.8z" />
                <path d="M16.6 12.8l2.8 2.8a2 2 0 0 1-2.8 2.8l-2.8-2.8 2.8-2.8z" />
            </svg>
            <span className="text-white text-[17px] font-medium tracking-tight">zentio</span>
        </div>
    );
}

export function CromeLogo({ className = "h-6" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <svg className="w-5 h-5 text-white flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="3.5" fill="currentColor" />
                <line x1="12" y1="3" x2="12" y2="8.5" />
                <line x1="12" y1="15.5" x2="12" y2="21" />
                <line x1="3" y1="12" x2="8.5" y2="12" />
                <line x1="15.5" y1="12" x2="21" y2="12" />
            </svg>
            <span className="text-white text-[17px] font-medium tracking-tight">Crome</span>
        </div>
    );
}

export function MercuryLogo({ className = "h-6" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <svg className="w-5 h-5 text-white flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10a6 6 0 0 0-12 0c0 4 6 11 6 11s6-7 6-11z" />
                <circle cx="12" cy="10" r="2.5" />
                <path d="M8 5a6 6 0 0 1 8 0" />
            </svg>
            <span className="text-white text-[17px] font-medium tracking-tight">Mercury</span>
        </div>
    );
}

export function WingsLogo({ className = "h-6" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <svg className="w-5 h-5 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                {/* 4 diamond star */}
                <polygon points="12,2 14.5,9.5 22,12 14.5,14.5 12,22 9.5,14.5 2,12 9.5,9.5" />
                <circle cx="12" cy="12" r="2" fill="#000" />
            </svg>
            <span className="text-white text-[17px] font-medium tracking-tight">Wings</span>
        </div>
    );
}