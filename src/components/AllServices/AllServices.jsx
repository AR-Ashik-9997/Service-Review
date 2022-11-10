import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import AllServicesCards from "../AllServicesCards/AllServicesCards";
import useTitle from "../../utility/tittleHooks";

const AllServices = () => {
  useTitle("All services");
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://service-data.vercel.app/all-services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="success" />
      </div>
    );
  }
  return (
    <div className="home-container mt-5">
      <Container className="mt-5 mb-5">
        <div className="pt-5">
          <h1 className="text-center text-white mt-5 mb-3">All Services</h1>
        </div>
        <Row>
          {services.map((services) => (
            <AllServicesCards data={services} key={services._id} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllServices;
