import { type SearchParams } from "@/app/page"


import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { vehicletype } from "@/utils/arrayLists"
import Image from "next/image"
import Link from 'next/link'

const CategoriesList = ({ type, search }: SearchParams) => {

  const searchTerm = search ? `&search=${search}` : ''

  return (

    <section>
      <ScrollArea className='py-8'>
        <div className='flex gap-x-4 rounded-md'>
          {vehicletype.map((item) => {
            const isActive = item.name === type
            return (
              <Link
                key={item.name}
                href={`/?type=${item.name}${searchTerm}`}
              >
                <article className='relative p-3 flex flex-col items-center cursor-pointer duration-300   w-[260px] select-none'>

                  <div className={`absolute capitalize text-sm  border  top-0 bottom-0  transition left-0 right-0  bg-black/60   rounded-md px-2 hover:bg-black/40  ${isActive ? ' border-primary' : 'border-primary-foreground'}`}>

                    <div className="flex items-center justify-center h-full w-full text-lg font-bold">
                      <p className={`absolute top-5 px-2  rounded-sm ${isActive ? 'bg-primary text-primary-foreground' : 'bg-primary-foreground text-primary'} `}>{item.name}</p>
                    </div>
                  </div>

                  <Image width={500} height={500} src={`/${item.name}.webp`} alt={item.name} className="object-cover rounded-md  " />
                </article>

              </Link>
            )
          })}
        </div>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </section>
  )
}
export default CategoriesList