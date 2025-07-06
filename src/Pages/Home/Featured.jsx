import CmnTitle from "../../components/CmnTitle";
import "./featured.css";

import featuredImg from "../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="featured-section py-10 px-2">
      <div className="max-w-screen-xl mx-auto">
        <CmnTitle
          subtitle="-- Check Out Our --"
          title="FEATURED PRODUCT"
        ></CmnTitle>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={featuredImg}
              className="rounded-md w-full"
              alt="Featured Img"
            />
          </div>
          <div className="text-white">
            <h4 className="text-2xl font-semibold mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos, porro!
            </h4>
            <p className="text-base mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              illo eum impedit vel et similique eos dignissimos minus debitis
              harum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore illo eum impedit vel et similique eos dignissimos minus
              debitis harum. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Inventore illo eum impedit vel et similique eos dignissimos
              minus debitis harum.
            </p>
            <a href="#" className="btn btn-outline border-0 border-b-2">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
