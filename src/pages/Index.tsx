import { useState } from 'react';
import { Input } from "@/components/ui/input";

const Index = () => {
  const [cnid, setCnid] = useState('');

  return (
    <div className="min-h-screen relative overflow-hidden welcome-gradient">
      {/* Background Logo Overlay */}
      <div className="absolute inset-0 logo-overlay" />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center">
        {/* Header Logo */}
        <div className="w-full max-w-md mt-8 px-4">
          <img 
            src="/lovable-uploads/346a3394-69d9-4eea-b93c-0d18d5dc04d5.png" 
            alt="Companionship Logo"
            className="w-32 mx-auto"
          />
        </div>

        {/* CNID Input */}
        <div className="absolute top-4 left-4">
          <label className="text-white text-xl font-bold">CNID:</label>
          <Input
            type="text"
            value={cnid}
            onChange={(e) => setCnid(e.target.value)}
            className="bg-white/20 border-white/30 text-white placeholder-white/50 w-48"
            placeholder="Enter CNID"
          />
        </div>

        {/* Welcome Text */}
        <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
            WELCOME
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-wider">
            ON BOARD
          </h2>
        </div>

        {/* Referred By Section */}
        <div className="mb-24 text-center">
          <h3 className="text-accent-green text-4xl font-bold tracking-widest mb-4">
            REFERRED BY
          </h3>
          <div className="w-48 h-48 bg-white/20 rounded-lg border-2 border-white/30" />
        </div>

        {/* Side Text */}
        <div className="absolute right-0 top-0 bottom-0 flex items-center">
          <div className="vertical-text text-accent-green text-6xl font-bold tracking-widest pr-4">
            COMPANIONSHIP
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 py-2">
          <p className="text-white text-center text-sm md:text-base font-semibold">
            LETS GROW TOGETHER - TO SERVE THE NATION
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;