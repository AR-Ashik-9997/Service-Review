import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import { BiRightArrowAlt } from "react-icons/bi";
import useTitle from "../../utility/tittleHooks";
const Home = () => {
  const servicesData = useLoaderData();
  useTitle("Online delivery service");
  return (
    <>
      <section className="banner home-container mt-5">
        <Container>
          <Row>
            <Col lg={5} md={5} sm={12}>
              <div className="mt-5 d-flex justify-content-center alighm-items-center">
                <div className=" align-self-center">
                  <h1 className="mt-5 text-white">
                    A trusted provider of courier services.
                  </h1>
                  <p className="mt-3 text-white fs-5 text-justify">
                  We deliver your products safely to your home in a reasonable time. FastRyders brings creativity and local knowledge to achieve better customer and delivery experiences.
                  </p>{" "}
                </div>
              </div>
            </Col>
            <Col lg={7} md={7} sm={12}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://s3-eu-central-1.amazonaws.com/eurosender-blog/wp-content/uploads/2021/09/21074005/Door-to-door.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="services mt-5 pt-4 mb-5">
        <Container>
          <Row>
            <h1 className="mt-5 text-white text-center">Our Services</h1>
            <p className="text-white text-justify fs-5 mt-3 mb-5">FastRyders Logistics company is established to help your business minimize your busyness. A business in this age can only thrive by satisfying customers through innovation. At Fastryders we are committed to cater logistics requirements for your business in a fast, measurable and scalable way.</p>
            {servicesData.map((data) => (
              <ServiceCard data={data} key={data._id} />
            ))}
            <div className="d-flex justify-content-end mt-4">
              <Link to="/services"><Button variant="outline-info">See All <BiRightArrowAlt/></Button></Link>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
