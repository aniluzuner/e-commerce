import Carousel from '/components/Carousel';
import ProductCard from '/components/Product/ProductCard';

export default function Home() {
  return (
    <>
      <Carousel slides={[
        "Images/carousel-image.jpg",
        "Images/carousel-image.jpg",
        "Images/carousel-image.jpg",
        "Images/carousel-image.jpg"]} />
      
      <h1 className="text-center text-5xl font-bold mt-10">PRODUCTS</h1>
      <div className="grid p-10 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      
    </>
    
  )
}
