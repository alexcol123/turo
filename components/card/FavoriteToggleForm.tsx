'use client'

import { usePathname } from 'next/navigation'
import FormContainer from '../form/FormContainer'

import { CardSubmitButton } from '../form/Buttons'
import { toggleFavoriteAction } from '@/utils/actions'


function FavoriteToggleForm() {

  return (
    <FormContainer action={toggleFavoriteAction}>
      <CardSubmitButton isFavorite={false} />
    </FormContainer>
  )
}
export default FavoriteToggleForm