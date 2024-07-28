import { fetchVehicleRating } from '@/utils/actions'
import { FaStar } from 'react-icons/fa'

async function VehicleRating({ vehicleId, inPage }: { vehicleId: string, inPage: boolean }) {
  // temp

  // const {rating , count} = await fetchVehicleRating(vehicleId)  

  const {rating, count} = await fetchVehicleRating(vehicleId)

  if (count === 0) {return null}


  const className = `flex gap-1 items-center  `
  const countText = count > 1 ? 'reviews' : 'review'
  const countValue = `(${count}) `

  return (
    <span className={className} >
      <FaStar className='w-3 h-3' />
      {rating} {countValue}
    </span>
  )
}

export default VehicleRating