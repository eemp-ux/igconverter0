import { UnitOption } from '../types';

export const inputUnitOptions: UnitOption[] = [
  {
    value: 'nm3',
    label: 'Nm³',
    description: 'Normal cubic meters (0°C, 1 atm)',
  },
  {
    value: 'sm3-15',
    label: 'Sm³ @ 15°C',
    description: 'Standard cubic meters at 15°C',
  },
  {
    value: 'sm3-21',
    label: 'Sm³ @ 21°C',
    description: 'Standard cubic meters at 21°C',
  },
  {
    value: 'sm3-27',
    label: 'Sm³ @ 27°C',
    description: 'Standard cubic meters at 27°C',
  },
  {
    value: 'sm3-custom',
    label: 'Sm³ @ Custom',
    description: 'Standard cubic meters at custom temperature',
  },
  {
    value: 'kg',
    label: 'kg',
    description: 'Kilograms',
  },
  {
    value: 'liters-gas',
    label: 'L (Gas)',
    description: 'Liters - Gas molar volume',
  },
  {
    value: 'liters-liquid',
    label: 'L (Liquid)',
    description: 'Liters - Liquid volume',
  },
];

export const resultUnitOptions: UnitOption[] = [
  {
    value: 'nm3',
    label: 'Nm³ (0°C)',
    description: 'Normal cubic meters',
  },
  {
    value: 'sm3-15',
    label: 'Sm³ @ 15°C',
    description: 'Standard cubic meters',
  },
  {
    value: 'sm3-21',
    label: 'Sm³ @ 21°C',
    description: 'Standard cubic meters',
  },
  {
    value: 'sm3-27',
    label: 'Sm³ @ 27°C',
    description: 'Standard cubic meters',
  },
  {
    value: 'sm3-custom',
    label: 'Sm³ @ Custom',
    description: 'Standard cubic meters',
  },
  {
    value: 'kg',
    label: 'kg',
    description: 'Kilograms',
  },
  {
    value: 'liters-gas',
    label: 'Liters (Gas)',
    description: 'Gas molar volume',
  },
  {
    value: 'liters-liquid',
    label: 'Liters (Liquid)',
    description: 'Liquid volume',
  },
];
