import Navbar from '/components/navbar';
import Carousel from '/components/carousel';

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel slides={[
        "Images/carousel-image.jpg",
        "Images/carousel-image.jpg",
        "Images/carousel-image.jpg"]} />
    </>
    
  )
}
