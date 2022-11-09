import React from "react";
import { Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import AllServicesCards from "../AllServicesCards/AllServicesCards";
import useTitle from "../../utility/tittleHooks";
const AllServices = () => {
  useTitle("All services");
  const AllServicesData = useLoaderData();
  return (
    <div className="home-container mt-5">
    <Container className="mt-5 mb-5">
      <div className="pt-5">
        <h1 className="text-center text-white mt-5 mb-3">All Services</h1>
      </div>
      <Row>
        {AllServicesData.map((services) => (
          <AllServicesCards data={services} key={services._id} />
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default AllServices;
