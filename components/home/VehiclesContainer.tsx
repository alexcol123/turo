import { SearchParams } from "@/app/page"
import { fetchVehicles } from "@/utils/actions"
import EmptyList from "./EmptyList"
import VehicleCard from "../card/VehicleCard"
import VehicleList from "./VehicleList"

const VehiclesContainer = async ({ type, search }: SearchParams) => {

  const vehicles = await fetchVehicles({ type, search })
  
  if (vehicles.length === 0) {
    return (
      <EmptyList
        heading='No results.'
        message='Try changing or removing some of your filters.'
        btnText='Clear Filters'
      />
    )
  }

  return (
    <VehicleList vehicles={vehicles} />
  )
}
export default VehiclesContainer