import React, { useState, useEffect } from 'react';
import { Beaker } from 'lucide-react';
import { ConversionInput } from './components/ConversionInput';
import { ResultsDisplay } from './components/ResultsDisplay';
import { QuickReference } from './components/QuickReference';
import { calculateGasConversion } from './utils/conversions';
import { GasType, UnitType, ConversionResult } from './types';
import { gasProperties } from './data/gasProperties';

function App() {
  const [gasType, setGasType] = useState<GasType>('N2');
  const [inputValue, setInputValue] = useState<number>(1);
  const [inputUnit, setInputUnit] = useState<UnitType>('nm3');
  const [inputCustomTemp, setInputCustomTemp] = useState<number>(20);
  const [resultCustomTemp, setResultCustomTemp] = useState<number>(25);
  const [result, setResult] = useState<ConversionResult | null>(null);

  useEffect(() => {
    if (inputValue > 0) {
      const conversionResult = calculateGasConversion(
        gasType,
        inputValue,
        inputUnit,
        inputCustomTemp,
        resultCustomTemp
      );
      setResult(conversionResult);
    } else {
      setResult(null);
    }
  }, [gasType, inputValue, inputUnit, inputCustomTemp, resultCustomTemp]);

  return (
    <div className="min-h-screen gradient-bg p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Beaker className="w-10 h-10 text-white" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Industrial Gas Converter
            </h1>
          </div>
          <p className="text-white/80 text-lg">
            Professional unit conversion tool for industrial gases
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h2 className="text-white font-semibold mb-4">Gas Selection</h2>
              
              <div>
                <label className="text-white/80 text-sm mb-2 block">
                  Gas Type
                </label>
                <select
                  value={gasType}
                  onChange={(e) => setGasType(e.target.value as GasType)}
                  className="glass-input rounded-xl p-3 w-full text-white cursor-pointer"
                >
                  {Object.entries(gasProperties).map(([key, gas]) => (
                    <option key={key} value={key} className="bg-purple-900">
                      {gas.name} ({key})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <ConversionInput
              value={inputValue}
              unit={inputUnit}
              customTemp={inputCustomTemp}
              onValueChange={setInputValue}
              onUnitChange={setInputUnit}
              onCustomTempChange={setInputCustomTemp}
            />
          </div>

          <ResultsDisplay
            result={result}
            resultCustomTemp={resultCustomTemp}
            onResultCustomTempChange={setResultCustomTemp}
            isLiquidMode={false}
          />
        </div>

        <QuickReference />
      </div>
    </div>
  );
}

export default App;
