export type GasType = 'N2' | 'O2' | 'Argon' | 'CO2' | 'H2' | 'He' | 'Xe' | 'Kr';
export type LiquidType = 'LIN' | 'LOX' | 'LAR' | 'LCO2' | 'LH2' | 'LHe' | 'LXe' | 'LKr';
export type UnitType = 
  | 'nm3' 
  | 'sm3-15' 
  | 'sm3-21' 
  | 'sm3-27' 
  | 'sm3-custom' 
  | 'kg' 
  | 'liters-gas' 
  | 'liters-liquid';

export interface GasProperties {
  name: string;
  molecularWeight: number;
  density: number;
}

export interface LiquidProperties {
  name: string;
  density: number;
  gasEquivalent: GasType;
  referenceNote?: string;
}

export interface ConversionResult {
  nm3: number;
  sm3_15: number;
  sm3_21: number;
  sm3_27: number;
  sm3_custom_input: number;
  sm3_custom_result: number;
  kg: number;
  liters_gas: number;
  liters_liquid: number;
  inputCustomTemp: number;
  resultCustomTemp: number;
}
