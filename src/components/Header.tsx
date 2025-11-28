import React from 'react';
import { Gauge } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="glass rounded-2xl p-6 mb-8">
      <div className="flex items-center gap-4">
        <div className="p-3 glass-card rounded-xl">
          <Gauge className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">Industrial Gas & Liquid Converter</h1>
          <p className="text-white/80 mt-1">Professional unit conversion tool for sales engineers</p>
        </div>
      </div>
    </header>
  );
};
