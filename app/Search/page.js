"use client";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import ProductCard from '/components/Product/ProductCard';

export default function Products() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search');

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredProducts(products);
      return;
    }

    const filteredProducts = products.filter(product => {
      const lowerSearchTerm = searchTerm.toLowerCase();
      const lowerProductName = product.name.toLowerCase();
      return lowerProductName.includes(lowerSearchTerm);
    });

    setFilteredProducts(filteredProducts);
  }, [products, searchTerm]);

  return (
    <div>
      <div className="grid p-10 grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 xl:gap-x-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} />
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}