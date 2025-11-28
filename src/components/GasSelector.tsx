import React from 'react';
import { GasType, LiquidType } from '../types';
import { gasProperties, liquidProperties } from '../data/gasProperties';
import { ChevronDown } from 'lucide-react';

interface GasSelectorProps {
  mode: 'gas' | 'liquid';
  selectedGas: GasType | null;
  selectedLiquid: LiquidType | null;
  onGasSelect: (gas: GasType) => void;
  onLiquidSelect: (liquid: LiquidType) => void;
}

export const GasSelector: React.FC<GasSelectorProps> = ({
  mode,
  selectedGas,
  selectedLiquid,
  onGasSelect,
  onLiquidSelect,
}) => {
  const getDisplayText = () => {
    if (mode === 'gas' && selectedGas) {
      return `${selectedGas} - ${gasProperties[selectedGas].name}`;
    }
    if (mode === 'liquid' && selectedLiquid) {
      return `${selectedLiquid} - ${liquidProperties[selectedLiquid].name}`;
    }
    return mode === 'gas' ? 'Select a gas' : 'Select a liquid';
  };

  return (
    <div className="glass rounded-2xl p-6 mb-6">
      <h2 className="text-white font-semibold mb-4">
        {mode === 'gas' ? 'Select Gas' : 'Select Liquid'}
      </h2>
      <div className="relative">
        <select
          value={mode === 'gas' ? selectedGas || '' : selectedLiquid || ''}
          onChange={(e) => {
            if (mode === 'gas') {
              onGasSelect(e.target.value as GasType);
            } else {
              onLiquidSelect(e.target.value as LiquidType);
            }
          }}
          className="glass-input rounded-xl p-4 w-full text-white cursor-pointer appearance-none pr-12 text-lg font-medium"
        >
          <option value="" disabled className="bg-purple-900">
            {mode === 'gas' ? 'Select a gas' : 'Select a liquid'}
          </option>
          {mode === 'gas'
            ? Object.entries(gasProperties).map(([key, gas]) => (
                <option key={key} value={key} className="bg-purple-900">
                  {key} - {gas.name}
                </option>
              ))
            : Object.entries(liquidProperties).map(([key, liquid]) => (
                <option key={key} value={key} className="bg-purple-900">
                  {key} - {liquid.name}
                </option>
              ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
      </div>
    </div>
  );
};
