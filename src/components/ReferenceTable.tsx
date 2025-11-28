import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { gasProperties, liquidProperties } from '../data/gasProperties';

export const ReferenceTable: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass rounded-2xl p-6 mt-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full mb-4"
      >
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-white" />
          <h2 className="text-white font-semibold">Quick Reference</h2>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-white" />
        ) : (
          <ChevronDown className="w-5 h-5 text-white" />
        )}
      </button>
      
      {isExpanded && (
        <div className="space-y-6">
          <div>
            <h3 className="text-white font-medium mb-3">Gas Properties</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-white/90 text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-2 px-3">Gas</th>
                    <th className="text-left py-2 px-3">Name</th>
                    <th className="text-right py-2 px-3">Molecular Weight</th>
                    <th className="text-right py-2 px-3">Density (kg/Nm³)</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(gasProperties).map(([key, gas]) => (
                    <tr key={key} className="border-b border-white/10">
                      <td className="py-2 px-3 font-semibold">{key}</td>
                      <td className="py-2 px-3">{gas.name}</td>
                      <td className="py-2 px-3 text-right">{gas.molecularWeight}</td>
                      <td className="py-2 px-3 text-right">{gas.density}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-3">Liquid Properties</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-white/90 text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-2 px-3">Liquid</th>
                    <th className="text-left py-2 px-3">Name</th>
                    <th className="text-right py-2 px-3">Density (kg/L)</th>
                    <th className="text-left py-2 px-3">Gas Equivalent</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(liquidProperties).map(([key, liquid]) => (
                    <tr key={key} className="border-b border-white/10">
                      <td className="py-2 px-3 font-semibold">{key}</td>
                      <td className="py-2 px-3">{liquid.name}</td>
                      <td className="py-2 px-3 text-right">{liquid.density}</td>
                      <td className="py-2 px-3">{liquid.gasEquivalent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="glass-card rounded-xl p-4">
            <h3 className="text-white font-medium mb-2">Notes</h3>
            <ul className="text-white/80 text-sm space-y-1 list-disc list-inside">
              <li>All gas densities are at standard conditions (0°C, 101.325 kPa)</li>
              <li>Liquid densities are at boiling point</li>
              <li>Temperature correction uses ideal gas law approximation</li>
              <li>Nm³ = Normal cubic meter (0°C, 1 atm)</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
