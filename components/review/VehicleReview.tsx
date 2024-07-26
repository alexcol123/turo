import { fetchVehicleReviews } from "@/utils/actions"
import Title from "../vehicles/Title"
import ReviewCard from "./ReviewCard"


const VehicleReview = async ({ vehicleId }: { vehicleId: string }) => {

  const reviews = await fetchVehicleReviews(vehicleId)

  if (reviews.length < 1) return null

  return (
    <div className='mt-8'>
      <Title text='Reviews' />
      <div className='grid md:grid-cols-2 gap-8 mt-4 '>
        {reviews.map((review) => {
          const { comment, rating } = review
          const { firstName, profileImage } = review.profile || { firstName: '', lastName: '', profileImage: '' };

       
          const reviewInfo = {
            comment,
            rating,
            name: firstName,
            image: profileImage,
          }
  
          return <ReviewCard key={review.id} reviewInfo={reviewInfo} />
        })}
      </div>
    </div>
  )
}
export default VehicleReview