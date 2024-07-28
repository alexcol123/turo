'use client'

import { Calendar } from '@/components/ui/calendar'
import { useEffect, useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import { DateRange } from 'react-day-picker'
import { useVehicle } from '@/utils/store'

import {
  generateBlockedPeriods,
  generateDateRange,
  generateDisabledDates,
  defaultSelected
} from '@/utils/calendar'

const BookingCalendar = () => {

  const currentDate = new Date()
  const defaultSelected: DateRange = {
    from: undefined,
    to: undefined,
  }
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected)

  useEffect(() => {
    useVehicle.setState({ range })
  }, [range])


  return (
    <Calendar
      mode='range'
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      className='mb-6'
    />

  )
}
export default BookingCalendar