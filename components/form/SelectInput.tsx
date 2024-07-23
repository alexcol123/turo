import { Input } from "../ui/input"
import { Label } from "../ui/label"



type PriceInputProps = {
  defaultValue?: number,
  name: string,
  labelName: string
}

const SelectInput = ({ defaultValue, name , labelName}: PriceInputProps) => {



  return (
    <div className="mb-2 ">
      <Label
        htmlFor={name}
        className="capitalize" >
        {labelName ||name}
      </Label>
      <Input
        type="number"
        id={name}
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        className="mt-1 "
        required />
    </div>
  )
}
export default SelectInput