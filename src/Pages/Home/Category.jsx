import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import CmnTitle from "../../components/CmnTitle";

const Category = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 px-2">
      <CmnTitle
        subtitle="---From 11:00am to 10:00pm---"
        title="ORDER ONLINE"
      ></CmnTitle>

      <div className="pt-6">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <img
              src={slide1}
              className="w-full h-[400px] object-cover md:h-auto"
            />
            <h1 className="text-xl font-medium -mt-26 text-white text-center uppercase text-shadow-md">
              Salads
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide2}
              className="w-full h-[400px] object-cover md:h-auto"
            />
            <h1 className="text-xl font-medium -mt-26 text-white text-center uppercase text-shadow-md">
              Pizza
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide3}
              className="w-full h-[400px] object-cover md:h-auto"
            />
            <h1 className="text-xl font-medium -mt-26 text-white text-center uppercase text-shadow-md">
              Soup
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide4}
              className="w-full h-[400px] object-cover md:h-auto"
            />
            <h1 className="text-xl font-medium -mt-26 text-white text-center uppercase text-shadow-md">
              Pestry
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide5}
              className="w-full h-[400px] object-cover md:h-auto"
            />
            <h1 className="text-xl font-medium -mt-26 text-white text-center uppercase text-shadow-md">
              Salads
            </h1>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
