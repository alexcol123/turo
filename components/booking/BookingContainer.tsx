'use client'

import { useVehicle } from '@/utils/store'
import ConfirmBooking from './ConfirmBooking'
import BookingForm from './BookingForm'


const BookingContainer = () => {

  const { range } = useVehicle((state) => state)

  if (!range || !range.from || !range.to) return null

  if (range.to.getTime() === range.from.getTime()) return null



  return (
    <>
      <BookingForm />
      <ConfirmBooking />
    </>
  )
}
export default BookingContainer