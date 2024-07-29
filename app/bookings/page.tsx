import EmptyList from '@/components/home/EmptyList'
// import CountryFlagAndName from '@/components/card/CountryFlagAndName'
import Link from 'next/link'

import { formatDate, formatCurrency } from '@/utils/format'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import FormContainer from '@/components/form/FormContainer'
import { IconButton } from '@/components/form/Buttons'
import { fetchBookings, deleteBookingAction } from '@/utils/actions'
import LoadingTable from '@/components/booking/LoadingTable'

async function BookingsPage() {
  const bookings = await fetchBookings()
  if (bookings.length === 0) {
    return <EmptyList />
  }

  // return

  return (



    <div className='mt-16'>
      <h4 className='mb-4 capitalize'>total bookings : {bookings.length}</h4>
      <Table>
        <TableCaption>A list of your recent bookings.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Vehicle Info</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Nights</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>From</TableHead>
            <TableHead>To</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => {
            const { id, orderTotal, totalNights, checkIn, checkOut } = booking

            if (!booking.Vehicle) return null
            const { id: vehicleId, make, model, year } = booking.Vehicle

            const startDate = formatDate(checkIn)
            const endDate = formatDate(checkOut)
            return (
              <TableRow key={id}>
                <TableCell>
                  <Link
                    href={`/vehicles/${vehicleId}`}
                    className='underline text-muted-foreground tracking-wide'
                  >
                    {`${make} ${model} ${year}`}
                  </Link>
                </TableCell>
                <TableCell>
                  country or city
                  {/* <CountryFlagAndName countryCode={country} /> */}
                </TableCell>
                <TableCell>{totalNights}</TableCell>
                <TableCell>{formatCurrency(orderTotal)}</TableCell>
                <TableCell>{startDate}</TableCell>
                <TableCell>{endDate}</TableCell>
                <TableCell>
                  <DeleteBooking bookingId={id} />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>

    </div>
  )
}

function DeleteBooking({ bookingId }: { bookingId: string }) {
  const deleteBooking = deleteBookingAction.bind(null, { bookingId })
  return (
    <FormContainer action={deleteBooking}>
      <IconButton actionType='delete' />
    </FormContainer>
  )
}

export default BookingsPage