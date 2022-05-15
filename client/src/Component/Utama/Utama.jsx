import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Card from "../Card/Card";

function Utama() {
  const [kategori, setKategori] = useState([]);

  // fetch("https://fakestoreapi.com/products/categories")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setKategori(data);
  //   });

  return (
    <div className="w-[90%] px-4 py-2 mx-auto">
      <h1 className="font-semibold text-2xl text-slate-800">Produk Populer</h1>

      <Swiper slidesPerView={3}>
        <SwiperSlide className="m-5">
          <div className="p-3 w-full flex items-center border-2 rounded-xl justify-center hover:bg-green-400">
            <p className="text-slate-800">Handphone dan Tablet</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="m-5">
          <div className="p-3 w-full flex items-center border-2 rounded-xl justify-center hover:bg-green-400">
            <p className="text-slate-800">Komputer dan Laptop</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="m-5">
          <div className="p-3 w-full flex items-center border-2 rounded-xl justify-center hover:bg-green-400">
            <p className="text-slate-800">Baju</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="m-5">
          <div className="p-3 w-full flex items-center border-2 rounded-xl justify-center hover:bg-green-400">
            <p className="text-slate-800">Celana</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="m-5">
          <div className="p-3 w-full flex items-center border-2 rounded-xl justify-center hover:bg-green-400">
            <p className="text-slate-800">Kaos</p>
          </div>
        </SwiperSlide>
      </Swiper>

      <Card />
    </div>
  );
}

export default Utama;
