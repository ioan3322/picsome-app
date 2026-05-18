"use client"
import React from 'react'
import Masonry from 'react-masonry-css'
import { useStore } from '../../store'
import { ImageComponent } from '../images/image-component'

export const Cart = () => {
  const cart = useStore((state) => state.cart)
  const removeFromCart = useStore((state) => state.removeFromCart)

  return (
    <div className="min-h-screen bg-white px-4 py-12 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 px-4">Shopping Cart</h1>

      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        {cart.length === 0 ? (
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Cart</h2>
            <p className="text-gray-600">Your cart is empty.</p>
          </div>
        ) : (
          cart.map((photo) => (
            <div key={photo.id} className="flex items-center bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0 w-36 h-24 overflow-hidden rounded">
                <img  src={photo.src.medium} alt={photo.alt || photo.photographer} className="w-full h-full object-cover hover:scale-105 transition-transform" />
              </div>

              <div className="flex-1 px-4">
                <div className="text-gray-800 font-semibold">{photo.alt || 'No description'}</div>
                <div className="text-sm text-gray-500 mt-1">{photo.width} x {photo.height}px</div>
              </div>

              <div className="w-40 text-right">
                <div className="text-sm font-medium text-gray-800">{photo.photographer}</div>
                <div >
                  <button onClick={() => removeFromCart(photo.id)} className=' px-2 py-2 text-right text-xs border-sm border-white/20 bg-gray-100 px-4 py-2 text-black font-bold shadow-lg backdrop-blur-md backdrop-saturate-100 rounded-3xl hover:bg-black/20 transition '>Remove</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <button onClick={() => console.log('Checkout')}
        className="fixed right-6 bottom-6 z-50 text-center text-md bg-black text-white px-5 py-3 font-bold rounded-full shadow-2xl hover:scale-105 transition-transform">
        Checkout
      </button>
    </div>
  )
}