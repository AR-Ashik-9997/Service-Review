import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import useTitle from "../../utility/tittleHooks";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddServices = () => {
 useTitle("Add Services");
  const [user, setUser] = useState({});
  const notify = () => toast.success("Services Successfuly Added");
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://service-data.vercel.app/add-services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("secret-token")}`,
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
      setUser("");
      event.target.reset();     
  };
  const handleChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div className="home-container">
      <Container className="top-margin">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="mt-5">
              <img
                src="https://simpleplans.com.au/img/content_writing-banner.png"
                alt=""
                className=" img-fluid"
              />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="bg-white w-75 rounded-4 mx-auto mt-5 mb-5">
              <h1 className="text-center mb-4 pt-5">Add Services</h1>
              <Form className="mx-auto w-75" onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="formBasicname">
                  <Form.Control
                     onChange={handleChange}
                    type="text"
                    className="rounded-3"
                    placeholder="Service Name"
                    name="name"
                    required
                  autoComplete="off"
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicphoto">
                  <Form.Control 
                  onChange={handleChange}                   
                    name="image"
                    type="text"
                    placeholder="Photo-URL"
                    className="rounded-3"
                    required
                    autoComplete="off"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                  <Form.Control type="number" placeholder="Price" name="price" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicDescription">
                  <textarea
                     onChange={handleChange}
                     name="description"
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Your Description here...."
                    rows="3"
                    autoComplete="off"
                    required
                  />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Button
                  type="submit"
                    variant="outline-info"                    
                    className="w-75 rounded-3 mb-5"
                    onClick={notify}
                  >
                    Add service
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
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
    </div>
  );
};

export default AddServices;
