
import { LuFolderCheck } from 'react-icons/lu'
import Title from './Title'
import { Amenity } from '@/utils/amenities'


type AmenitiesProps = {
  amenities: {
    type: string
    mileage: number
    gastype: string
    color: string
  }
}

const Amenities = ({ amenities }: AmenitiesProps) => {


  const { type, mileage, gastype, color } = amenities



  return (
    <div className='mt-4'>
      <Title text='What this vehicle offers' />

      <div className='grid md:grid-cols-2 gap-x-4'>

        <div className='flex items-center gap-x-4 mb-2 '>
          <LuFolderCheck className='h-6 w-6 text-primary' />
          <p className='font-light text-sm capitalize'>
            Mileage: {mileage}
          </p>
        </div>


        <div className='flex items-center gap-x-4 mb-2 '>
          <LuFolderCheck className='h-6 w-6 text-primary' />
          <p className='font-light text-sm capitalize'>
            Fuel:  {gastype}
          </p>
        </div>



        <div className='flex items-center gap-x-4 mb-2 '>
          <LuFolderCheck className='h-6 w-6 text-primary' />
          <p className='font-light text-sm capitalize'>
            Type:  {type}
          </p>
        </div>

        <div className='flex items-center gap-x-4 mb-2 '>
          <LuFolderCheck className='h-6 w-6 text-primary' />
          <p className='font-light text-sm capitalize'>
            Color:  {color}
          </p>
        </div>



      </div>
    </div>
  )
}
export default Amenities