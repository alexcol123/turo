'use server'

import db from './db'
import {  clerkClient, currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createReviewSchema, imageSchema, profileSchema, validateWithZodSchema, vehicleSchema } from './schemas'
import { error, profile } from 'console'
import { uploadImage } from './supabase'
import { EnumValues } from 'zod'
import { calculateTotals } from './calculatTotals'


const getAuthUser = async () => {
  const user = await currentUser()
  if (!user) {
    throw new Error('You must be logged in to access this route')
  }
  if (!user.privateMetadata.hasProfile) redirect('/profile/create')
  return user
}

const renderError = (error: unknown): { message: string } => {
  console.log(error)
  return {
    message: error instanceof Error ? error.message : 'An error occurred',
  }
}

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const user = await currentUser()
    if (!user) {
      throw new Error('Please login to create a profile  ')
    }

    const rawData = Object.fromEntries(formData)
    const validatedFields = validateWithZodSchema(profileSchema, rawData)

    await db.profile.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? '',
        ...validatedFields,
      },
    })
    await clerkClient.users.updateUserMetadata(user.id, {
      privateMetadata: {
        hasProfile: true,
      },
    })
  } catch (error) {
    return renderError(error)
  }
  redirect('/')
}


export const fetchProfileImage = async () => {
  const user = await currentUser()

  if (!user) {
    return null
  }

  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
    select: {
      profileImage: true,
    },
  })
  return profile?.profileImage
}


export const fetchProfile = async () => {
  const user = await getAuthUser()

  const profile = await db.profile.findUnique({
    where: {
      clerkId: user.id,
    },
  })
  if (!profile) return redirect('/profile/create')
  return profile
}

export const updateProfileAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser()
  try {
    const rawData = Object.fromEntries(formData)

    const validatedFields = validateWithZodSchema(profileSchema, rawData)

    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: validatedFields
    })
    revalidatePath('/profile')
    return { message: 'Profile updated successfully' }
  } catch (error) {
    return renderError(error)
  }
}

export const updateProfileImageAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser()
  try {

    const image = formData.get('image') as File
    const validatedFields = validateWithZodSchema(imageSchema, { image })

    const fullPath = await uploadImage(validatedFields.image)

    await db.profile.update({
      where: {
        clerkId: user.id,
      },
      data: {
        profileImage: fullPath,
      },
    })

    revalidatePath('/profile')

    return { message: 'Profile image updated successfully' }
  } catch (error) {
    return renderError(error)
  }
}

export const createVehicleAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser()
  try {
    const rawData = Object.fromEntries(formData)
    const file = formData.get('image') as File

    const validatedFields = validateWithZodSchema(vehicleSchema, rawData)
    const validatedFile = validateWithZodSchema(imageSchema, { image: file })

    const fullPath = await uploadImage(validatedFile.image)

    await db.vehicle.create({
      data: {
        ...validatedFields,
        image: fullPath,
        profileId: user.id,
      },
    })


  } catch (error) {
    return renderError(error)
  }
  redirect('/')
}

export const fetchVehicles = async ({
  search = '',
  type,
}: {
  search?: string
  type?: string
}) => {


  // add a 2 second delay to simulate a slow network
  // await new Promise((resolve) => setTimeout(resolve, 2000))

  const vehicles = await db.vehicle.findMany({

    where: {
      type: type as any,
      OR: [
        { make: { contains: search, mode: 'insensitive' }, },
        { model: { contains: search, mode: 'insensitive' } },
      ]
    },
    select: {
      id: true,
      make: true,
      model: true,
      year: true,
      price: true,
      image: true,
      type: true,
      seats: true,
      doors: true,
    },
    orderBy: {
      createdAt: 'desc'
    }
  }
  )
  return vehicles

}

export const fetchVehicle = async (id: string) => {
  const vehicle = await db.vehicle.findUnique({
    where: {
      id,
    },
    include: {
      profile: true,
    }
  })
  return vehicle
}



export const fetchFavoriteId = async ({
  vehicleId,
}: {
  vehicleId: string
}) => {
  const user = await getAuthUser()

  const favorite = await db.favorite.findFirst({
    where: {
      vehicleId,
      profileId: user.id,
    },
    select: {
      id: true,
    },
  })

  return favorite?.id || null
}

export const toggleFavoriteAction = async (prevState: {
  vehicleId: string;
  favoriteId: string | null;
  pathname: string;
}) => {

  const user = await getAuthUser()
  const { vehicleId, favoriteId, pathname } = prevState


  try {
    if (favoriteId) {
      await db.favorite.delete({
        where: { id: favoriteId }
      })
    } else {
      await db.favorite.create({
        data: {
          profileId: user.id,
          vehicleId
        }
      })
    }
  } catch (error) {
    return renderError(error)
  }
  revalidatePath(pathname)
  return { message: favoriteId ? 'Vehicle removed from favorites' : 'Vehicle added to favorites' }
}


export const fetchFavorites = async () => {
  const user = await getAuthUser()

  const favorites = await db.favorite.findMany({
    where: {
      profileId: user.id
    },
    select: {
      vehicle: true,
    }
  })

  const onlyVehicles = favorites.map((favorite) => favorite.vehicle)
  return onlyVehicles

}

//  review actions


export const createReviewAction = async (prevState: any, formData: FormData) => {
  const user = await getAuthUser()

  try {
    const rawData = Object.fromEntries(formData)

    const validatedFields = validateWithZodSchema(createReviewSchema, rawData)

    await db.review.create({
      data: {
        ...validatedFields,
        profileId: user.id
      }
    })

    revalidatePath(`/vehicles/${validatedFields.vehicleId}`)
    return { message: 'Review submitted successfully' }
  } catch (error) {
    return renderError(error)
  }
}

export async function fetchVehicleReviews(vehicleId: string) {
  const reviews = await db.review.findMany({
    where: {
      vehicleId,
    },
    select: {
      id: true,
      rating: true,
      comment: true,
      profile: {
        select: {
          firstName: true,
          lastName: true,
          profileImage: true,
        }
      }
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
  return reviews
}

export const fetchVehiclesReviewsByUser = async () => {

  const user = await getAuthUser()

  const reviews = await db.review.findMany({
    where: {
      profileId: user.id,
    },
    select: {
      id: true,
      rating: true,
      comment: true,
      Vehicle: {
        select: {
          make: true,
          model: true,
          year: true,
          image: true,
        }
      }
    },

    orderBy: {
      createdAt: 'desc'
    }
  })

  return reviews


}

export const deleteReviewAction = async (prevState: { reviewId: string }) => {

  const { reviewId } = prevState
  const user = await getAuthUser()

  try {
    await db.review.delete({
      where: {
        id: reviewId,
        profileId: user.id
      }
    })
    revalidatePath('/profile')
    return { message: 'Review deleted successfully' }

  } catch (error) {
    return renderError(error)
  }

}



export const findExistingReview = async (vehicleId: string, userId: string) => {


  const review = await db.review.findFirst({
    where: {
      vehicleId,
      profileId: userId,
    },
  })

  console.log(review)


  return null
}

export const fetchVehicleRating = async (vehicleId: string) => {


  const result = await db.review.groupBy({
    by: ['vehicleId'],

    _avg: {
      rating: true,
    },
    _count: {
      rating: true,
    },
    where: {
      vehicleId,
    },


  })



  return {
    rating: result[0]?._avg.rating?.toFixed(1) ?? 0,
    count: result[0]?._count.rating ?? 0,
  }
}



export const fetchVehicleDetails = async (id: string) => {
  const vehicleInfo = await db.vehicle.findUnique({
    where: { id },
    include: {
      profile: true,

      bookings: true
    }
  })

  return vehicleInfo
}

export const createBookingAction = async (prevState: {
  vehicleId: string,
  checkIn: Date,
  checkOut: Date
}) => {
  const user = await getAuthUser()

  const { vehicleId, checkIn, checkOut } = prevState

  const vehicle = await db.vehicle.findUnique({
    where: { id: vehicleId },
    select: {
      price: true
    }
  })


  if (!vehicle) {
    return { message: 'Property not found' }
  }


  const { orderTotal, totalNights } = calculateTotals({
    checkIn, checkOut, price: vehicle.price
  })


  try {

    await db.booking.create({
      data: {
        checkIn,
        checkOut,
        orderTotal,
        totalNights,
        profileId: user.id,
        vehicleId,
      }
    })

  } catch (error) {
    return renderError(error)
  }

  redirect('/bookings')
}


export const fetchBookings = async () => {
  const user = await getAuthUser()
  const bookings = await db.booking.findMany({
    where: {
      profileId: user.id,
    },
    include: {
      Vehicle: {
        select: {
          id: true,
          make: true,
          model: true,
          year: true,

        },
      },
    },
    orderBy: {
      checkIn: 'desc',
    },
  })
  return bookings
}

export async function deleteBookingAction(prevState: { bookingId: string }) {
  const { bookingId } = prevState
  const user = await getAuthUser()

  try {
    const result = await db.booking.delete({
      where: {
        id: bookingId,
        profileId: user.id,
      },
    })

    revalidatePath('/bookings')
    return { message: 'Booking deleted successfully' }
  } catch (error) {
    return renderError(error)
  }
}


export const fetchRentals = async () => {
  const user = await getAuthUser()

  const rentals = await db.vehicle.findMany({
    where: { profileId: user.id },
    orderBy: { createdAt: 'desc' },
  })


  const rentalsWithBookingSums = await Promise.all(rentals.map(async (rental) => {

    const totalNightsSum = await db.booking.aggregate({
      where: { vehicleId: rental.id },
      _sum: { totalNights: true }
    })

    const orderTotalSum = await db.booking.aggregate({
      where: { vehicleId: rental.id },
      _sum: { orderTotal: true }
    })


    return {
      ...rental,
      totalNightsSum: totalNightsSum._sum.totalNights,
      orderTotalSum: orderTotalSum._sum.orderTotal,
    }

  }))

  return rentalsWithBookingSums
}



export async function deleteRentalAction(prevState: { vehicleId: string }) {
  const { vehicleId } = prevState
  const user = await getAuthUser()

  try {
    await db.vehicle.delete({
      where: {
        id: vehicleId,
        profileId: user.id,
      },
    })

    revalidatePath('/my-vehicles')
    return { message: 'Rental deleted successfully' }
  } catch (error) {
    return renderError(error)
  }
}




export const updateVehicleAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser()
  const vehicleId = formData.get('id') as string
  console.log(vehicleId, 'vehicleId')

  try {
    const rawData = Object.fromEntries(formData)

    const validatedFields = validateWithZodSchema(vehicleSchema, rawData)
    await db.vehicle.update({
      where: {
        id: vehicleId,
        profileId: user.id,
      },
      data: {
        ...validatedFields,
      },
    })

    // revalidatePath(`/my-vehicles/${vehicleId}/edit`)
    // redirect(`/my-vehicles/${vehicleId}/`)
    //  return { message: 'Update Successful' }
  } catch (error) {
    return renderError(error)
  }

  redirect(`/vehicles/${vehicleId}/`)
}



export const updateVehicleImageAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser()
  const vehicleId = formData.get('id') as string

  try {
    const image = formData.get('image') as File
    const validatedFields = validateWithZodSchema(imageSchema, { image })
    const fullPath = await uploadImage(validatedFields.image)

    await db.vehicle.update({
      where: {
        id: vehicleId,
        profileId: user.id,
      },
      data: {
        image: fullPath,
      },
    })
    revalidatePath(`/my-vehicles/${vehicleId}/edit`)
    return { message: 'Property Image Updated Successful' }
  } catch (error) {
    return renderError(error)
  }
}


export const fetchReservations = async () => {

  const user = await getAuthUser()

  const reservations = await db.booking.findMany({
    where: {
      Vehicle: {
        profileId: user.id,
      },
    },
    orderBy: {
      createdAt: 'desc',
    },

    include: {
      Vehicle: {
        select: {
          make: true,
          model: true,
          year: true,
          image: true,
        },
      },
    },

  })

  return reservations
}