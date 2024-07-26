
import { IoCarSportOutline } from "react-icons/io5";
import { IoCarSport } from "react-icons/io5";
import { Button } from "../ui/button"
import Link from "next/link";
const Logo = () => {
  return (

    <Button size={'default'} asChild >
      <Link href='/' className="flex  items-center justify-center gap-2">

        <p className=" tracking-wider text-lg "> TURO</p>

        <IoCarSport size={23} />

      </Link>

    </Button>
  )
}
export default Logo