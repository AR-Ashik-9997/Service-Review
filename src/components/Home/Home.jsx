import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import { BiRightArrowAlt } from "react-icons/bi";
import useTitle from "../../utility/tittleHooks";
const Home = () => {
  const servicesData = useLoaderData();
  useTitle("Online delivery service");
  return (
    <>
      <section className="top-margin mb-5">
        <Container>
          <Row>
            <Col lg={5} md={5} sm={12}>
              <div className="mt-5 d-flex justify-content-center alighm-items-center">
                <div className=" align-self-center">
                  <h1 className="mt-5 text-white">
                    A trusted provider of courier services.
                  </h1>
                  <p className="mt-3 text-white fs-5 text-justify">
                    We deliver your products safely to your home in a reasonable
                    time. FastRyders brings creativity and local knowledge to
                    achieve better customer and delivery experiences.
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
      <section className="top-margin mt-5">
        <Container>
          <Row>
            <h1 className="mt-5 text-white text-center">Our Services</h1>
            <p className="text-white text-justify fs-5 mt-3 mb-5">
              FastRyders Logistics company is established to help your business
              minimize your busyness. A business in this age can only thrive by
              satisfying customers through innovation. At Fastryders we are
              committed to cater logistics requirements for your business in a
              fast, measurable and scalable way.
            </p>
            {servicesData.map((data) => (
              <ServiceCard data={data} key={data._id} />
            ))}
            <div className="d-flex justify-content-end mt-4">
              <Link to="/services">
                <Button variant="outline-info">
                  See All <BiRightArrowAlt />
                </Button>
              </Link>
            </div>
          </Row>
        </Container>
      </section>
      <section className="top-margin">
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <Card className="mt-3 card-bg rounded-5">
                <Card.Img variant="top" src="https://pathao.com/wp-content/uploads/2018/12/Live-Product-Status.jpg" className="card-image" />
                <Card.Body className="rounded-5">
                  <Card.Title className="fs-2 text-white text-center">Live Product Status</Card.Title>                  
                  <Card.Text className="text-justify text-white">
                  We provide you the option of real time delivery state with which you can know the current status of product delivery.                 
                  </Card.Text>                  
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
            <Card className="mt-3 card-bg rounded-5">
                <Card.Img variant="top" src="https://pathao.com/wp-content/uploads/2018/12/Call-Center-Support.jpg" className="card-image" />
                <Card.Body className="rounded-5">
                  <Card.Title className="fs-2 text-white text-center">Call Center Support</Card.Title>                  
                  <Card.Text className="text-justify text-white">
                  Call center support and key account managers are provided for all sorts of queries and needs of the clients.                 
                  </Card.Text>                  
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
            <Card className="mt-3 card-bg rounded-5">
                <Card.Img variant="top" src="https://pathao.com/wp-content/uploads/2018/12/Insurance-Coverage-Courier.jpg" className="card-image" />
                <Card.Body className="rounded-5">
                  <Card.Title className="fs-2 text-white text-center">100% Insurance Coverage</Card.Title>                  
                  <Card.Text className="text-justify text-white">
                  We take full responsibility of the deliveries by providing 100% insurance coverage.                 
                  </Card.Text>                  
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
