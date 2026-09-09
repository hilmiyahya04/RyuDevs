import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BackgroundVideo } from './BackgroundVideo';
import { SmokeEffect } from './SmokeEffect';
import ReviewForm from './ReviewForm';

const VIDEO_URL = "/resource/bg_video.mp4";

function Revieww() {

    useEffect(() => {
        const smoke = new SmokeEffect();
        return () => {
            smoke.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen text-white flex flex-col justify-center selection:bg-orange-500/30 selection:text-orange-200 overflow-x-hidden font-sans relative">
            <BackgroundVideo src={VIDEO_URL} />
            <div className="relative z-20">
                <ReviewForm />
            </div>
        </div>
    );
}

const container = document.getElementById('revieww-app') || document.getElementById('review-app');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <Revieww />
        </React.StrictMode>
    );
}