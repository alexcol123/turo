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
import { carMakesAndModels, gastype, vehicleColors, vehicletype } from '@/utils/arrayLists'



const carMakes = carMakesAndModels.map(car => {
  return { name: car.make }
})



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