import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import Badge from "react-bootstrap/Badge";
import Modal from "../Modal";
import Cart from "../Screens/Cart";
import { useCart } from "./ContextReducer";

function Header() {
  const [cartDisplay, setCartDisplay] = useState(false);

  let data = useCart();

  const navigate = useNavigate("/login");

  const LogOutHandler = () => {
    // localStorage.removeItem("authToken");
    // localStorage.removeItem("UserEmail");
    // localStorage.removeItem("User-Email");
    localStorage.clear()
    navigate("/login");
  };

  return (
    <div>
      <Navbar bg="success" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand
            href="#"
            className="fs-3"
            style={{ fontFamily: "Family" }}
          >
            HUNGRY HASTE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav
              // className="me-auto my-2 my-lg-0  "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link
                to="/"
                className="text-light fs-4 fw-bold me-3"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
              {/* <Link
                to="/about"
                className="text-light fs-4 fw-bold me-3"
                style={{ textDecoration: "none" }}
              >
                About
              </Link> */}

              {localStorage.getItem("authToken") ? (
                <Link
                  to="/myOrder"
                  className="text-light fs-4 fw-bold me-3"
                  style={{ textDecoration: "none" }}
                >
                  My Orders{" "}
                </Link>
              ) : (
                " "
              )}
              {!localStorage.getItem("authToken") ? (
                <>
                  <Link
                    to="/signup"
                    className="btn bg-white text-success fs-5 fw-bold me-3 mb-3 "
                    style={{ textDecoration: "none" }}
                  >
                    SignUp
                  </Link>
                  <Link
                    to="/login"
                    className="btn bg-white text-success fs-5 fw-bold me-3 mb-3"
                    style={{ textDecoration: "none" }}
                  >
                    Login <LoginIcon />
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className="btn bg-white text-success fs-5 fw-bold me-3 mb-3"
                    style={{ textDecoration: "none" }}
                    onClick={() => setCartDisplay(true)}
                  >
                    My Cart <ShoppingCartIcon />{" "}
                    
                      {data.length !== 0 ?
                        <Badge pill bg="danger">
                        {data.length }
                        </Badge>
                       : " "}
                    
                  </Link>
                  {cartDisplay ? (
                    <Modal onClose={() => setCartDisplay(false)}>
                      <Cart />
                    </Modal>
                  ) : (
                    " "
                  )}
                  <Button
                    className="btn bg-white text-danger fs-5 fw-bold me-3 mb-3"
                    onClick={LogOutHandler}
                    style={{ textDecoration: "none" }}
                  >
                    Log Out <LogoutIcon />
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
