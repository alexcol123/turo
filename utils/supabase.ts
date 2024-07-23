import { createClient } from '@supabase/supabase-js'


const bucket = 'turo-bucket'


const url = process.env.SUPABASE_URL as string
const key = process.env.SUPABASE_KEY as string

const supabase = createClient(url, key)

export const uploadImage = async (image: File) => {
  const timestamp = new Date()
  const newName = `${image.name}-${timestamp}`

  const { data, error } = await supabase.storage.from(bucket).upload(newName, image, { cacheControl: '3600' })


  if (!data) {
    throw new Error("Error uploading image")
  }

  if (!error) {
    console.log(error)
  }
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl

}
