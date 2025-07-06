import { useEffect, useState } from "react";
import CmnTitle from "../../components/CmnTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-10 px-2">
        <CmnTitle
          subtitle="-- What our clients say --"
          title="TESTIMONAILS"
        ></CmnTitle>

        <div className="max-w-5xl mx-auto mt-10">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {review.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="px-5 md:px-20 text-center flex flex-col gap-5 items-center">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={item.rating}
                    readOnly
                  />
                  <p className="text-base font-normal">{item.details}</p>
                  <h1 className="text-2xl sm:text-3xl font-semibold text-[#CD9003]">
                    {item.name}
                  </h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
