import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const array=[
   {src:"https://source.unsplash.com/random/900×700/?tikki"},
   {src:"https://source.unsplash.com/random/900×700/?burger"},
   {src:"https://source.unsplash.com/random/900×700/?pastery"},
   {src:"https://source.unsplash.com/random/900×700/?shake"},
   {src:"https://source.unsplash.com/random/900×700/?drinks"}
];

function Carousel_component() {
  return (
    <div>
      <Carousel fade
      interval={1000}
      controls={false}
      indicators={false}
      style={{objectFit:"contain !important"}}
      >
      {
        array.map((data,index)=>
        <Carousel.Item  key={index}>
        <img
          src={data.src}
          alt="Image not Found"
          className="d-block w-100 z-0 "
          style={{filter:"brightness(50%)",height:"65vh",maxHeight:"65vh"}}
        />
        <Carousel.Caption className='z-200'>
        <Form className="d-flex me-3 ">
            <Form.Control
            
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
            />
            <Button className='bg-success text-white' variant="outline-success" >Search</Button>
          </Form>
      </Carousel.Caption>
        </Carousel.Item>
        
        )
      }
      
      
    </Carousel>
    </div>
  )
}

export default Carousel_component
