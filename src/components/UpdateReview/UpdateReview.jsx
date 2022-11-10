import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useLoaderData} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UpdateReview = () => {
  const reviewData = useLoaderData(); 
  const notify = () => toast.success("Successfuly updated");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const serviceName = form.serviceName.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const update = {
      image: image,
      name: name,
      serviceName: serviceName,
      rating: rating,
      description: description,
    };

    fetch(`https://service-data.vercel.app/update-reviews/${reviewData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("secret-token")}`,
      },
      body: JSON.stringify(update),
    })
      .then((response) => response.json())
      .then({});
    
  };

  return (
    <Container className="home-container">
      <Row>
        <Col lg={6} md={6} sm={12}>
          <div className="mt-5 pt-5">
            <img
              src="https://i.postimg.cc/tgmQJzY2/system-update-isometric-illustration-concept-108061-532-removebg-preview.png"
              alt=""
              className="d-block img-fluid mx-auto"
            />
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} className="d-flex align-items-center pt-5">
          <div className="bg-white w-75 rounded-4 mx-auto mt-5 mb-5">
            <h1 className="text-center mb-4 pt-5">Update Review</h1>
            <Form className="mx-auto w-75" onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  name="image"
                  placeholder="photo-url"
                  defaultValue={reviewData.image}
                  autoFocus
                  required
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="username"
                  defaultValue={reviewData.name}
                  required
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Control
                  name="serviceName"
                  type="text"
                  placeholder="serviceName"
                  defaultValue={reviewData.serviceName}
                  required
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput4"
              >
                <Form.Control
                  name="rating"
                  type="number"
                  step="any"
                  placeholder="Ratings"
                  defaultValue={reviewData.rating}
                  required
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  name="description"
                  as="textarea"
                  defaultValue={reviewData.description}
                  rows={3}
                  placeholder="Description here...."
                  required
                  autoComplete="off"
                />
              </Form.Group>
              <div className="d-flex justify-content-center pb-5 pt-4">
                <Button
                  variant="outline-success"
                  type="submit"
                  className="w-75 mb-4 rounded-3"
                  onClick={notify}
                >
                  Updated
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Container>
  );
};

export default UpdateReview;
