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
      
      <h1 className="text-center text-5xl font-bold mt-10">HAFTANIN ÜRÜNLERİ</h1>
      <div className="grid p-10 grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 xl:gap-x-8">
        <ProductCard id="4" name="Amd Ryzen 5 8600G 4.3GHz 16MB 6 Çekirdek AM5 İşlemci" price={9999} />
        <ProductCard id="6" name="Intel Core i3 14100 3.5GHz 12MB 4 Çekirdek Soket 1700 İşlemci" price={6499} />
        <ProductCard id="8" name="Asus Prime B650M-A DDR5 AM5 Anakart" price={6999} />
        <ProductCard id="10" name="Corsair Vengeance 16GB (2x8) 5200MHz CL40 DDR5 Ram" price={2499} />
        <ProductCard id="12" name="Gigabyte Windforce RTX 4060 Ti 16GB GDDR6 128 Bit Ekran Kartı" price={22499} />
        <ProductCard id="14" name="Asus Rog Strix RX 7600 8GB GDDR6 128 Bit Ekran Kartı" price={10999} />
        <ProductCard id="16" name="Kingston NV2 500GB M.2 (3500MB Okuma / 2100MB Yazma) SSD" price={1999} />
        <ProductCard id="18" name="Corsair CX750 750W 80+ Bronze Güç Kaynağı" price={2999} />
        <ProductCard id="20" name="Asus Rog Chakram X Origin RGB Mouse" price={4999} />
        <ProductCard id="22" name="Corsair Virtuoso Pro Kulaklık" price={5999} />
      </div>
      
    </>
    
  )
}
