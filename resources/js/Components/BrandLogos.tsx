import React from 'react';
import { EcoGameLogo, ZentioLogo, CromeLogo, MercuryLogo, WingsLogo } from './Icons';

export function BrandLogos() {
    const brands = [
        { component: EcoGameLogo, name: 'EcoGame' },
        { component: ZentioLogo, name: 'zentio' },
        { component: CromeLogo, name: 'Crome' },
        { component: MercuryLogo, name: 'Mercury' },
        { component: WingsLogo, name: 'Wings' },
    ];

    return (
        <div className="flex flex-wrap items-center justify-start lg:justify-end gap-7 md:gap-9 lg:gap-11 opacity-90 hover:opacity-100 transition-opacity">
            {brands.map(({ component: Component, name }) => (
                <div
                    key={name}
                    className="transition-transform hover:scale-105 duration-200 cursor-pointer select-none"
                >
                    <Component />
                </div>
            ))}
        </div>
    );
}
