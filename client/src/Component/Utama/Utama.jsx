import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Card from "../Card/Card";

function Utama() {
  // const [kategori, setKategori] = useState([]);
  const [dataProduk, setDataProduk] = useState([]);
  // const [page, setPage] = useState[1];

  // Untuk ngetes saya coba memakai api blibli untuk menampilkan data produk

  fetch("https://www.blibli.com/backend/search/products?searchTerm=android")
    .then((res) => res.json())
    .then((data) => {
      setDataProduk(data.data.products);
    });

  return (
    <div className="w-[90%] px-4 py-2 mx-auto">
      {/* <button className="tombol  bg-red-400">Coba klik bang</button> */}
      <h1 className="font-semibold text-2xl text-slate-800">Produk Populer</h1>

      <Swiper slidesPerView={3}>
        <SwiperSlide className="m-5">
          <button className="p-3 w-full flex items-center border-2 rounded-xl justify-center hover:bg-green-400">
            <p className="text-slate-800">Handphone dan Tablet</p>
          </button>
        </SwiperSlide>
        <SwiperSlide className="m-5">
          <button className="p-3 w-full flex items-center border-2 rounded-xl justify-center hover:bg-green-400">
            <p className="text-slate-800">Komputer dan Laptop</p>
          </button>
        </SwiperSlide>
        <SwiperSlide className="m-5">
          <button className="p-3 w-full flex items-center border-2 rounded-xl justify-center hover:bg-green-400">
            <p className="text-slate-800">Baju</p>
          </button>
        </SwiperSlide>
        <SwiperSlide className="m-5">
          <button className="p-3 w-full flex items-center border-2 rounded-xl justify-center hover:bg-green-400">
            <p className="text-slate-800">Celana</p>
          </button>
        </SwiperSlide>
        <SwiperSlide className="m-5">
          <button className="p-3 w-full flex items-center border-2 rounded-xl justify-center hover:bg-green-400">
            <p className="text-slate-800">Kaos</p>
          </button>
        </SwiperSlide>
      </Swiper>

      <div className="flex justify-evenly items-center flex-wrap">
        {dataProduk.map((produk) => (
          <Card
            gambar={produk.images[0]}
            namaProduk={produk.name}
            harga={produk.price.priceDisplay}
          />
        ))}
      </div>
    </div>
  );
}

export default Utama;
