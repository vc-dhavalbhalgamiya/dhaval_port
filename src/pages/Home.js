import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "../assets/scss/pages/style.scss";
import "../assets/scss/pages/home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <>
      <div className="color-block" />
      <div className="home-wrapper">
        <Container className="h-100 gx-5 " fluid>
          <Row className="h-100 align-items-center ">
            <Col md="4">
              <div className="main-developer-img-wrapper"></div>
            </Col>
            <Col md="8">
              <div className="detail-wrapper">
                <div className="main-title-wrapper">
                  <h1 className="f-700 text-uppercase">
                    <span className="c-tx-primary">I'm steve milner.</span>
                    <br />
                    {/* <span className="text-white">web designer</span> */}
                  </h1>
                </div>
                <p className="secondary-font c-tx-eighth f-300 mt-2 mb-3 ">
                  I'm a Tunisian based web designer & front‑end developer
                  focused on crafting clean & user‑friendly experiences, I am
                  passionate about building excellent software that improves the
                  lives of those around me.
                </p>

                <Button className="custom-btn-primary">
                  <span className="text-bl">More About me</span>
                  <span className="icon-bl">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
