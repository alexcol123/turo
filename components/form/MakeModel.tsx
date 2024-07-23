'use client'

import { carMakesAndModelsTypes } from "@/app/my-vehicles/create/page"
import FormSelect from "./FormSelect"
import { useEffect, useState } from "react"
import FormSelectMake from "./FormSelectMake"



const MakeModel = ({ list }: { list: carMakesAndModelsTypes[] }) => {


  const [makeSelected, setmakeSelected] = useState('')
  const [carModelList, setcarModelList] = useState([])

  const carMakes = Array.isArray(list) ? list.map(car => {
    return { name: car.make }
  }) : [];


  let carModels = []

  useEffect(() => {
    if (makeSelected !== '') {




      const carModelSelected = list.find(car => car.make === makeSelected)



      let modelList = carModelSelected?.models.map((model) => {
        return { name: model }
      })


      setcarModelList(modelList as [])
    }
  }, [makeSelected, list])


  return (

    <div className="grid md:grid-cols-2 gap-8 mb-4" >
      <FormSelectMake name={'make'} list={carMakes} setmakeSelected={setmakeSelected} />

      {makeSelected !== '' && <FormSelect name={'model'} list={carModelList} />}

    </div>


  )
}
export default MakeModel