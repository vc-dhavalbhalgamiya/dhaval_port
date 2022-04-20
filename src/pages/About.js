import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Title } from "../components/Title/";
import "../assets/scss/pages/abouts.scss";
const About = () => {
  return (
    <Container>
      <div className="about-wrapper">
        <Title title="About" primary_title="me" />
        <div className="personal-info-wrapper">
          <Row>
            <Col md="6">
              <h3>Personal Info</h3>

              <div className="info-wrapper">
                <ul className="info-list">
                  <li>
                    <p>
                      <span className="c-tx-ninth">First Name :</span>{" "}
                      <span className="f-700">Dhaval Bha</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="c-tx-ninth">Age :</span>{" "}
                      <span className="f-700">27</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="c-tx-ninth">Free Lance :</span>{" "}
                      <span className="f-700">Available</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span className="c-tx-ninth">Last Name :</span>{" "}
                      <span className="f-700">Available</span>
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default About;
