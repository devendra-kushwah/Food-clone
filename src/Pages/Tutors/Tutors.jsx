import React, { useState } from "react";
import { Col } from "./style";
import { Element, Form } from "../../styles";
import TutorsProfile from "./TutorsProfile";
import userData from "./data.json";

const Tutors = (props) => {
  const [data, setData] = useState(userData.data);
  return (
    <Element.Container fluid noPadding className="welcome">
      <Col className="rootbox">
        <div className="about-summery">
          <div className="about-header">
            {/* <Element.LogoLink to="/" className="logo">
              Y<span>E</span>
            </Element.LogoLink> */}
            <p>{data.des}</p>
          </div>
          <Form.Input type="text" placeholder={data.placeholder} />
        </div>
      </Col>
      <Col className="search-result">
        <TutorsProfile />
      </Col>
    </Element.Container>
  );
};
export default Tutors;
