import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Form from "./Form/Form";
import formCmsContent from "./contactUsForm.json";

const ContactUs = (props) => {
  const [cmsData, setCmsData] = useState(formCmsContent.contactUsForm);
  return (
    <section className="container">
      <Col className="contact-us grey-bg-form position-relative rounded  p-4 p-lg-5">
        <Row className="justify-content-between">
          <Col md={5} className="pt-md-5">
            <h2 className="white position-relative pb-4 heading-underline">
              {cmsData.heading}
            </h2>
            <p className="white">
              Call us: 0000000000
              {/* {cmsData.description} */}
            </p>
          </Col>
          <Col md={7} className="align-items-center">
            <Form {...props} />
          </Col>
        </Row>
      </Col>
    </section>
  );
};
export default ContactUs;
