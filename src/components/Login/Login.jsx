import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import * as EmailValidator from "email-validator";
import { BiLogInCircle } from "react-icons/bi";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../utility/AuthProvider";
import useTitle from "../../utility/tittleHooks";
const Login = () => {
  useTitle("Sign-in");
  const navigate = useNavigate();
  const { signInGoogle, SignInForm, signInGithub } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    firebase: "",
  });

  const handleEmailChange = (e) => {
    const email = e.target.value;
    if (!EmailValidator.validate(email)) {
      setErrors({ ...errors, email: "Please provide a valid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
    if (EmailValidator.validate(email)) {
      setErrors({ ...errors, email: "" });
      setUserInfo({ ...userInfo, email: e.target.value });
    }
  }; 
  const handleSubmit = (event) => {
    event.preventDefault();       
    const form = event.target;
    const password = form.password.value;
    const email = userInfo.email;
    SignInForm(email, password)
      .then((res) => {
        setLoading(false);
        const user = res.user;
        const currentUser = {
          email: user.email,
        };
        fetch("https://service-data.vercel.app/jwt ", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("secret-token", data.token);
          });
        setErrors({ ...errors, firebase: "" });
        form.reset();

        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrors({ ...errors, firebase: error.message });
      });
  };

  const googleSignIn = () => {
    signInGoogle(googleProvider)
      .then((res) => {
        setErrors({ ...errors, firebase: "" });
        const user = res.user;
        const currentUser = {
          email: user.email,
        };
        fetch("https://service-data.vercel.app/jwt ", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("secret-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        setErrors({ ...errors, firebase: error.message });
      });
  };
  const GithubSignIn = () => {
    signInGithub(githubProvider)
      .then(() => {
        setErrors({ ...errors, firebase: "" });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrors({ ...errors, firebase: error.message });
      });
  };
  return (    
    <Container className="home-container">
      {loading?(<div className="d-flex justify-content-center"><Spinner animation="border" variant="success" /></div>):<></>}
      <Row>        
        <Col lg={6} md={6} sm={12}>
          <div className="mt-5 pt-5">
            <img
              src="https://i.postimg.cc/63D018m9/man-stands-front-inputted-secured-data-registration-form-login-user-interface-isometric-flat-illustr.png"
              alt=""
              className="d-block img-fluid mx-auto"
            />
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} className="d-flex align-items-center pt-5">
          <div className="bg-white w-75 rounded-4 mx-auto mt-5 mb-5">
            <h1 className="text-center mb-4 pt-5">Sign-In</h1>
            <Form className="mx-auto w-75" onSubmit={handleSubmit}>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  className="rounded-3 mb-2"
                  required
                  autoComplete="off"
                  onChange={handleEmailChange}
                />
                <Form.Text className="text-danger">{errors.email}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="rounded-3 mb-2"
                  required
                  autoComplete="off"
                />
                <Form.Text className="text-danger">{errors.firebase}</Form.Text>
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button
                  variant="outline-info"
                  type="submit"
                  className="w-50  mb-4 rounded-3"
                  onClick={() => setLoading(true)}
                >
                  Sign-In <BiLogInCircle className="fs-5" />
                </Button>
              </div>
            </Form>
            <p className="text-center mb-4">
              Dont have an account?<br className="d-lg-none d-md-none d-sm-block "/>
              <NavLink
                to="/sign-up"
                className="text-decoration-none text-danger"
              >
                {" "}
                SignUp Now
              </NavLink>
            </p>
            <div className="d-flex justify-content-center mb-5">
              <Button variant="outline-dark" onClick={googleSignIn}>
                <FcGoogle className="fs-1" />
              </Button>
              <Button
                variant="outline-dark"
                className="ms-4"
                onClick={GithubSignIn}
              >
                <BsGithub className="fs-1" />
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
