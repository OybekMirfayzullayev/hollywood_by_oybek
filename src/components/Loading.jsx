import React from 'react'
import {Riple} from 'react-loading-indicators'

export default function Loading() {

  return (
    <div className='container h-[400px] flex items-center justify-center flex-col'>
        <Riple color="blue" size="large" text="" textColor="" />
        <h1 className="text-[22px] font-semibold">Loading</h1>
    </div>
  )
}
