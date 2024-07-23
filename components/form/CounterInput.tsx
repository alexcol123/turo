'use client'
import { Card, CardHeader } from '@/components/ui/card'
import { LuMinus, LuPlus } from 'react-icons/lu'

import { Button } from '../ui/button'
import { useState } from 'react'


const CounterInput = ({ name, defaultValue }: { name: string, defaultValue?: number }) => {
  const [count, setcount] = useState(defaultValue || 2)

  const increaseCount = () => {
    setcount((prevCount) => prevCount + 1)
  }

  const decreaseCount = () => {
    setcount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1
      }
      return prevCount
    })
  }

  return (
    <Card>

      {/* Input */}

      <input type="hidden" name={name} value={count} />

      <CardHeader className='flex flex-col gap-y-1'>
        <div className="flex items-center justify-between flex-wrap">
          <div className='flex flex-col'>
            <h2 className='font-medium capitalize'>{name}</h2>
            <p className="text-muted-foreground text-xs">
              Specify the number of {name}
            </p>
          </div>
          <div className="flex items-center gap-4 ">
            <Button onClick={decreaseCount} variant={'outline'} size={'icon'} type='button'>
              <LuMinus className='w-5 h-5 text-primary' />
            </Button>


            <span className='text-xl font-bold w-22 text-center '>{count}</span>

            <Button onClick={increaseCount} variant={'outline'} size={'icon'} type='button'>
              <LuPlus className='w-5 h-5 text-primary' />
            </Button>

          </div>
        </div>
      </CardHeader>

    </Card>
  )
}
export default CounterInput