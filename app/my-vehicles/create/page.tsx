import FormInput from '@/components/form/FormInput'
import FormContainer from '@/components/form/FormContainer'
import { createVehicleAction } from '@/utils/actions'
import { SubmitButton } from '@/components/form/Buttons'
import TextAreaInput from '@/components/form/TextAreaInput'
import FormSelect from '@/components/form/FormSelect'

import CounterInput from '@/components/form/CounterInput'

import MakeModel from '@/components/form/MakeModel'
import SelectInput from '@/components/form/SelectInput'
import ImageInput from '@/components/form/ImageInput'




export type VehicleColorType = {
  name: string,
  value: string
}

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


type GasType = {
  name: string;
};

export const gastype: GasType[] = [
  { name: 'gasoline' },
  { name: 'diesel' },
  { name: 'electric' },
  { name: 'hybrid' }
];



type VehicleType = {
  name: string;
};

export const vehicletype: VehicleType[] = [
  { name: 'car' },
  { name: 'convertible' },
  { name: 'electric' },
  { name: 'pickup' },
  { name: 'sportscar' },
  { name: 'suv' }
];

// type CarMakeTypes = {
//   name: string;

// };
// export const carMakes: CarMakeTypes[] = [
//   { name: 'Acura' },
//   { name: 'Audi' },
//   { name: 'BMW' },
//   { name: 'Chevrolet' },
//   { name: 'Dodge' },
//   { name: 'Ford' },
//   { name: 'Honda' },
//   { name: 'Hyundai' },
//   { name: 'Jeep' },
//   { name: 'Kia' },
//   { name: 'Lexus' },
//   { name: 'Mazda' },
//   { name: 'Mercedes-Benz' },
//   { name: 'Nissan' },
//   { name: 'Subaru' },
//   { name: 'Tesla' },
//   { name: 'Toyota' },
//   { name: 'Volkswagen' },
//   { name: 'Volvo' }
// ];

export type carMakesAndModelsTypes = {
  make: string;
  models: string[];

}


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


const carMakes = carMakesAndModels.map(car => {
  return { name: car.make }
})

// const carModels = carMakesAndModels.map(car => {
//   return { models: car.models }
// })

// console.log(carModels)

const CreateVehicleRentalPage = () => {
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>
        create vehicle rental


        <div className="border p-8 rounded-md">
          <h3 className='text-lg mb-4 font-medium'>General Info</h3>

          <FormContainer action={createVehicleAction} >


            {/* 
            type        Type    @default(car)
            color        String                     CONVERT TO SELECT
            description                             CONVERT TO TEXTAREA

            price       Int                         CONVERT TO SELECT
            mileage     Int     @default(0)         CONVERT TO  Counter


            make        String                      CONVERT TO  Select
            model       String                     CONVERT TO  Select

            year        Int                         CONVERT TO  Counter
            doors       Int                         CONVERT TO  Counter
            seats       Int                         CONVERT TO  Counter
            gastype     Gastype @default(gasoline)  CONVERT TO SELECT
          
           */}
  <ImageInput />

            <TextAreaInput name={'description'} labelText={'Description (10-500 words)'} />

            <div className='grid md:grid-cols-2 gap-8 mb-4'>

              <FormSelect name={'color'} list={vehicleColors} isColor={true} />


              <SelectInput name={'price'} labelName={'price ($) per day'} />
              <SelectInput name={'mileage'} labelName={'mileage (ex 12000)'} defaultValue={1200} />
              <SelectInput name={'year'} labelName={'year (ex 2024)'} defaultValue={2024} />



            </div>

            <MakeModel list={carMakesAndModels} />


            <div className='grid md:grid-cols-2 gap-8 mb-4'>

              <FormSelect label='Fuel type' name={'gastype'} list={gastype} />
              <FormSelect label='vehicle type' name={'type'} list={vehicletype} />

            </div>

            <h3 className="text-lg mt-8 mb-4 font-medium  ">Other Details</h3>

      

            <div className='grid md:grid-cols-2 gap-8 mb-4'>
            <CounterInput name='doors' />
            <CounterInput name='seats' />
            </div>

          

            <SubmitButton text='Create rental' className='mt-12' />
          </FormContainer>

        </div>
      </h1>
    </section>
  )
}
export default CreateVehicleRentalPage