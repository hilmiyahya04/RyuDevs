import React, { useRef, useEffect } from 'react';

interface BackgroundVideoProps {
    src: string;
}

export function BackgroundVideo({ src }: BackgroundVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => {
                // Autoplay may need user gesture in some browsers if audio was on, but it's muted
            });
        }
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src={src}
            />
            {/* Light subtle vignette overlay to ensure pristine typography legibility while keeping the video bright and clear */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>
    );
}
