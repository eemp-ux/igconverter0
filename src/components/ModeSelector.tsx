import React from 'react';
import { Wind, Droplet } from 'lucide-react';
import { ConversionMode } from '../types';

interface ModeSelectorProps {
  mode: ConversionMode;
  onModeChange: (mode: ConversionMode) => void;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({ mode, onModeChange }) => {
  return (
    <div className="glass rounded-2xl p-6">
      <h2 className="text-white font-semibold mb-4">Conversion Mode</h2>
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => onModeChange('gas')}
          className={`
            rounded-xl p-4 flex flex-col items-center justify-center gap-2
            transition-all duration-200 border-2
            ${mode === 'gas' 
              ? 'bg-white/30 border-white/50 shadow-lg' 
              : 'bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30'
            }
          `}
        >
          <Wind className="w-8 h-8 text-white" />
          <span className="text-white font-medium">Gas</span>
        </button>
        
        <button
          onClick={() => onModeChange('liquid')}
          className={`
            rounded-xl p-4 flex flex-col items-center justify-center gap-2
            transition-all duration-200 border-2
            ${mode === 'liquid' 
              ? 'bg-white/30 border-white/50 shadow-lg' 
              : 'bg-white/10 border-white/20 hover:bg-white/15 hover:border-white/30'
            }
          `}
        >
          <Droplet className="w-8 h-8 text-white" />
          <span className="text-white font-medium">Liquid</span>
        </button>
      </div>
    </div>
  );
};
