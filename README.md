# Industrial Gas Unit Converter

A professional conversion tool designed for sales engineers working with industrial gases. Convert between different units and standard conditions with thermodynamically accurate calculations.

## Features

- **Multiple Unit Support**: Nm³, Sm³, kg, Liters (Gas), Liters (Liquid)
- **Standard Conditions**: 15°C, 21°C, 27°C, plus custom temperature inputs
- **Dual Temperature Control**: Independent custom temperatures for input and output
- **Comprehensive Gas Coverage**: N₂, CO₂, Argon, H₂, He, Xe, Kr
- **Thermodynamically Accurate**: Uses ideal gas law molar pathway for all gas conversions
- **Quick Reference**: Built-in tables for gas properties, liquid properties, and unit definitions
- **Modern UI**: Clean glassmorphism design with professional aesthetics

## Conversion Methodology

### Gas Conversions
All gas-to-gas conversions use the ideal gas law molar pathway:
1. Convert input to mass (kg)
2. Convert mass to moles (using molecular weight)
3. Convert moles to volume at standard conditions
4. Apply temperature corrections using ideal gas law

### Liquid Conversions
Liquid liter conversions use actual liquid density at boiling point:
- Moles → Mass (g) → Liters (Liquid) using verified liquid densities

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd industrial-gas-converter

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## Known Issues

- **Xenon Liquid Density**: Current implementation uses 2942 kg/m³. Literature suggests 3057 kg/m³ may be more accurate. Will be verified and corrected in future release.

## Version History

### rev0 (Initial Release)
- Core conversion functionality for 7 industrial gases
- Support for 5 unit types with dual temperature control
- Thermodynamically accurate calculations using ideal gas law
- Quick reference tables for gas and liquid properties
- Modern glassmorphism UI

## License

MIT

## Contributing

Contributions welcome! Please open an issue or submit a pull request.

## Author

Built for industrial gas sales engineers who need accurate, reliable conversions in the field.
