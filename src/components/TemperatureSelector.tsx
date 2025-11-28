import React from 'react';
import { Thermometer } from 'lucide-react';

interface TemperatureSelectorProps {
  customTemp: number;
  onCustomTempChange: (temp: number) => void;
}

export const TemperatureSelector: React.FC<TemperatureSelectorProps> = ({
  customTemp,
  onCustomTempChange,
}) => {
  return (
    <div className="glass rounded-2xl p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Thermometer className="w-5 h-5 text-white" />
        <h2 className="text-white font-semibold">Custom Temperature</h2>
      </div>
      <div>
        <label className="text-white/80 text-sm mb-2 block">
          Temperature for Custom Sm³ Calculations (°C)
        </label>
        <input
          type="number"
          value={customTemp}
          onChange={(e) => onCustomTempChange(parseFloat(e.target.value) || 0)}
          className="glass-input rounded-xl p-3 w-full text-white placeholder-white/50"
          placeholder="Enter temperature in °C"
        />
        <p className="text-white/60 text-xs mt-2">
          This temperature is used when selecting "Sm³ @ Custom" in input or result units
        </p>
      </div>
    </div>
  );
};
