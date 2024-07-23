'use client'

import { SignOutButton } from '@clerk/nextjs'
import { useToast } from '../ui/use-toast'

const SignOutLink = () => {

  const { toast } = useToast()

  const handleLogout = () => {
    toast({ description: 'You have sign out. ' })
  }

  return (
    <SignOutButton redirectUrl='/'>
      <button onClick={handleLogout}>Sign out</button  >
    </SignOutButton>
  )
}
export default SignOutLink