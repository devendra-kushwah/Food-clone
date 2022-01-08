import React from "react";
import { Container } from "react-bootstrap";

const BannerMessage = () => {
  return (
    <Container className="bg-light alert alert-light p-3 py-5 bottom-space text-center">
      <div className="inner-container mx-auto">
        we have experience about 16 years related this field to serve delesias
        taste to the people. due to covid-19 we are provding our service in
        limited areas
        {/* We are proving
        service in thease areas A, B, C,D, E, F in our city and we are happy to
        deliver your order on time and you can also request this serice in your
        area if you are searching product above mentioned areas */}
      </div>
    </Container>
  );
};

export default BannerMessage;
