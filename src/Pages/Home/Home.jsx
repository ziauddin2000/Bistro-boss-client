import Category from "./Category";
import Banner from "./components/Banner";
import Featured from "./Featured";
import PopularItem from "./PopularItem";
import Testimonial from "./Testimonial";

import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home </title>
      </Helmet>
      <div>
        <Banner></Banner>
        <Category></Category>
        <PopularItem></PopularItem>
        <Featured></Featured>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
