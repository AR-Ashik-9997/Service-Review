import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const MyReviews = () => {
  const data = useLoaderData();
  return (
    <div className="home-container">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="mt-5">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th className="text-white">Name</th>
                    <th className="text-white">emil</th>
                    <th className="text-white">service Name</th>
                    <th className="text-white">Ratings</th>
                    <th className="text-white">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((review, index) => (
                    <tr key={review._id}>
                      <td className="text-white">{review.name}</td>
                      <td className="text-white">{review.price}</td>
                      <td className="text-white">{review.description}</td>
                      <td className="text-white">{review.ratings}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyReviews;
