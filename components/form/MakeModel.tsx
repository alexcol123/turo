'use client'


import FormSelect from "./FormSelect"
import { useEffect, useState } from "react"
import FormSelectMake from "./FormSelectMake"
import { carMakesAndModelsTypes } from "@/utils/types"



const MakeModel = ({ list, defaultMake, defaultModel }: { list: carMakesAndModelsTypes[], defaultMake?: string, defaultModel: string }) => {


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


useEffect(() => {
  if (defaultMake && defaultMake !== '') {
    setmakeSelected(defaultMake)
  }
}, [defaultMake])


  
  return (

    <div className="grid md:grid-cols-2 gap-8 mb-4" >
      <FormSelectMake name={'make'} list={carMakes} setmakeSelected={setmakeSelected} defaultMake={defaultMake} />

      {makeSelected !== '' && <FormSelect name={'model'} list={carModelList} defaultValue={defaultModel} />}

    </div>


  )
}
export default MakeModel