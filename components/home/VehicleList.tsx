import VehicleCard from "../card/VehicleCard"

export type VehicleCardProps = {
  id: string
  make: string
  model: string,
  year: number,
  price: number,
  image: string,
  type: string,
  seats: number,
  doors: number,
}




const VehicleList = ({ vehicles }: { vehicles: VehicleCardProps[] }) => {


  return (
    <section className='mt-4 gap-8 grid sm:grid-cols-1  md:grid-cols-2  xl:grid-cols-3'>

      {vehicles.map((vehicle) => {
        return <VehicleCard key={vehicle.id} vehicle={vehicle} />
      })}


    </section>
  )
}
export default VehicleList