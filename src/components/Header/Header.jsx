import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utility/AuthProvider";

const Header = () => {
  const { user, Logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem('secret-token');
    Logout()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fs-2">
          <img
            src="https://i.postimg.cc/KcqYmHwd/Lu-We0-OKt-La9e-S-523-PS-transformed-removebg-preview.png"
            className="d-inline-block align-center me-3"
            width="50"
            height="50"
            alt=""
          />
          Online Delivery Service
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} className="fs-5" to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} className="fs-5 me-2" to="/blog">
              Blog
            </Nav.Link>
            {user && user?.photoURL ? (
              <>
                <Nav.Link as={Link} className="fs-5" to="/my-review">
                  My Review
                </Nav.Link>
                <Nav.Link as={Link} className="fs-5" to="/add-service">
                  Add service
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  data-toggle="tooltip"
                  data-placement="top"
                  title={user?.displayName}
                  className="nav-link"
                >
                  <img
                    src={user?.photoURL}
                    variant="top"
                    className="user-profile me-2"
                    alt="Avatar"
                  />
                </Nav.Link>
              </>
            ) : (
              <></>
            )}
            {user?.uid ? (
              <div className="d-flex align-items-center d-grid gap-3 d-block">
                <Button
                  onClick={handleSignOut}
                  variant="btn-md text-white"
                  className="primary-btn"
                >
                  Sign-Out
                </Button>
              </div>
            ) : (
              <div className="d-flex align-items-center d-grid gap-3 d-block">
                <Link to="/sign-in">
                  <Button variant="outline-info btn-md text-white">
                    Sign-In
                  </Button>
                </Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
