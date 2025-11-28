import { GasType, UnitType, ConversionResult } from '../types';
import { gasProperties, liquidProperties } from '../data/gasProperties';

const MOLAR_VOLUME_STP = 22.414; // L/mol at 0°C, 1 atm
const STANDARD_TEMP_K = 273.15; // 0°C in Kelvin

// Helper function to find liquid equivalent for a gas
const findLiquidEquivalent = (gasType: GasType) => {
  const liquidEntry = Object.entries(liquidProperties).find(
    ([_, liquid]) => liquid.gasEquivalent === gasType
  );
  return liquidEntry ? liquidEntry[1] : null;
};

// Convert temperature from Celsius to Kelvin
const celsiusToKelvin = (celsius: number): number => celsius + 273.15;

// Calculate volume at different temperature using ideal gas law (V1/T1 = V2/T2)
const convertVolume = (volume: number, fromTempC: number, toTempC: number): number => {
  const fromTempK = celsiusToKelvin(fromTempC);
  const toTempK = celsiusToKelvin(toTempC);
  return (volume * toTempK) / fromTempK;
};

export const calculateGasConversion = (
  gasType: GasType,
  value: number,
  unit: UnitType,
  inputCustomTemp: number,
  resultCustomTemp: number
): ConversionResult => {
  const gas = gasProperties[gasType];
  const liquid = findLiquidEquivalent(gasType);
  
  // Step 1: Convert input to Nm³ (normal cubic meters at 0°C, 1 atm)
  let nm3: number;

  switch (unit) {
    case 'nm3':
      nm3 = value;
      break;

    case 'sm3-15':
      nm3 = convertVolume(value, 15, 0);
      break;

    case 'sm3-21':
      nm3 = convertVolume(value, 21, 0);
      break;

    case 'sm3-27':
      nm3 = convertVolume(value, 27, 0);
      break;

    case 'sm3-custom':
      nm3 = convertVolume(value, inputCustomTemp, 0);
      break;

    case 'kg':
      // MOLAR PATHWAY: kg → g → moles → L(gas) → Nm³
      const grams = value * 1000;
      const moles = grams / gas.molecularWeight;
      const litersGas = moles * MOLAR_VOLUME_STP;
      nm3 = litersGas / 1000;
      break;

    case 'liters-gas':
      // Gas liters to Nm³ (1 Nm³ = 1000 L gas)
      nm3 = value / 1000;
      break;

    case 'liters-liquid':
      if (!liquid) {
        nm3 = 0;
        break;
      }
      // MOLAR PATHWAY: L(liquid) → kg → g → moles → L(gas) → Nm³
      const kgFromLiquid = value * liquid.density;
      const gramsFromLiquid = kgFromLiquid * 1000;
      const molesFromLiquid = gramsFromLiquid / gas.molecularWeight;
      const litersGasFromLiquid = molesFromLiquid * MOLAR_VOLUME_STP;
      nm3 = litersGasFromLiquid / 1000;
      break;

    default:
      nm3 = 0;
  }

  // Step 2: Convert Nm³ to all other units
  const sm3_15 = convertVolume(nm3, 0, 15);
  const sm3_21 = convertVolume(nm3, 0, 21);
  const sm3_27 = convertVolume(nm3, 0, 27);
  const sm3_custom_input = convertVolume(nm3, 0, inputCustomTemp);
  const sm3_custom_result = convertVolume(nm3, 0, resultCustomTemp);

  // MOLAR PATHWAY: Nm³ → L(gas) → moles → g → kg
  const liters_gas = nm3 * 1000;
  const moles = liters_gas / MOLAR_VOLUME_STP;
  const grams_result = moles * gas.molecularWeight;
  const kg = grams_result / 1000;

  // Liquid liters: moles → mass(g) → L(liquid) using (moles × MW) ÷ liquid density
  const liters_liquid = liquid
    ? (moles * gas.molecularWeight) / liquid.density
    : 0;

  return {
    nm3,
    sm3_15,
    sm3_21,
    sm3_27,
    sm3_custom_input,
    sm3_custom_result,
    kg,
    liters_gas,
    liters_liquid,
    inputCustomTemp,
    resultCustomTemp,
  };
};
