import { fetchReservations } from '@/utils/actions'
import Link from 'next/link'
import EmptyList from '@/components/home/EmptyList'
// import CountryFlagAndName from '@/components/card/CountryFlagAndName'

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
import Image from 'next/image'




async function ReservationsPage() {
  const reservations = await fetchReservations()

  if (reservations.length === 0) {
    return <EmptyList />
  }


  return (
    <div className='mt-16'>
      <h4 className='mb-4 capitalize'>
        total reservations : {reservations.length}
      </h4>
      <Table>
        <TableCaption>A list of your recent reservations.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Vehicle</TableHead>

            <TableHead>Days</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Check In</TableHead>
            <TableHead>Check Out</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reservations.map((item) => {




            // const { id, orderTotal, totalNights, checkIn, checkOut } = item
            // const { id: propertyId, name, country } = item.property




            const { id, orderTotal, totalNights, checkIn, checkOut, paymentStatus, createdAt, updatedAt, profileId, vehicleId, } = item


            let make = item?.Vehicle?.make ? item?.Vehicle?.make : ''
            let model = item?.Vehicle?.make ? item?.Vehicle?.model : ''
            let year = item?.Vehicle?.make ? item?.Vehicle?.year : ''
            let image = item?.Vehicle?.make ? item?.Vehicle?.image : ''


            //  console.log(item.Vehicle)
            //  const name = {`${make} ${model} ${year}`}

            const name = ` ${year} ${make} ${model} `


            const startDate = formatDate(checkIn)
            const endDate = formatDate(checkOut)

            return (
              <TableRow key={id}>

                <TableCell>
                  <Link href={`/vehicles/${vehicleId}`}>
                    <Image src={image} alt={name} width={150} height={150} className='rounded-md object-cover h-[60px] w-[100px]' />
                  </Link>

                </TableCell>

                <TableCell>
                  <Link
                    href={`/vehicles/${vehicleId}`}
                    className='underline text-muted-foreground tracking-wide'>
                    {name}
                  </Link>
                </TableCell>

                <TableCell>{totalNights}</TableCell>
                <TableCell>{formatCurrency(orderTotal)}</TableCell>
                <TableCell>{startDate}</TableCell>
                <TableCell>{endDate}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
export default ReservationsPage