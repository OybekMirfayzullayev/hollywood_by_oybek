import React from 'react'
import {Riple} from 'react-loading-indicators'

export default function Loading() {

  return (
    <div className='h-[480px] flex items-center justify-center flex-col dark:bg-gray-900'>
        <Riple color="blue"  size="large" text="" textColor="" />
        <h1 className="text-[22px] font-semibold dark:text-white">Loading</h1>
    </div>
  )
}
