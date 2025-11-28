import { GasProperties, LiquidProperties, GasType, LiquidType } from '../types';

export const gasProperties: Record<GasType, GasProperties> = {
  N2: {
    name: 'Nitrogen',
    molecularWeight: 28.014,
    density: 1.2506,
  },
  O2: {
    name: 'Oxygen',
    molecularWeight: 31.999,
    density: 1.429,
  },
  Argon: {
    name: 'Argon',
    molecularWeight: 39.948,
    density: 1.784,
  },
  CO2: {
    name: 'Carbon Dioxide',
    molecularWeight: 44.01,
    density: 1.977,
  },
  H2: {
    name: 'Hydrogen',
    molecularWeight: 2.016,
    density: 0.08988,
  },
  He: {
    name: 'Helium',
    molecularWeight: 4.003,
    density: 0.1785,
  },
  Xe: {
    name: 'Xenon',
    molecularWeight: 131.29,
    density: 5.894,
  },
  Kr: {
    name: 'Krypton',
    molecularWeight: 83.798,
    density: 3.749,
  },
};

export const liquidProperties: Record<LiquidType, LiquidProperties> = {
  LIN: {
    name: 'Liquid Nitrogen',
    density: 808,
    gasEquivalent: 'N2',
  },
  LOX: {
    name: 'Liquid Oxygen',
    density: 1141,
    gasEquivalent: 'O2',
  },
  LAR: {
    name: 'Liquid Argon',
    density: 1393,
    gasEquivalent: 'Argon',
  },
  LCO2: {
    name: 'Liquid Carbon Dioxide',
    density: 1101,
    gasEquivalent: 'CO2',
  },
  LH2: {
    name: 'Liquid Hydrogen',
    density: 71,
    gasEquivalent: 'H2',
  },
  LHe: {
    name: 'Liquid Helium',
    density: 125,
    gasEquivalent: 'He',
  },
  LXe: {
    name: 'Liquid Xenon',
    density: 3057,
    gasEquivalent: 'Xe',
  },
  LKr: {
    name: 'Liquid Krypton',
    density: 2413,
    gasEquivalent: 'Kr',
  },
};

export const standardTemperatures = {
  '15C': 15,
  '21C': 21,
  '27C': 27,
};
