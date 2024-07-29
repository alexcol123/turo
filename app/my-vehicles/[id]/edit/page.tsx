import FormInput from '@/components/form/FormInput'
import FormContainer from '@/components/form/FormContainer'

import {
  fetchVehicleDetails,
  updateVehicleAction,
  updateVehicleImageAction,
} from '@/utils/actions'

import { SubmitButton } from '@/components/form/Buttons'
import TextAreaInput from '@/components/form/TextAreaInput'
import FormSelect from '@/components/form/FormSelect'

import CounterInput from '@/components/form/CounterInput'

import MakeModel from '@/components/form/MakeModel'
import SelectInput from '@/components/form/SelectInput'
import ImageInput from '@/components/form/ImageInput'
import { carMakesAndModels, gastype, vehicleColors, vehicletype } from '@/utils/arrayLists'
import { redirect } from 'next/navigation'
import ImageInputContainer from '@/components/form/ImageInputContainer'



const carMakes = carMakesAndModels.map(car => {
  return { name: car.make }
})



const EditVehiclePage = async ({ params }: { params: { id: string } }) => {


  const vehicle = await fetchVehicleDetails(params.id)

  console.log(vehicle)


  if (!vehicle) { redirect('/') }



  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>
        Edit vehicle rental





        <div className="border p-8 rounded-md">
          <h3 className='text-lg mb-4 font-medium'>Edit Vehicle</h3>

          <div className="border p-8 rounded-md">

            {/* Image input container */}
            <ImageInputContainer
              name={vehicle.make}
              text='Update Image'
              action={updateVehicleImageAction}
              image={vehicle.image}
            >
              <input type='hidden' name='id' value={vehicle.id} />
            </ImageInputContainer>

            <FormContainer action={updateVehicleAction} >

            <input type='hidden' name='id' value={vehicle.id} />

              <TextAreaInput name={'description'} labelText={'Description (10-500 words)'} defaultValue={vehicle.description} />

              <div className='grid md:grid-cols-2 gap-8 mb-4'>

                <FormSelect name={'color'} list={vehicleColors} isColor={true} defaultValue={vehicle.color} />


                <SelectInput name={'price'} labelName={'price ($) per day'} defaultValue={vehicle.price} />
                <SelectInput name={'mileage'} labelName={'mileage (ex 12000)'} defaultValue={vehicle.mileage} />
                <SelectInput name={'year'} labelName={'year (ex 2024)'} defaultValue={vehicle.year} />



              </div>

              <MakeModel list={carMakesAndModels} defaultMake={vehicle.make} defaultModel={vehicle.model} />


              <div className='grid md:grid-cols-2 gap-8 mb-4'>

                <FormSelect label='Fuel type' name={'gastype'} list={gastype} defaultValue={vehicle.gastype} />
                <FormSelect label='vehicle type' name={'type'} list={vehicletype} defaultValue={vehicle.type} />

              </div>

              <h3 className="text-lg mt-8 mb-4 font-medium  ">Other Details</h3>



              <div className='grid md:grid-cols-2 gap-8 mb-4'>
                <CounterInput name='doors' defaultValue={vehicle.doors} />
                <CounterInput name='seats' defaultValue={vehicle.seats} />
              </div>



              <SubmitButton text='Edit Vehicle ' className='mt-12' />
            </FormContainer>


          </div>

        </div>
      </h1>
    </section>
  )
}
export default EditVehiclePage