import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import { Hero } from './Hero';
import { Portfolio } from './Portfolio';
import { Team } from './Team';
import { BackgroundVideo } from './BackgroundVideo';
import Marquee from './Marquee';
import { SmokeEffect } from './SmokeEffect';
import { Footer } from './Footer';
import Review from './Review';
import ReviewForm from './ReviewForm';

// Buka SALAH SATU baris di bawah ini sesuai isi file Contact.tsx Anda:
import Contact from './Contact'; // Gunakan ini JIKA Contact.tsx pakai 'export default'
// import { Contact } from './Contact'; // Gunakan ini JIKA Contact.tsx pakai 'export const Contact'

const VIDEO_URL = "https://res.cloudinary.com/borp1tfy/video/upload/v1787741611/kling_20260826_Image_to_Video__2142_0.mp4";

function App() {
    useEffect(() => {
        const smoke = new SmokeEffect();
        return () => {
            smoke.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen text-white flex flex-col justify-between selection:bg-orange-500/30 selection:text-orange-200 overflow-x-hidden font-sans relative">
            <BackgroundVideo src={VIDEO_URL} />
            <div className="relative z-10 flex flex-col justify-between min-h-screen">
                <Navbar />
                <Hero />
            </div>
            <Portfolio />
            <Marquee />
            <Team />
            <Contact />
            <Review />
            <ReviewForm />
            <Footer />
        </div>
    );
}

const container = document.getElementById('app');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}