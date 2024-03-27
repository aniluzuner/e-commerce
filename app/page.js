import Navbar from '/components/Navbar';
import Carousel from '/components/Carousel';
import Login from '/components/Login';

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel slides={[
        "Images/carousel-image.jpg",
        "Images/carousel-image.jpg",
        "Images/carousel-image.jpg",
        "Images/carousel-image.jpg"]} />
      <Login />
    </>
    
  )
}
