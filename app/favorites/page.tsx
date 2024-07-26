import EmptyList from "@/components/home/EmptyList"
import VehicleList from "@/components/home/VehicleList"

import { fetchFavorites } from "@/utils/actions"
import { redirect } from "next/navigation"

const FavoritesPage = async () => {

  const favorites = await fetchFavorites()

  if (!favorites.length) { return <EmptyList /> }

  return (

    <VehicleList vehicles={favorites} />
  )
}
export default FavoritesPage