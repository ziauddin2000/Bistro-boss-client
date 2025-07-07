import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import MenuBg from "../../assets/menu/banner3.jpg";
import DessertBg from "../../assets/menu/dessert-bg.jpeg";
import PizzaBg from "../../assets/menu/pizza-bg.jpg";
import SaladBg from "../../assets/menu/salad-bg.jpg";
import SoupBg from "../../assets/menu/soup-bg.jpg";
import Menucategory from "./Menucategory";
import useMenu from "../../hooks/useMenu";
import CmnTitle from "../../components/CmnTitle";

const Menu = () => {
  let { menus } = useMenu();
  let offereds = menus.filter((item) => item.category == "offered");
  let desserts = menus.filter((item) => item.category == "dessert");
  let pizzas = menus.filter((item) => item.category == "pizza");
  let salads = menus.filter((item) => item.category == "salad");
  let soups = menus.filter((item) => item.category == "soup");

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Cover */}
      <Cover
        img={MenuBg}
        title="Our Menu"
        subtitle="Would you like to try a dish?"
      ></Cover>
      <div className="max-w-screen-xl mx-auto px-2 py-10">
        {/* Offered */}
        <CmnTitle subtitle="Don't miss" title="Todays Offer"></CmnTitle>
        <Menucategory
          items={offereds}
          btnTitle="Order Your Favourite Food"
          buttonLink="/order/salad"
        ></Menucategory>

        {/* Dessert */}
        <Menucategory
          img={DessertBg}
          title="Desserts"
          subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. A animi ducimus eos voluptas veritatis"
          items={desserts}
          btnTitle="Order Your Favourite Food"
          buttonLink="/order/dessert"
        ></Menucategory>

        {/* Pizza */}
        <Menucategory
          img={PizzaBg}
          title="Pizza"
          subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. A animi ducimus eos voluptas veritatis"
          items={pizzas}
          btnTitle="Order Your Favourite Food"
          buttonLink="/order/pizza"
        ></Menucategory>

        {/* Salad */}
        <Menucategory
          img={SaladBg}
          title="Salad"
          subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. A animi ducimus eos voluptas veritatis"
          items={salads}
          btnTitle="Order Your Favourite Food"
          buttonLink="/order/salad"
        ></Menucategory>

        {/* Soup */}
        <Menucategory
          img={SoupBg}
          title="Soup"
          subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. A animi ducimus eos voluptas veritatis"
          items={soups}
          btnTitle="Order Your Favourite Food"
          buttonLink="/order/soup"
        ></Menucategory>
      </div>
    </>
  );
};

export default Menu;
