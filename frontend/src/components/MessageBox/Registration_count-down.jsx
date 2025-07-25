import React, { useEffect, useState } from 'react';

const RegistrationCountdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const targetDate = new Date('2025-08-01T00:00:00');

  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center text-lg mt-10">
      
      <button
        onClick={() => setIsOpen(true)}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full shadow-xl transition-all duration-300"
      >
        पंजीयन प्रारंभ
      </button>

      
      {isOpen && (
  <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeInSlow">
    <div className="relative bg-white/10 border border-yellow-400 rounded-3xl px-8 py-10 w-full max-w-[650px] mx-4 shadow-[0_0_40px_12px_rgba(255,215,0,0.45)] animate-pop-glow flex flex-col items-center text-center gap-4">
      
      
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-3 right-4 text-yellow-300 text-3xl font-bold hover:text-white transition-all"
      >
        ×
      </button>

      
      <div className="shine-overlay absolute top-0 left-0 w-full h-full rounded-3xl pointer-events-none"></div>

      
      <img
        src="/TOORYNAAD_25_VECTO white.png"
        alt="ty25"
        className="w-[200px] mx-auto filter brightness-0 invert sepia saturate-200 hue-rotate-10"
        style={{ filter:'brightness(0) saturate(100%) invert(93%) sepia(81%) saturate(493%) hue-rotate(0deg) brightness(102%) contrast(101%) '}}
      />


      
      <h2 className="text-xl sm:text-2xl font-medium text-yellow-100 z-10">
        पंजीयन प्रारंभ तिथि : 1 अगस्त 2025
      </h2>

      
      <div className="text-3xl sm:text-4xl font-mono text-white bg-yellow-500/20 px-6 py-3 rounded-xl inline-block shadow-inner border border-yellow-200 animate-pulse-slow z-10">
        {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default RegistrationCountdown;
