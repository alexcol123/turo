'use client'

import { usePathname } from 'next/navigation'
import FormContainer from '../form/FormContainer'

import { CardSubmitButton } from '../form/Buttons'
import { toggleFavoriteAction } from '@/utils/actions'


type FavoriteToggleFormProps = {
  vehicleId: string
  favoriteId: string | null
}

function FavoriteToggleForm({ vehicleId,
  favoriteId, }: FavoriteToggleFormProps) {

  const pathname = usePathname()
  const toggleAction = toggleFavoriteAction.bind(null, {
    vehicleId,
    favoriteId,
    pathname,
  })

  return (
    <FormContainer action={toggleAction}>
         <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  )
}
export default FavoriteToggleForm