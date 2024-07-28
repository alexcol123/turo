'use client'
import { SignInButton, useAuth } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { useVehicle } from '@/utils/store'
import FormContainer from '@/components/form/FormContainer'
import { SubmitButton } from '@/components/form/Buttons'
import { createBookingAction } from '@/utils/actions'

const ConfirmBooking = () => {

  const {userId} = useAuth()
  const {vehicleId, range} = useVehicle((state) => state)

  const checkIn = range?.from as Date
  const checkOut = range?.to as Date

  if (!userId)
    return (
      <SignInButton mode='modal'>
        <Button type='button' className='w-full'>
          Sign In to Complete Booking
        </Button>
      </SignInButton>
    )


    const createBooking = createBookingAction.bind(null, {
      vehicleId,
      checkIn,
      checkOut,
    }) 


  return (
    <section>
    <FormContainer action={createBooking}>
      <SubmitButton text='Reserve' className='w-full' />
    </FormContainer>
  </section>
  )
}
export default ConfirmBooking