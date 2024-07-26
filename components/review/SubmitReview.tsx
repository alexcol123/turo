'use client'
import { useState } from 'react'
import { SubmitButton } from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'
import { Card } from '@/components/ui/card'

import TextAreaInput from '@/components/form/TextAreaInput'
import { Button } from '@/components/ui/button'
import { createReviewAction } from '@/utils/actions'
import RatingInput from '../form/Rating'

const SubmitReview = ({ vehicleId }: { vehicleId: string }) => {

  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false)

  return (
    <div className='my-8'>
      <Button onClick={() => setIsReviewFormVisible((prev) => !prev)}>
        Leave a Review
      </Button>
      {isReviewFormVisible && (
        <Card className='p-8 mt-8'>
          <FormContainer action={createReviewAction}>
            <input type='hidden' name='vehicleId' value={vehicleId} />
            <RatingInput name='rating' />
            <TextAreaInput
              name='comment'
              labelText='your thoughts on this vehicel'
              defaultValue='Amazing vehicle !!!'
            />
            <SubmitButton text='Submit' className='mt-4' />
          </FormContainer>
        </Card>
      )}
    </div>
  )
}
export default SubmitReview