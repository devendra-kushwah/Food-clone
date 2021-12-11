import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./style";
import data from "./data.json";

function CarouselSlider() {
  const [items, setItems] = useState(data);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section className="more-items">
      <h4 className="text-center mb-3 mb-lg-5"> Order more items </h4>
      <Carousel className="bottom-space p-md-0">
        <Slider {...settings}>
          {items.map((data) => (
            <div key={data.id}>
              <img src={data.image} alt={data.title} />
            </div>
          ))}
        </Slider>
      </Carousel>
    </section>
  );
}
export default CarouselSlider;
