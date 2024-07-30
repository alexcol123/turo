import { create } from 'zustand'
import { Booking } from './types'
import { DateRange } from 'react-day-picker'


type PropertyState = {
  vehicleId: string
  price: number
  bookings: Booking[]
  range: DateRange | undefined
}

export const useVehicle = create<PropertyState>(() => ({
  vehicleId: '',
  price: 0,
  bookings: [],
  range: undefined
})

)

console.log(useVehicle.getState())


