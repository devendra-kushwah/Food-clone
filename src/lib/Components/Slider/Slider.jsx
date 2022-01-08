import React from "react";
import { CarouselSection } from "./style";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <CarouselSection className="bottom-space">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/banner-dummy.jpg"
            // src="https://www.digivigyan.com/knowledge-center/wp-content/uploads/2019/07/banner-dummy.jpg"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/banner-dummy.jpg"
            // src="https://www.digivigyan.com/knowledge-center/wp-content/uploads/2019/07/banner-dummy.jpg"
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/banner-dummy.jpg"
            // src="https://www.digivigyan.com/knowledge-center/wp-content/uploads/2019/07/banner-dummy.jpg"
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </CarouselSection>
  );
};

export default Slider;
