# Changelog

All notable changes to this project will be documented in this file.

## [rev0] - 2024-01-XX - Initial Release

### Added
- Core conversion engine with ideal gas law calculations
- Support for 7 industrial gases: N₂, CO₂, Argon, H₂, He, Xe, Kr
- 5 unit types: Nm³, Sm³, kg, Liters (Gas), Liters (Liquid)
- Standard temperature options: 15°C, 21°C, 27°C
- Dual custom temperature inputs for input and output units
- Side-by-side conversion layout
- QuickReference component with comprehensive property tables
- Glassmorphism UI theme with backdrop blur effects
- Responsive design for desktop and mobile

### Conversion Features
- Thermodynamically accurate gas conversions using molar pathway
- Liquid density-based conversions for liquid liters
- Temperature correction using ideal gas law
- Support for both gas and liquid states of all applicable gases

### Known Issues
- Xenon liquid density may need verification (currently 2942 kg/m³, literature suggests 3057 kg/m³)

### Technical Details
- React 18 with TypeScript
- Vite build system
- Tailwind CSS for styling
- ESLint configuration for code quality
- Modular component architecture
