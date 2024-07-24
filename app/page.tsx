import LoadingCards from "@/components/card/LoadingCards";
import VehicleCard from "@/components/card/VehicleCard";
import CategoriesList from "@/components/home/CategoriesList";
import VehiclesContainer from "@/components/home/VehiclesContainer";

import { Suspense } from "react"

export type SearchParams = {
  type?: string
  search?: string
}



export default function Home({ searchParams }: { searchParams: SearchParams }) {
  return (
    <section>

      <CategoriesList type={searchParams.type} search={searchParams.search} />

      <Suspense fallback={<LoadingCards />}>
        <VehiclesContainer type={searchParams.type} search={searchParams.search} />
      </Suspense>

    </section>


  );
}
