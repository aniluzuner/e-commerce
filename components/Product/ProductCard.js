import React from 'react'

export default function ProductCard({ id, name, price }) {
  return (
    <a key={id} href={"/Product/" + id} className="group bg-zinc-950 p-5 rounded-xl">
      <div className="flex overflow-hidden rounded-lg">
        <img
          src={"/Images/Product/" + id + "/1.jpg"}
          alt={id}
          className="w-full my-auto group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-lg text-gray-400">{name}</h3>
      <p className="mt-5 text-3xl font-medium text-gray-400">{price} ₺</p>
    </a>
  )
}
