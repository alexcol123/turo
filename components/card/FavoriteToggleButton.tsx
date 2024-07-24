import { FaHeart } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { auth } from '@clerk/nextjs/server'
import { CardSignInButton } from '../form/Buttons'
import FavoriteToggleForm from './FavoriteToggleForm'





async function FavoriteToggleButton({ propertyId }: { propertyId: string }) {

  const { userId } = auth()

  if (!userId) return <CardSignInButton />



  return (
    <FavoriteToggleForm/>
  )
}
export default FavoriteToggleButton