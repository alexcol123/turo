'use client'

import { useVehicle } from '@/utils/store'
import { Booking } from '@/utils/types'
import BookingCalendar from './BookingCalendar'
import BookingContainer from './BookingContainer'
import { useEffect } from 'react'


type BookingWrapperProps = {
  vehicleId: string
  price: number
  bookings: Booking[]
}

const BookingWrapper = ({
  vehicleId,
  price,
  bookings
}: BookingWrapperProps) => {

  useEffect(() => {
    useVehicle.setState({ vehicleId, price, bookings })


  }, [])




  return (
    <>
      <BookingCalendar />
      <BookingContainer />
    </>
  )


}
export default BookingWrapper