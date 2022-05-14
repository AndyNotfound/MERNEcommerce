import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import gambar1 from "../img/1.jpeg";
import gambar2 from "../img/2.jpeg";
import gambar3 from "../img/3.jpeg";
import gambar4 from "../img/4.jpeg";
import gambar5 from "../img/5.jpeg";

function Pengumuman() {
  return (
    <div className="w-screen ">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-blue-400 p-5 m-3 ">
            <Swiper
              className="h-52 w-52 "
              effect={"cards"}
              grapCursor={true}
              modules={[EffectCards]}
            >
              <SwiperSlide className="flex content-center items-center ">
                <div className="bg-blue-200 h-full w-full">
                  <h1>hello world</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex content-center items-center ">
                <div className="bg-blue-200 h-full w-full">
                  <h1>hello world</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex content-center items-center ">
                <div className="bg-blue-200 h-full w-full">
                  <h1>hello world</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className="flex content-center items-center ">
                <div className="bg-blue-200 h-full w-full">
                  <h1>hello world</h1>
                </div>
              </SwiperSlide>
            </Swiper>
            <h1>HELLO WORLD</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Pengumuman;
