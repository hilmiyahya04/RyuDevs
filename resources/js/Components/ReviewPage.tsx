import React from 'react';
import ReactDOM from 'react-dom/client';
import { BackgroundVideo } from './BackgroundVideo';
import ReviewForm from './ReviewForm';

const VIDEO_URL = "https://res.cloudinary.com/borp1tfy/video/upload/v1787741611/kling_20260826_Image_to_Video__2142_0.mp4";

function ReviewPage() {
    return (
        <div className="min-h-screen text-white flex flex-col justify-center selection:bg-orange-500/30 selection:text-orange-200 overflow-x-hidden font-sans relative">
            <BackgroundVideo src={VIDEO_URL} />
            <div className="relative z-10">
                <ReviewForm />
            </div>
        </div>
    );
}

const container = document.getElementById('review-app');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <ReviewPage />
        </React.StrictMode>
    );
}