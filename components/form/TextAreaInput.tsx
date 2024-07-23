import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type TextAreaInputProps = {
  name: string
  labelText?: string
  defaultValue?: string
}

function TextAreaInput({ name, labelText, defaultValue }: TextAreaInputProps) {

  const tempDefaultDescription =
  'Experience the thrill of driving the iconic 2024 Corvette, a masterpiece of engineering and design. This sleek and powerful sports car combines cutting-edge technology with unparalleled performance, making every drive an unforgettable adventure.'

  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue || tempDefaultDescription}
        rows={5}
        required
        className='leading-loose mt-1'
      />
    </div>
  )
}


export default TextAreaInput



