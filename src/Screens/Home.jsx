import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Card_fooditem from "../Components/Card_fooditem";
// import Carousel_component from "../Components/Carousel_component";
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const array=[
  {src:"https://source.unsplash.com/random/900×700/?tikki"},
  {src:"https://source.unsplash.com/random/900×700/?burger"},
  {src:"https://source.unsplash.com/random/900×700/?pastery"},
  {src:"https://source.unsplash.com/random/900×700/?shake"},
  {src:"https://source.unsplash.com/random/900×700/?drinks"}
];

function Home() {
  const [foodItem, setFoodItem] = useState([]);
  const [foodCat, setFoodCat] = useState([]);
  const [search,setSearch] = useState("");

  // http://localhost:5000/api//foodData
  console.log(BACKEND_URL);

  const loadData = async () => {
    const response = await axios
      .post(`${BACKEND_URL}/api/foodData`)
      .then((res) => {
        console.log("----",res);
        console.log(response.data[0], response.data[1]);
        setFoodItem(res.data[0]);
        setFoodCat(res.data[1]);
      });
  };

  useEffect(() => {
    let Email = localStorage.getItem("userEmail");
    console.log("======",Email)
    loadData();
  }, []);
  //dependencies written in []

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        {/* <Carousel_component /> */}


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
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}
            />
            <Button className='bg-success text-white' variant="outline-success" >Search</Button>
          </Form>
      </Carousel.Caption>
        </Carousel.Item>
        
        )
      }
      
      
    </Carousel>






      </div>

      <div className="container">
      {
        foodCat !== [] ? foodCat?.map((data)=>{
          return(
            <>
            <div className="row mb-3">
            <div key={data._id} className="fs-3 m-3 fw-bold ">
            {data.CategoryName}
            </div>
            <hr />
            {foodItem !== [] ? foodItem.filter((item)=>(item.CategoryName === data.CategoryName) &&(item.name.toLowerCase().includes(search.toLocaleLowerCase()))) 
            .map(filterItems=>{
              return(
                <>
                <div key={filterItems._id} className="col-sm-12 col-md-6 col-lg-3">
                <Card_fooditem
                foodItem = {filterItems}
                // foodName ={filterItems.name}
                // imgSrc={filterItems.img} 
                options={filterItems.options[0]}
                
                  // desc ={filterItems.description}
                />
                </div>
                
                </>
              )
            }):"No Such Data Found"
            }
            </div>
            </>
          )
          
      }):" "
      }
      {/* <Card_fooditem /> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
