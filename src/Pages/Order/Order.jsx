import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import OrderBg from "../../assets/order/banner2.jpg";
import { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import useMenu from "../../hooks/useMenu";
import { useParams } from "react-router-dom";

const Order = () => {
  let categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  let { category } = useParams();
  if (category === undefined) {
    category = "salad";
  }
  let initialIndex = categories.indexOf(category);
  const [tabs, setTabs] = useState(initialIndex);

  let { menus } = useMenu();
  let desserts = menus.filter((item) => item.category == "dessert");
  let pizzas = menus.filter((item) => item.category == "pizza");
  let salads = menus.filter((item) => item.category == "salad");
  let soups = menus.filter((item) => item.category == "soup");
  let drinks = menus.filter((item) => item.category == "drinks");
  return (
    <>
      <Helmet>
        <title>Bistro Shop | Order</title>
      </Helmet>
      <Cover
        img={OrderBg}
        title="Our Shop"
        subtitle="Order Your Favourite Food"
      ></Cover>

      <div className="max-w-screen-xl mx-auto py-10 px-2">
        {/* Tabs */}
        <Tabs defaultIndex={tabs} onSelect={(index) => setTabs(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          {/* Salad */}
          <TabPanel>
            <ProductCard items={salads}></ProductCard>
          </TabPanel>
          {/* Pizza */}
          <TabPanel>
            <ProductCard items={pizzas}></ProductCard>
          </TabPanel>
          {/* Dessert */}
          <TabPanel>
            <ProductCard items={desserts}></ProductCard>
          </TabPanel>
          {/* Soup */}
          <TabPanel>
            <ProductCard items={soups}></ProductCard>
          </TabPanel>
          {/* Drinks */}
          <TabPanel>
            <ProductCard items={drinks}></ProductCard>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Order;
