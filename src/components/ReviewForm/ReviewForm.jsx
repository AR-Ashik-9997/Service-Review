import React from "react";
import { Button, Card, Col, Form } from "react-bootstrap";
const ReviewForm = () => {
  return (
    <Col lg={5} md={6} sm={12}>
      <div className="d-flex justify-content-center">
        <div className="w-75">
          <div>
            <h1>Review Contents</h1>
            <Card>
              <Card.Body className="card-review"></Card.Body>
            </Card>
          </div>
          <div>
            <Form className="mt-5">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="email" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicRatings">
                <Form.Control type="number" placeholder="ratings" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDescription">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Your Review here...."
                  rows="3"
                />
              </Form.Group>
              <div className="d-flex justify-content-end">
              <Button variant="outline-info" type="submit">
                Review
              </Button>
              </div>              
            </Form>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ReviewForm;
