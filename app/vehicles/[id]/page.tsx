import BookingCalendar from "@/components/booking/BookingCalendar"
import FavoriteToggleButton from "@/components/card/FavoriteToggleButton"
import VehicleRating from "@/components/card/VehicleRating"
import BreadCrumbs from "@/components/vehicles/BreadCrumbs"
import ImageContainer from "@/components/vehicles/ImageContainer"
import ShareButton from "@/components/vehicles/ShareButton"
import UserInfo from "@/components/vehicles/UserInfo"
import VehicleDetails from "@/components/vehicles/VehicleDetails"
import { fetchVehicle, findExistingReview } from "@/utils/actions"

import { Separator } from "@/components/ui/separator"

import { redirect } from "next/navigation"
import Description from "@/components/vehicles/Description"
import Amenities from "@/components/vehicles/Amenities"
import VehicleReview from "@/components/review/VehicleReview"
import SubmitReview from "@/components/review/SubmitReview"
import { auth } from "@clerk/nextjs/server"

const SingleVehiclePage = async ({ params }: { params: { id: string } }) => {
  const { userId } = auth()

  const vehicle = await fetchVehicle(params.id)

  if (!vehicle) { redirect('/') }

  const { id: vehicleId, type, price, mileage, make, model, year, doors, seats, gastype, color, description, image, profile } = vehicle

  const details = { doors, seats, }

  const { firstName, lastName, username, email, profileImage, clerkId } = profile

  const amenities = { type, mileage, gastype, color }

  const listingName = `${make} - ${model} `

  const isNotOwner = userId !== clerkId



  const reviewDoesNotExist = userId && isNotOwner && !(await findExistingReview(userId, vehicleId))



  // console.log("review front ", review)
  // console.log('Is there a fucking review?')
  // console.log(review)

  // const reviewExists = await findExistingReview ({ vehicleId, profileId }) ? true : false

  return (
    <section>
      <BreadCrumbs name={listingName} />
      <header className='flex justify-between items-center mt-4'>
        <h1 className='text-4xl font-bold '>{make}</h1>
        <div className='flex items-center gap-x-4'>

          <ShareButton name={listingName} propertyId={vehicleId} />

          <FavoriteToggleButton vehicleId={vehicleId} />
        </div>
      </header>

      <ImageContainer image={image} listingName={listingName} />

      <section className='lg:grid lg:grid-cols-12 gap-x-12 mt-12'>

        <div className='lg:col-span-8'>
          <div className='flex gap-x-4 items-center'>
            <h1 className='text-xl font-bold'>{year} - {listingName} </h1>
            <VehicleRating />
          </div>

          <VehicleDetails details={details} />

          <UserInfo profile={{ profileImage, firstName }} />

          <Separator className="mt-4" />

          <Description description={description} />


          {/* amenities */}
          <Amenities amenities={amenities} />
        </div>

        <div className='lg:col-span-4 flex flex-col items-center'>
          {/* calendar */}
          <BookingCalendar />
        </div>




      </section>
      {reviewDoesNotExist && (
        <SubmitReview vehicleId={vehicleId} />

      )}



      <VehicleReview vehicleId={vehicleId} />

    </section>

  )
}
export default SingleVehiclePage