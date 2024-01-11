import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function SignUp() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const OnChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const resp = await axios.post(`${BACKEND_URL}/api/createUser`, {
      name: data.name,
      email: data.email,
      password: data.password,
      location: data.location,
    }).then((data)=>{
      console.log(data);
      navigate('/login');
    })
    
    // const result = await resp.json();
    // console.log(result);
    // if (!result.success) {
    //   alert("Enter Valid Credentials");
    // }
  };
  return (
    <div className="container text-light " style={{ marginTop: "25vh" }}>
      <div
        gap={2}
        className="col-md-5 mx-auto p-5"
        style={{
          border: "1px solid white",
          borderRadius: "25px",
          boxShadow: "2px 2px 2px 2px white, 0 6px 20px 0 white",
        }}
      >
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                name="name"
                value={data.name}
                onChange={OnChangeHandler}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="email"
                placeholder="abc@gmail.com"
                name="email"
                value={data.email}
                onChange={OnChangeHandler}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={OnChangeHandler}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Address
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Address"
                name="location"
                value={data.location}
                onChange={OnChangeHandler}
              />
            </Col>
          </Form.Group>
          <Button
            variant="success"
            style={{ width: "100%" }}
            onClick={SubmitHandler}
          >
            Sign Up
          </Button>

          <Link
            to="/login"
            className="mt-0 fs-6 text-white float-start"
            style={{ textDecoration: "none" }}
          >
            <p>Already have an account?</p>
          </Link>
          <Link
            to="/forgotPassword"
            className="mt-0 fs-6 text-white float-end"
            style={{ textDecoration: "none" }}
          >
            <p>Forgot Password?</p>
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
