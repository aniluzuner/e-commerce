"use client";
import {useEffect, useState} from 'react';
import { useSearchParams } from 'next/navigation'
import axios from 'axios';
import ProductCard from '/components/Product/ProductCard';

export default function Products () {
  const searchParams = useSearchParams();
  const categoryid = searchParams.get('categoryid');

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
    if (categoryid != 0){
      const filter = products.filter(p => p.categoryId == categoryid).map(p => {
        return {
          id: p.id,
          name: p.name,
          price: p.price
        };
      });
      setFilteredProducts(filter);
    }
    else{
      setFilteredProducts(products);
    }
    
  }, [products]);

  return (
    <div>
      <div className="grid p-10 grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 xl:gap-x-8">
        {filteredProducts && filteredProducts.map(p => (

          <ProductCard key={p.id} id={p.id} name={p.name} price={p.price} />
        ))}
      </div>
    </div>
  )
}