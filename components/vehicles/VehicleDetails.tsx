

import { formatQuantity } from '@/utils/format'

type PropertyDetailsProps = {
  details: {
    doors: number,
    seats: number
  }
}

function VehicleDetails({
  details: { doors, seats },
}: PropertyDetailsProps) {
  return (
    <p className='text-md font-light '>
      <span>{formatQuantity(doors, 'door')} &middot; </span>
      <span>{formatQuantity(seats, 'seat')} </span>
    </p>
  )
}
export default VehicleDetails