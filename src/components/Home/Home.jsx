import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import { BiRightArrowAlt } from "react-icons/bi";

const Home = () => {
  const servicesData = useLoaderData();
  return (
    <>
      <section className="banner mt-5 pb-5">
        <Container>
          <Row>
            <Col lg={5} md={5} sm={12}>
              <div className="mt-5 d-flex justify-content-center alighm-items-center">
                <div className=" align-self-center">
                  <h1 className="mt-5">
                    A trusted provider of courier services.
                  </h1>
                  <p className="mt-3">
                    We deliver your products safely to your home in a reasonable
                    time.
                  </p>{" "}
                </div>
              </div>
            </Col>
            <Col lg={7} md={7} sm={12}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.postimg.cc/25q0hCsm/cliente-muy-feliz-recibir-pedido-paquete-traves-aplicacion-telefono-inteligente-197170-301-removebg.png"
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
            <h1 className="mt-5 pb-5">Our Services</h1>
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
