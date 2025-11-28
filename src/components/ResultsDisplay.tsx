import React from 'react';
import { Calculator } from 'lucide-react';
import { ConversionResult } from '../types';

interface ResultsDisplayProps {
  result: ConversionResult | null;
  resultCustomTemp: number;
  onResultCustomTempChange: (temp: number) => void;
  isLiquidMode: boolean;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  result,
  resultCustomTemp,
  onResultCustomTempChange,
}) => {
  const formatNumber = (num: number): string => {
    return num.toFixed(4);
  };

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="w-5 h-5 text-white" />
        <h2 className="text-white font-semibold">Conversion Results</h2>
      </div>

      {result ? (
        <div className="space-y-3">
          <div className="glass-card rounded-xl p-4">
            <div className="text-white/60 text-sm mb-1">Normal Cubic Meters</div>
            <div className="text-white text-2xl font-bold">{formatNumber(result.nm3)} Nm³</div>
            <div className="text-white/40 text-xs mt-1">at 0°C, 1 atm</div>
          </div>

          <div className="glass-card rounded-xl p-4">
            <div className="text-white/60 text-sm mb-1">Standard Cubic Meters @ 15°C</div>
            <div className="text-white text-xl font-semibold">{formatNumber(result.sm3_15)} Sm³</div>
          </div>

          <div className="glass-card rounded-xl p-4">
            <div className="text-white/60 text-sm mb-1">Standard Cubic Meters @ 21°C</div>
            <div className="text-white text-xl font-semibold">{formatNumber(result.sm3_21)} Sm³</div>
          </div>

          <div className="glass-card rounded-xl p-4">
            <div className="text-white/60 text-sm mb-1">Standard Cubic Meters @ 27°C</div>
            <div className="text-white text-xl font-semibold">{formatNumber(result.sm3_27)} Sm³</div>
          </div>

          <div className="glass-card rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-white/60 text-sm">Standard Cubic Meters @ Custom</div>
              <input
                type="number"
                value={resultCustomTemp}
                onChange={(e) => onResultCustomTempChange(Number(e.target.value))}
                className="glass-input rounded-lg px-3 py-1 w-20 text-white text-sm"
                placeholder="°C"
              />
            </div>
            <div className="text-white text-xl font-semibold">
              {formatNumber(result.sm3_custom_result)} Sm³
            </div>
            <div className="text-white/40 text-xs mt-1">at {resultCustomTemp}°C</div>
          </div>

          <div className="glass-card rounded-xl p-4">
            <div className="text-white/60 text-sm mb-1">Mass</div>
            <div className="text-white text-xl font-semibold">{formatNumber(result.kg)} kg</div>
          </div>

          <div className="glass-card rounded-xl p-4">
            <div className="text-white/60 text-sm mb-1">Volume (Gas)</div>
            <div className="text-white text-xl font-semibold">{formatNumber(result.liters_gas)} L</div>
            <div className="text-white/40 text-xs mt-1">Gas molar volume</div>
          </div>

          <div className="glass-card rounded-xl p-4">
            <div className="text-white/60 text-sm mb-1">Volume (Liquid)</div>
            <div className="text-white text-xl font-semibold">{formatNumber(result.liters_liquid)} L</div>
            <div className="text-white/40 text-xs mt-1">Liquid volume</div>
          </div>
        </div>
      ) : (
        <div className="text-white/60 text-center py-8">
          Enter a value to see conversion results
        </div>
      )}
    </div>
  );
}
