import { carMakesAndModelsTypes, GasType, VehicleColorType, VehicleType } from "./types";

export const vehicleColors: VehicleColorType[] = [
  { name: 'Beige', value: '#F5F5DC' },
  { name: 'Black', value: '#000000' },
  { name: 'Blue', value: '#0000FF' },
  { name: 'Bronze', value: '#CD7F32' },
  { name: 'Brown', value: '#A52A2A' },
  { name: 'Burgundy', value: '#800020' },
  { name: 'Charcoal', value: '#36454F' },
  { name: 'Gold', value: '#FFD700' },
  { name: 'Gray', value: '#808080' },
  { name: 'Green', value: '#008000' },
  { name: 'Ivory', value: '#FFFFF0' },
  { name: 'Lime', value: '#00FF00' },
  { name: 'Magenta', value: '#FF00FF' },
  { name: 'Maroon', value: '#800000' },
  { name: 'Navy', value: '#000080' },
  { name: 'Orange', value: '#FFA500' },
  { name: 'Pink', value: '#FFC0CB' },
  { name: 'Purple', value: '#800080' },
  { name: 'Red', value: '#FF0000' },
  { name: 'Silver', value: '#C0C0C0' },
  { name: 'Tan', value: '#D2B48C' },
  { name: 'Teal', value: '#008080' },
  { name: 'Turquoise', value: '#40E0D0' },
  { name: 'White', value: '#FFFFFF' },
  { name: 'Yellow', value: '#FFFF00' }
]




export const gastype: GasType [] = [
  { name: 'gasoline' },
  { name: 'diesel' },
  { name: 'electric' },
  { name: 'hybrid' }
];




export const vehicletype: VehicleType[] = [
  { name: 'car' },
  { name: 'convertible' },
  { name: 'electric' },
  { name: 'pickup' },
  { name: 'sportscar' },
  { name: 'suv' }
];



export const carMakesAndModels: carMakesAndModelsTypes[] = [
  { make: 'Acura', models: ['ILX', 'MDX', 'RDX', 'TLX', 'TSX'] },
  { make: 'Audi', models: ['A3', 'A4', 'A6', 'Q5', 'Q7'] },
  { make: 'BMW', models: ['3 Series', '5 Series', 'X1', 'X3', 'X5'] },
  { make: 'Chevrolet', models: ['Camaro', 'Equinox', 'Impala', 'Malibu', 'Tahoe'] },
  { make: 'Dodge', models: ['Challenger', 'Charger', 'Durango', 'Journey', 'Ram 1500'] },
  { make: 'Ford', models: ['Escape', 'Explorer', 'F-150', 'Fusion', 'Mustang'] },
  { make: 'Honda', models: ['Accord', 'Civic', 'CR-V', 'Fit', 'Pilot'] },
  { make: 'Hyundai', models: ['Elantra', 'Santa Fe', 'Sonata', 'Tucson', 'Veloster'] },
  { make: 'Jeep', models: ['Cherokee', 'Grand Cherokee', 'Renegade', 'Wrangler', 'Wrangler Unlimited'] },
  { make: 'Kia', models: ['Forte', 'Optima', 'Sorento', 'Soul', 'Sportage'] },
  { make: 'Lexus', models: ['ES', 'GS', 'IS', 'RX', 'UX'] },
  { make: 'Mazda', models: ['CX-3', 'CX-5', 'CX-9', 'Mazda3', 'Mazda6'] },
  { make: 'Mercedes-Benz', models: ['C-Class', 'E-Class', 'GLC', 'GLE', 'S-Class'] },
  { make: 'Nissan', models: ['Altima', 'Murano', 'Rogue', 'Sentra', 'Versa'] },
  { make: 'Subaru', models: ['Ascent', 'Crosstrek', 'Forester', 'Outback', 'WRX'] },
  { make: 'Tesla', models: ['Model 3', 'Model S', 'Model X', 'Model Y', 'Roadster'] },
  { make: 'Toyota', models: ['Camry', 'Corolla', 'Highlander', 'RAV4', 'Tacoma'] },
  { make: 'Volkswagen', models: ['Atlas', 'Golf', 'Jetta', 'Passat', 'Tiguan'] },
  { make: 'Volvo', models: ['S60', 'S90', 'V60', 'XC60', 'XC90'] }
]
