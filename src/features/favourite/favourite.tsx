"use client "
import React from 'react'
import { useStore } from 'zustand'

export const Favourite = () => {
  
 
  return (
    <div className='min-h-screen bg-white px-4 py-12'>

      <h1 className='flex text-3xl font-bold justify-center text-gray-800 mb-10'>Favourites</h1>
      <div className='flex flex-col  gap-4 bg-gray-100  py-10 px-8  text-gray-600 bg-center rounded-lg shadow-md'>
        <h1 className='text-xl font-semibold text-black'>Favourites</h1>
        
          <p>Not favourites yet.</p>
        
      </div>


    </div>

  )
}


