import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

function ForgotPassword() {
  return (
    <div>
    
    <div className='text-light ' style={{marginTop:"25vh",}} >
    <div gap={2} className="col-md-4 mx-auto align-middle p-3 " style={{border:"1px solid white",borderRadius:"25px",boxShadow:"2px 2px 2px 2px white, 0 6px 20px 0 white"}}>
    <Link to='/signup' className='mb-3 text-white p-5' style={{textDecoration:"none"}}><KeyboardBackspaceIcon/>{" "}Back</Link>
      <Form className='p-5'>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type='email' placeholder='abc@gmail.com'/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          New Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Enter New Password" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Confirm Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Re-Enter new Password" />
        </Col>
      </Form.Group>

      <Button variant="success" style={{width:"100%"}}>Change Password</Button>
    </Form>
    </div>
    
    </div>
    </div>
  )
}

export default ForgotPassword
