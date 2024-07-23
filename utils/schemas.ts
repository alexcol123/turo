import { getDate } from 'date-fns'
import * as z from 'zod'
import { ZodSchema } from 'zod'

export const profileSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters long' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters long' }),
  username: z.string().min(2, { message: 'Username must be at least 2 characters long' }),
})


export const imageSchema = z.object({
  image: validateFile(),
})

function validateFile() {
  const maxUploadSize = 1024 * 1024
  const acceptedFileTypes = ['image/']
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize
    }, `File size must be less than 1 MB`)
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      )
    }, 'File must be an image')
}

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data)
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message)

    throw new Error(errors.join(', '))
  }
  return result.data
}



// model Vehicle {
//   id        String   @id @default(uuid())
//   clerkId   String   @unique
//   type      Type     @default(car)
//   price     Int      @default(0)
//   mileage   Int      @default(0)
//   make      String
//   model     String
//   year      Int
//   doors     Int
//   seats     Int
//   gastype   Gastype  @default(gasoline)
//   color     String
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
//   profile   Profile  @relation(fields: [profileId], references: [clerkId])
//   profileId String
// }


export const vehicleSchema = z.object({

  price: z.coerce.number().int().min(0, { message: 'Price must be a positive number' }),
  type: z.enum([
    'car',
    'convertible',
    'electric',
    'pickup',
    'sportscar',
    'suv']),
  mileage: z.coerce.number().int().min(0, { message: 'Mileasge must be a positive number' }),
  make: z.string().min(2, { message: 'Make must be at least 2 characters long' }),
  model: z.string().min(1, { message: 'Model must be at least 1 characters long' }),
  year: z.coerce.number().int().min(1900, { message: 'Year must be at least 1900' }),
  doors: z.coerce.number().int().min(1, { message: 'Doors must be at least 1' }),
  seats: z.coerce.number().int().min(2, { message: 'Seats must be at least 2' }),
  gastype: z.enum([
    'gasoline',
    'diesel',
    'electric',
    'hybrid']
  ),
  color: z.string().min(2, { message: 'Color  must be at least 2 characters long' }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(' ').length
      return wordCount >= 10 && wordCount <= 500
    },
    {
      message: 'description must be between 10 and 500 words.',
    }
  ),
})
