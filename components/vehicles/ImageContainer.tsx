import Image from "next/image"

const ImageContainer = ({image, listingName}:{image:string, listingName: string}) => {
  return (
    <section className="h-[400px] md:h-[600px] relative mt-8  " >
    <Image src={image} fill sizes='100vw' alt={listingName} className="object-cover rounded-md   " priority />

  </section>
  )
}
export default ImageContainer