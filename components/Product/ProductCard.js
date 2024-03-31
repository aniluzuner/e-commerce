import React from 'react'

export default function ProductCard() {
  const product = {
    id: 1,
    name: 'Gigabyte Aorus Master Nvidia GeForce RTX 4090',
    href: '#',
    price: '99.999 ₺',
    imageSrc: 'Images/Product/1/1.png',
    imageAlt: 'Gigabyte Aorus Master GeForce RTX 4090'
  }

  return (
    <a key={product.id} href={product.href} className="group bg-zinc-950 p-5 rounded-xl">
      <div className="flex overflow-hidden rounded-lg h-56">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="w-full my-auto group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-lg text-gray-400">{product.name}</h3>
      <p className="mt-5 text-3xl font-medium text-gray-400">{product.price}</p>
    </a>
  )
}
