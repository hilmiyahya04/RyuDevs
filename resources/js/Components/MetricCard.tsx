import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { DotMatrixIcon } from './Icons';

interface MetricCardProps {
    value: string;
    label: string;
    theme: 'amber' | 'crimson';
}

export function MetricCard({ value, label, theme }: MetricCardProps) {
    const isAmber = theme === 'amber';

    return (
        <div
            className={`
        w-full sm:w-[220px] lg:w-[230px] h-[175px] rounded-[26px] p-6 
        relative overflow-hidden flex flex-col justify-between 
        transition-transform hover:-translate-y-1 duration-300 group
        ${isAmber
                    ? 'bg-gradient-to-br from-[#512306] via-[#2f1404] to-[#140802] border border-[#7a3e10]/40 shadow-[inset_0_1px_1px_rgba(255,180,100,0.15)]'
                    : 'bg-gradient-to-br from-[#550c0f] via-[#320709] to-[#160204] border border-[#831c21]/40 shadow-[inset_0_1px_1px_rgba(255,100,120,0.15)]'
                }
      `}
        >
            {/* Subtle ambient light glow inside card */}
            <div
                className={`absolute -top-12 -left-12 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-40 ${isAmber ? 'bg-orange-500' : 'bg-red-500'
                    }`}
            />

            {/* Top row: Value + Arrow */}
            <div className="flex items-start justify-between relative z-10">
                <span className="text-4xl lg:text-[44px] font-normal tracking-tight text-white leading-none">
                    {value}
                </span>
                <div className="text-white/80 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200">
                    <ArrowUpRight size={20} strokeWidth={2.2} />
                </div>
            </div>

            {/* Dot Matrix Decoration */}
            <div className="absolute right-6 bottom-10 z-10">
                <DotMatrixIcon
                    className={`w-4 h-3.5 ${isAmber ? 'text-amber-500/40' : 'text-rose-500/40'}`}
                />
            </div>

            {/* Bottom Label */}
            <div className="relative z-10">
                <p className="text-neutral-200 text-[14px] font-medium tracking-normal">
                    {label}
                </p>
            </div>
        </div>
    );
}
