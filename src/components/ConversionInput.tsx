import React from 'react';
import { ArrowRightLeft, ChevronDown } from 'lucide-react';
import { UnitType } from '../types';
import { inputUnitOptions } from '../data/unitOptions';

interface ConversionInputProps {
  value: number;
  unit: UnitType;
  customTemp: number;
  onValueChange: (value: number) => void;
  onUnitChange: (unit: UnitType) => void;
  onCustomTempChange: (temp: number) => void;
}

export const ConversionInput: React.FC<ConversionInputProps> = ({
  value,
  unit,
  customTemp,
  onValueChange,
  onUnitChange,
  onCustomTempChange,
}) => {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <ArrowRightLeft className="w-5 h-5 text-white" />
        <h2 className="text-white font-semibold">Input Value</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="text-white/80 text-sm mb-2 block">Value</label>
          <input
            type="number"
            value={value || ''}
            onChange={(e) => onValueChange(parseFloat(e.target.value) || 0)}
            className="glass-input rounded-xl p-3 w-full text-white placeholder-white/50"
            placeholder="Enter value"
            step="any"
          />
        </div>
        <div>
          <label className="text-white/80 text-sm mb-2 block">Unit</label>
          <div className="relative">
            <select
              value={unit}
              onChange={(e) => onUnitChange(e.target.value as UnitType)}
              className="glass-input rounded-xl p-3 w-full text-white cursor-pointer appearance-none pr-10"
            >
              {inputUnitOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-purple-900">
                  {option.label} - {option.description}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
          </div>
        </div>
      </div>
      
      {unit === 'sm3-custom' && (
        <div className="mt-4">
          <label className="text-white/80 text-sm mb-2 block">Input Custom Temperature (°C)</label>
          <input
            type="number"
            value={customTemp}
            onChange={(e) => onCustomTempChange(parseFloat(e.target.value) || 0)}
            className="glass-input rounded-xl p-3 w-full text-white placeholder-white/50"
            placeholder="Enter temperature in °C"
          />
          <p className="text-white/60 text-xs mt-2">
            Temperature for the input Sm³@Custom value
          </p>
        </div>
      )}
    </div>
  );
};
