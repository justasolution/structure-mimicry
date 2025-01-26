import { useState } from 'react';

const Index = () => {
  const [cnid] = useState('XYZ');

  return (
    <div className="min-h-screen relative overflow-hidden welcome-gradient">
      {/* Background Logo Overlay */}
      <div className="absolute inset-0 logo-overlay" />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center">
        {/* Header Logo */}
        <div className="w-full max-w-md mt-8 px-4">
          <img 
            src="https://companionship.co.in/wp-content/uploads/2025/01/logo_comp.png" 
            alt="Companionship Logo"
            className="w-32 mx-auto"
          />
        </div>

        {/* CNID Display with Lines */}
        <div className="absolute top-4 left-4 flex flex-col items-start">
          <label className="text-white text-xl font-bold mb-2">CNID: {cnid}</label>
          <div className="space-y-2">
            <div className="w-16 h-0.5 bg-white"></div>
            <div className="w-16 h-0.5 bg-white"></div>
            <div className="w-16 h-0.5 bg-white"></div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider font-serif">
            WELCOME
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-wider font-serif">
            ON BOARD
          </h2>
        </div>

        {/* Referred By Section - Left Aligned */}
        <div className="absolute bottom-24 left-8 text-left">
          <h3 className="text-accent-green text-4xl font-bold tracking-widest mb-4">
            REFERRED BY
          </h3>
          <div className="w-48 h-48 bg-white/20 rounded-lg border-2 border-white/30">
            {/* Profile Image Placeholder */}
            <img 
              src="/placeholder.svg"
              alt="Profile Placeholder"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Side Text */}
        <div className="absolute right-0 top-0 bottom-0 flex items-center">
          <div className="vertical-text text-accent-green text-6xl font-bold tracking-widest pr-4">
            COMPANIONSHIP
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#1A1F2C] py-3">
          <p className="text-white text-center text-sm md:text-base font-semibold">
            LETS GROW TOGETHER - TO SERVE THE NATION 🇮🇳
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;