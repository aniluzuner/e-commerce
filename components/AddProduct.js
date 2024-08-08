"use client";
import React, { useState } from 'react';

export default function AddProduct() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [brandId, setBrandId] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [subCategoryId, setSubCategoryId] = useState(0);
  const [userId, setUserId] = useState(0);
  const [detail, setDetail] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    const product = {
      productName,
      price,
      stock,
    };

    // Ürünü API'ye veya veritabanına gönderin
    console.log('Ürün gönderildi:', product);
  };

  const [selectedImages, setSelectedImages] = useState([null, null, null]);

  const handleImageChange = (index, event) => {
    const newImages = [...selectedImages];
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.type.startsWith('image/')) {
        newImages[index] = file;
      }
    } else {
      newImages[index] = null;
    }
    setSelectedImages(newImages);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-5">
      <div>
        <h1 className="text-center text-3xl font-bold my-5">Product Images</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          {selectedImages.map((image, index) => (
            <div key={index} className="p-5">
              {image ? (
                <img src={URL.createObjectURL(image)} alt="Görsel" />
              ) : (
                <input type="file" onChange={(event) => handleImageChange(index, event)} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 lg:px-20">
        <h1 className="text-center text-3xl font-bold my-5">Product Information</h1>

        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <div className="mb-4">
            <label htmlFor="productName" className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Product Title:</label>
            <input type="text" id="productName" value={name} onChange={(event) => setProductName(event.target.value)} className="bg-zinc-900 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          <div className="grid grid-cols-2 mb-10 gap-4">
            <div>
              <label htmlFor="price" className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Price:</label>
              <input type="number" id="price" value={price} onChange={(event) => setPrice(event.target.value)} className="bg-zinc-900 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>

            <div>
              <label htmlFor="stock" className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Stock:</label>
              <input type="number" id="stock" value={stock} onChange={(event) => setStock(event.target.value)} className="bg-zinc-900 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
          </div>

          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-bold text-lg rounded-lg px-5 py-2 text-center dark:bg-zinc-900 dark:hover:bg-zinc-700">Add Product</button>
        </form>
        </div>
    </div>
    
  );
};
