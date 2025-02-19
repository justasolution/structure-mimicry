import { useState } from 'react';

const Index = () => {
  const [cnid] = useState('XYZ');

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="a4-container welcome-gradient">
        {/* Background Logo Overlay */}
        <div className="absolute inset-0 logo-overlay opacity-10" />
        
        {/* Main Content */}
        <div className="relative z-10 min-h-[297mm] flex flex-col">
          {/* Location Text */}
          <div className="absolute top-8 left-8">
            <h3 className="text-white text-2xl font-bold">VIJAYAWADA</h3>
          </div>

          {/* Header Logo */}
          <div className="w-full max-w-md mt-8 px-4">
            <img 
              src="https://companionship.co.in/wp-content/uploads/2025/01/logo_comp.png" 
              alt="Companionship Logo"
              className="w-32 mx-auto"
            />
          </div>

          {/* CNID Display with Lines */}
          <div className="absolute top-4 right-8">
            <div className="flex flex-col items-end">
              <span className="text-white text-xl font-bold mb-2">CNID: {cnid}</span>
              <div className="space-y-2">
                <div className="w-16 h-0.5 bg-white"></div>
                <div className="w-24 h-0.5 bg-white"></div>
                <div className="w-32 h-0.5 bg-white"></div>
              </div>
            </div>
          </div>

          {/* Welcome Text */}
          <div className="mt-8 text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider font-serif">
              WELCOME
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-wider font-serif">
              ON BOARD
            </h2>
          </div>

          {/* Main Profile Section */}
          <div className="flex-grow flex items-center justify-center">
            <div className="w-48 h-48 bg-transparent border-2 border-white rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg"
                alt="Main Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Referred By Section - Left Aligned */}
          <div className="absolute bottom-32 left-8">
            <h3 className="text-accent-green text-4xl font-bold tracking-widest mb-4">
              REFERRED BY
            </h3>
            <div className="flex items-start gap-4">
              <div className="w-24 h-24 bg-white/20 rounded-full border-2 border-white/30 overflow-hidden">
                <img 
                  src="/placeholder.svg"
                  alt="Referrer Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white">
                <h4 className="text-xl font-bold">Imtiaz mohammad</h4>
                <p>AP FURNITURE</p>
                <p>PH: 98853 83786</p>
              </div>
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
              LETS GROW TOGETHER - TO SERVE THE NATION 🇮🇳 🇮🇳
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;