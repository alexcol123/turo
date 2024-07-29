import { Skeleton } from '../ui/skeleton'

function LoadingTable({ rows }: { rows?: number }) {



  const tableRows = Array.from({ length: rows || 8 }, (_, i) => {
    return (
      <div className='mb-8' key={i}>

        <Skeleton className='w-full h-8 rounded ' />
      </div>
    )
  })
  return <>
    <Skeleton className=' h-5 rounded w-40 mb-4 ' />
    {tableRows}</>
}
export default LoadingTable