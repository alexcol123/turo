import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"

import { GiCarSeat } from "react-icons/gi";
import { GiCarDoor } from "react-icons/gi";
import { IoSpeedometer, IoSpeedometerOutline } from "react-icons/io5";
import { CheckIcon } from "lucide-react"
import Link from "next/link"
import { VehicleCardProps } from "../home/VehicleList"


const VehicleCard = ({ vehicle }: { vehicle: VehicleCardProps }) => {

  const { id, make, model, year, price, image, type, seats, doors, } = vehicle

  return (
    <div >
      <Card className="w-full ">
        <CardHeader>
          <CardTitle> {year} {make} {model}
          </CardTitle>
          <CardDescription>
            <div className="w-full flex justify-between items-center">
              <p className="font-semibold">    Price: ${price}/day</p>
              <p className="capitalize border py-1 px-2 rounded-lg bg-primary text-primary-foreground">  {type}</p>
            </div>
          </CardDescription>

        </CardHeader>
        <CardContent>
          <Image width={500} height={500} alt='vehicle image' src={image} className="object-cover rounded-md" />

          <div className="flex justify-center items-center w-full">
            <ul className="flex justify-center items-center gap-4  bg-muted mt-4 w-fit px-2 rounded-sm">
              <li className="flex items-center justify-center gap-1 "> <GiCarSeat /> {seats}</li>
              <li className="flex items-center justify-center gap-1 "> <GiCarDoor /> {doors}</li>
              <li className="flex items-center justify-center gap-1 "> <IoSpeedometerOutline /> 4.8 s</li>
            </ul>
          </div>
        </CardContent>


        <CardFooter className="flex items-center justify-center gap-2">
          <Button variant={'outline'} className="w-full">
            <CheckIcon className="mr-2 h-4 w-4" /> Book Now
          </Button>
          <Button asChild className="w-full">
            <Link href={`/vehicles/${id}`}  >
              View More
            </Link>
          </Button>
        </CardFooter>
      </Card>

    </div>
  )
}
export default VehicleCard