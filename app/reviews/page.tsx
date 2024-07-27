import EmptyList from '@/components/home/EmptyList'
import { deleteReviewAction, fetchVehiclesReviewsByUser, } from '@/utils/actions'

import FormContainer from '@/components/form/FormContainer'
import { IconButton } from '@/components/form/Buttons'
import Title from '@/components/vehicles/Title'
import ReviewCard from '@/components/review/ReviewCard'

const ReviewsPage = async () => {

  const reviews = await fetchVehiclesReviewsByUser()



  if (reviews.length === 0) {
    return <EmptyList message="You have not submitted any reviews yet" />
  }
  return (
    <>

      <Title text='Your Reviews' />
      <section className='grid md:grid-cols-2 gap-8 mt-4 '>
        {reviews.map((review) => {
          const { comment, rating } = review
          const { make, model, year, image } = review.Vehicle ?? { make: '', model: '', year: 0, image: '' };

          const vehicleName = `${make} ${model} ${year}`
          const reviewInfo = {
            comment,
            rating,
            name: vehicleName,
            image,
          }
          return (
            <ReviewCard key={review.id} reviewInfo={reviewInfo}>
              <DeleteReview reviewId={review.id} />
            </ReviewCard>
          )
        })}
      </section>
    </>
  )
}

const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId })
  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType='delete' />
    </FormContainer>
  )
}

export default ReviewsPage

