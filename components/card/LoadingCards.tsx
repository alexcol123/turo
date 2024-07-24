import { Skeleton } from "../ui/skeleton"

const LoadingCards = () => {
  return (
    <div className='mt-4 gap-8 grid sm:grid-cols-1  md:grid-cols-2  xl:grid-cols-3'>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  )
}

export function SkeletonCard() {
  return (
    <div className="border p-4">
      <Skeleton className='h-8 mt-2 w-1/3' />
      <Skeleton className='h-4 mt-2 w-1/2' />
      <Skeleton className='h-[240px] rounded-md mt-2' />
      <Skeleton className='h-4 mt-2 w-1/2 mx-auto mb-3' />

      <div className=" flex items-center justify-around gap-8">
        <Skeleton className='h-8 mt-2 w-1/2' />
        <Skeleton className='h-8 mt-2 w-1/2 ' />
      </div>

    </div>
  )
}

export default LoadingCards