const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const productsRouter = require('./routes/products');
app.use('/products', productsRouter);

const brandsRouter = require('./routes/brands');
app.use('/brands', brandsRouter);

const categoriesRouter = require('./routes/categories');
app.use('/categories', categoriesRouter);

const subCategoriesRouter = require('./routes/subcategories');
app.use('/subcategories', subCategoriesRouter);

const ordersRouter = require('./routes/orders');
app.use('/orders', ordersRouter);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});






/*

const postData = [
  {
    id: 1,
    name: "Worzeg Model X",
    price: 19999,
    stock: 500,
    brandId: 3,
    categoryId: 3,
    subCategoryId: 12,
    userId: "665d4bfd5699b249c498ff82",
    detail: "Worzeg Model X Hazır Sistem"
  },
  {
    id: 2,
    name: "Worzeg Model S",
    price: 21999,
    stock: 500,
    brandId: 3,
    categoryId: 3,
    subCategoryId: 12,
    userId: "665d4bfd5699b249c498ff82",
    detail: "Worzeg Model S Hazır Sistem"
  },
  {
    id: 3,
    name: "Worzeg Model Y",
    price: 24999,
    stock: 500,
    brandId: 3,
    categoryId: 3,
    subCategoryId: 12,
    userId: "665d4bfd5699b249c498ff82",
    detail: "Worzeg Model Y Hazır Sistem"
  },
  {
    id: 4,
    name: "Amd Ryzen 5 8600G 4.3GHz 16MB 6 Çekirdek AM5 İşlemci",
    price: 9999,
    stock: 500,
    brandId: 1,
    categoryId: 1,
    subCategoryId: 1,
    userId: "665d4bfd5699b249c498ff82",
    detail: "İşlemci Soket Tipi AM5 <br>İşlemci Modeli Ryzen 5 8600G <br>İşlemci Serisi Ryzen 5 <br>Çekirdek Sayısı 6 Çekirdek <br>L3 Önbellek 16MB"
  },
  {
    id: 5,
    name: "Amd Ryzen 7 8700G 4.2GHz 16MB 8 Çekirdek AM5 İşlemci",
    price: 14999,
    stock: 500,
    brandId: 1,
    categoryId: 1,
    subCategoryId: 1,
    userId: "665d4bfd5699b249c498ff82",
    detail: "İşlemci Soket Tipi AM5 <br>İşlemci Modeli Ryzen 7 8700G <br>İşlemci Serisi Ryzen 7 <br>Çekirdek Sayısı 8 Çekirdek <br>L3 Önbellek 16MB <br>"
  },
  {
    id: 6,
    name: "Intel Core i3 14100 3.5GHz 12MB 4 Çekirdek Soket 1700 İşlemci",
    price: 6499,
    stock: 500,
    brandId: 2,
    categoryId: 1,
    subCategoryId: 1,
    userId: "665d4bfd5699b249c498ff82",
    detail: "İşlemci Soket Tipi 1700 <br>İşlemci Modeli i3 14100 <br>İşlemci Serisi	Core i3 <br>Çekirdek Sayısı 4 Çekirdek <br>L3 Önbellek 12MB <br>"
  },
  {
    id: 7,
    name: "Intel Core i5 14400 2.5GHz 20MB 10 Çekirdek Soket 1700 İşlemci",
    price: 9999,
    stock: 500,
    brandId: 2,
    categoryId: 1,
    subCategoryId: 1,
    userId: "665d4bfd5699b249c498ff82",
    detail: "İşlemci Soket Tipi 1700 <br>İşlemci Modeli i5 14400 <br>İşlemci Serisi Core i5 <br>Çekirdek Sayısı 10 Çekirdek <br>L3 Önbellek 20MB"
  },
  {
    id: 8,
    name: "Asus Prime B650M-A DDR5 AM5 Anakart",
    price: 6999,
    stock: 500,
    brandId: 3,
    categoryId: 1,
    subCategoryId: 2,
    userId: "665d4bfd5699b249c498ff82",
    detail: "İşlemci Soket Tipi AM5 <br>Uyumlu İşlemciler Ryzen 9 ,7, 5, 3 (Soket AM5) <br>Ram Tipi DDR5 <br>Anakart Boyut Micro ATX"
  },
  {
    id: 9,
    name: "Msi Pro Z790-S DDR5 Soket 1700 Anakart",
    price: 6999,
    stock: 500,
    brandId: 4,
    categoryId: 1,
    subCategoryId: 2,
    userId: "665d4bfd5699b249c498ff82",
    detail: "İşlemci Soket Tipi 1700 <br>Uyumlu İşlemciler Core i3, i5, i7, i9 Serisi İşlemciler (Soket 1700) <br>Ram Tipi DDR5 <br>Anakart Boyut ATX <br>"
  },
  {
    id: 10,
    name: "Corsair Vengeance 16GB (2x8) 5200MHz CL40 DDR5 Ram",
    price: 2499,
    stock: 500,
    brandId: 7,
    categoryId: 1,
    subCategoryId: 3,
    userId: "665d4bfd5699b249c498ff82",
    detail: "Ram Tipi DDR5 <br>Ram Kapasitesi 16GB <br>Ram Frekans Hızı 5200 MHz"
  },
  {
    id: 11,
    name: "Kingston Fury Beast 16GB (2x8) 5600MHz CL40 DDR5 Ram",
    price: 2499,
    stock: 500,
    brandId: 6,
    categoryId: 1,
    subCategoryId: 3,
    userId: "665d4bfd5699b249c498ff82",
    detail: "Ram Tipi DDR5 <br>Ram Kapasitesi 16GB <br>Ram Frekans Hızı 5600 MHz"
  },
  {
    id: 12,
    name: "Gigabyte Windforce RTX 4060 Ti 16GB GDDR6 128 Bit Ekran Kartı",
    price: 22499,
    stock: 500,
    brandId: 5,
    categoryId: 1,
    subCategoryId: 4,
    userId: "665d4bfd5699b249c498ff82",
    detail: "GPU Üreticisi NVIDIA <br>GPU Model GeForce RTX 4060 Ti <br>GPU Bellek Kapasitesi 16GB <br>Bellek Tipi GDDR6"
  },
  {
    id: 13,
    name: "Msi Ventus RTX 4080 16GB GDDR6X 256 Bit Ekran Kartı",
    price: 51999,
    stock: 500,
    brandId: 4,
    categoryId: 1,
    subCategoryId: 4,
    userId: "665d4bfd5699b249c498ff82",
    detail: "GPU Üreticisi NVIDIA <br>GPU Model GeForce RTX 4080 <br>GPU Bellek Kapasitesi 16GB <br>Bellek Tipi GDDR6X"
  },
  {
    id: 14,
    name: "Asus Rog Strix RX 7600 8GB GDDR6 128 Bit Ekran Kartı",
    price: 10999,
    stock: 500,
    brandId: 3,
    categoryId: 1,
    subCategoryId: 4,
    userId: "665d4bfd5699b249c498ff82",
    detail: "GPU Üreticisi AMD <br>GPU Model Radeon RX 7600 <br>GPU Bellek Kapasitesi 8GB <br>Bellek Tipi GDDR6"
  },
  {
    id: 15,
    name: "Corsair MP600 PRO 1TB M.2 (7000MB Okuma / 5700MB Yazma) SSD",
    price: 3499,
    stock: 500,
    brandId: 7,
    categoryId: 1,
    subCategoryId: 5,
    userId: "665d4bfd5699b249c498ff82",
    detail: "Kapasite 1TB <br>Max Okuma Hızı 7000 MBps <br>Max Yazma Hızı 5700 MBps <br>Bağlantı Arayüz PCI-Express 4.0 x4"
  },
  {
    id: 16,
    name: "Kingston NV2 500GB M.2 (3500MB Okuma / 2100MB Yazma) SSD",
    price: 1999,
    stock: 500,
    brandId: 6,
    categoryId: 1,
    subCategoryId: 5,
    userId: "665d4bfd5699b249c498ff82",
    detail: "Kapasite 500GB <br>Max Okuma Hızı 3500 MBps <br>Max Yazma Hızı 2100 MBps <br>SSD Tipi M.2 2280 <br>Bağlantı Arayüz PCI Express x4"
  },
  {
    id: 17,
    name: "Corsair iCUE 3000D ATX Mid Tower Kasa",
    price: 3499,
    stock: 500,
    brandId: 7,
    categoryId: 1,
    subCategoryId: 6,
    userId: "665d4bfd5699b249c498ff82",
    detail: "Kasa Tipi	ATX Mid Tower <br>PSU Konumu Aşağıda <br>PSU	Yok"
  },
  {
    id: 18,
    name: "Corsair CX750 750W 80+ Bronze Güç Kaynağı",
    price: 2999,
    stock: 500,
    brandId: 7,
    categoryId: 1,
    subCategoryId: 7,
    userId: "665d4bfd5699b249c498ff82",
    detail: "Güç 750W <br>Güç Verimliliği 80+ Bronze <br>PSU Tip ATX12V <br>PCI-E Bağlantısı 6+2-Pin x 2"
  },
  {
    id: 19,
    name: "Gigabyte GS27FC 180Hz 1ms VA Curved Monitör",
    price: 4999,
    stock: 500,
    brandId: 5,
    categoryId: 2,
    subCategoryId: 8,
    userId: "665d4bfd5699b249c498ff82",
    detail: "Ekran Boyutu 27 <br>Panel VA <br>Monitör Çözünürlük 1920 x 1080 <br>Tazeleme Hızı	180 Hz <br>Tepkime Süresi 1ms"
  },
  {
    id: 20,
    name: "Asus Rog Chakram X Origin RGB Mouse",
    price: 4999,
    stock: 500,
    brandId: 3,
    categoryId: 2,
    subCategoryId: 9,
    userId: "665d4bfd5699b249c498ff82",
    detail: "Bağlantı Tipi Kablolu <br>İzleme Tipi Optik <br>Tuş Sayısı 11 <br>Max DPI	36000 DPI"
  },
  {
    id: 21,
    name: "Msi Vigor GK30 Mekanik Hisli Klavye",
    price: 2499,
    stock: 500,
    brandId: 4,
    categoryId: 2,
    subCategoryId: 10,
    userId: "665d4bfd5699b249c498ff82",
    detail: "Bağlantı Tipi Kablolu <br>İzleme Tipi Optik <br>Tuş Sayısı 11 <br>Max DPI	36000 DPI"
  },
  {
    id: 22,
    name: "Corsair Virtuoso Pro Kulaklık",
    price: 5999,
    stock: 500,
    brandId: 7,
    categoryId: 2,
    subCategoryId: 11,
    userId: "665d4bfd5699b249c498ff82",
    detail: "Bağlantı Tipi Kablolu <br>Mikrofon	Var <br>Bağlantı Girişi	3.5mm"
  },
  {
    id: 23,
    name: "Msi Sword 17 i7-14700HX 32GB RTX4050 1TB SSD 165Hz Notebook",
    price: 59999,
    stock: 500,
    brandId: 4,
    categoryId: 4,
    subCategoryId: 14,
    userId: "665d4bfd5699b249c498ff82",
    detail: "Ekran Boyutu 17 <br>Notebook İşlemci Modeli Core i9 14700HX <br>GPU Model GeForce RTX 4050 <br>Ram Kapasitesi 32GB"
  },
  {
    id: 24,
    name: "Microsoft Xbox Series S 512GB Oyun Konsolu",
    price: 19999,
    stock: 500,
    brandId: 9,
    categoryId: 5,
    subCategoryId: 17,
    userId: "665d4bfd5699b249c498ff82",
    detail: "Microsoft Xbox Series S <br>512GB Oyun Konsolu"
  },
  {
    id: 25,
    name: "Sony PlayStation 5 2TB Oyun Konsolu",
    price: 22499,
    stock: 500,
    brandId: 8,
    categoryId: 5,
    subCategoryId: 16,
    userId: "665d4bfd5699b249c498ff82",
    detail: "Microsoft Xbox Series S <br>512GB Oyun Konsolu"
  }  
];

postData.forEach(product => {
  fetch('http://localhost:5000/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('New Product:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
  



const postData = {
  username: "aniluzuner",
  password: "12345"
};

fetch('http://localhost:5000/users/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(postData)
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log('New User:', data);
})
.catch(error => {
  console.error('Error:', error);
});


const postData = {
  id: 123,
  name: "New Item",
  price: 99.99,
  stock: 10,
  brandId: 1,
  categoryId: 2,
  subCategoryId: 3,
  userId: 1,
  detail: "New Item Detail"
};

fetch('http://localhost:5000/products/addProduct', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(postData)
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log('Response:', data);
})
.catch(error => {
  console.error('Error:', error);
});
*/
