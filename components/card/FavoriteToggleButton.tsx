import { FaHeart } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { auth } from '@clerk/nextjs/server'
import { CardSignInButton } from '../form/Buttons'
import FavoriteToggleForm from './FavoriteToggleForm'
import { fetchFavoriteId } from '@/utils/actions'

async function FavoriteToggleButton({ vehicleId }: { vehicleId: string }) {

  const { userId } = auth()

  if (!userId) return <CardSignInButton />

  const favoriteId = await fetchFavoriteId({ vehicleId })

  return (
    <FavoriteToggleForm vehicleId={vehicleId} favoriteId={favoriteId} />
  )
}
export default FavoriteToggleButton