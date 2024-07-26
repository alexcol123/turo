import { FaStar } from 'react-icons/fa'

async function VehicleRating() {
  // temp
  const rating = 4.7
  const count = 100

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