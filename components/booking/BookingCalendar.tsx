'use client'
import { Calendar } from '@/components/ui/calendar'
import { useEffect, useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import { DateRange } from 'react-day-picker'
import { useVehicle } from '@/utils/store'

import {
  generateDisabledDates,
  generateDateRange,
  defaultSelected,
  generateBlockedPeriods,
} from '@/utils/calendar'

const BookingCalendar = () => {

  const currentDate = new Date()

  const [range, setRange] = useState<DateRange | undefined>(defaultSelected)

  const bookings = useVehicle(state => state.bookings)

  const { toast } = useToast()

  const blockedPeriods = generateBlockedPeriods({
    bookings,
    today: currentDate
  })

  const unavailableDates = generateDisabledDates(blockedPeriods)

  

  useEffect(() => {
    const selectedRange = generateDateRange(range);
    const isDisabledDateIncluded = selectedRange.some((date) => {
      if (unavailableDates[date]) {
        setRange(defaultSelected);
        toast({
          description: 'Some dates are booked. Please select again.',
        });
        return true;
      }
      return false;
    });
    useVehicle.setState({ range });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range]);


  return (
    <Calendar
      mode='range'
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
      className='mb-4'
      disabled={blockedPeriods}
    />
  )
}
export default BookingCalendar