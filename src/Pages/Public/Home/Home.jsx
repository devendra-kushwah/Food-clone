import React, { useState, useEffect } from "react";
import {Layout} from "Layouts";

import {
  ErrorBoundary,
  Slider,
  CarouselSlider,
  // ContactUs,
} from "lib/Components";


import {ProductCard, BannerMessage} from "./components";

import data from "./components/ProductCard/data.json";

const Home = () => {
  const [items, setItems] = useState(data);
  const [totalItem, setTotalItem] = useState(null);

  const quantityIncrease = (index) => {
    const newItems = [...items];
    newItems[index].qty++;
    setItems(newItems);
    totalCount();
  };

  const quantityDecrease = (index) => {
    const newItems = [...items];
    newItems[index].qty--;
    setItems(newItems);
    totalCount();
  };

  const totalCount = () => {
    const countItems = items.reduce((total, count) => {
      return total + count.qty;
    }, 0);
    setTotalItem(countItems);
  };

  const productProps = {
    items,
    quantityIncrease,
    quantityDecrease,
  };

  useEffect(() => {
    document.body.classList.add("fixed-header");
    return () => {
      document.body.classList.remove("fixed-header");
    };
  }, []);

  return (
    <Layout>
      {/* <Header qtyCount={totalItem} /> */}
      <Slider />
      <BannerMessage />
      <ProductCard {...productProps} />
      <CarouselSlider />
      {/* <ContactUs /> */}
      </Layout>
  );
};
export default ErrorBoundary(Home);
