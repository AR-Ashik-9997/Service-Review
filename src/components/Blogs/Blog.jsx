import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="home-container mt-5 pt-5">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <Accordion defaultActiveKey={["0", "1", "2", "3"]} alwaysOpen>
            <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h3 className="text-black">
                    What is JWT, and how does it work?
                  </h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-justify fs-5">
                    <span className="fw-bold">JSON Web Token (JWT)</span> is an
                    open standard (RFC 7519) that defines a compact and
                    self-contained way for securely transmitting information
                    between parties as a JSON object. This information can be
                    verified and trusted because it is digitally signed. JWTs
                    can be signed using a secret (with the HMAC algorithm) or a
                    public/private key pair using RSA or ECDSA.
                  </p>
                  <p className="text-justify fs-5">
                    <span className="fw-bold">JSON Web Token (JWT)</span>{" "}
                    Basically the identity provider(IdP) generates a JWT
                    certifying user identity and Resource server decodes and
                    verifies the authenticity of the token using secret salt /
                    public key.
                  </p>
                  <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--paCGhFRY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/tppls6i2nbdqevr2nybr.png" alt="" className="img-fluid d-block mx-auto"/>
                  <ul>
                    <li className="fs-5">
                      User sign-in using username and password or
                      google/facebook.
                    </li>
                    <li className="fs-5">
                      Authentication server verifies the credentials and issues
                      a jwt signed using either a secret salt or a private key.
                    </li>
                    <li className="fs-5">
                      User's Client uses the JWT to access protected resources
                      by passing the JWT in HTTP Authorization header.
                    </li>
                    <li className="fs-5">
                      Resource server then verifies the authenticity of the
                      token using the secret salt/ public key.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h3 className="text-black">
                    Difference between SQL and NoSQL?
                  </h3>
                </Accordion.Header>
                <Accordion.Body>
                  <img
                    src="https://www.agiratech.com/wp-content/uploads/2018/01/Difference-between-SQL-and-NOSQL-2.png"
                    alt=""
                    className="img-fluid d-block mx-auto"
                  />
                </Accordion.Body>
              </Accordion.Item>              
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h3 className="text-black">
                    What is the difference between javascript and NodeJS?
                  </h3>
                </Accordion.Header>
                <Accordion.Body>
                  <img
                    src="https://i.postimg.cc/QCRxtpyR/Screenshot-2022-11-09-161242.png"
                    alt=""
                    className="img-fluid d-block mx-auto"
                  />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h3 className="text-black">
                    How does NodeJS handle multiple requests at the same time?
                  </h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text-justify fs-5"><span className="fw-bold">NodeJS receives</span> multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.</p>
                  <p className="text-justify fs-5"><span className="fw-bold">If NodeJS can  process </span> the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
