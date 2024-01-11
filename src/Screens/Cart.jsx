import React from 'react';
import Table from 'react-bootstrap/Table';
import { useCart, useDispatchCart } from '../Components/ContextReducer';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import '../App.css'
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function Cart() {

  let data = useCart();
  let dispatch = useDispatchCart();
  
  if(data.length === 0){
    return(
        <div>
            <div className="m-5 text-center fs-2 fw-bold text-light " style={{textShadow:"5px 5px 20px white"}}>
                No Items To display!!
            </div>
        </div>
    )
  }
  // http://localhost:5000/api/orderData"

  const HandleCheckOut= async()=>{
    let Email = localStorage.getItem("userEmail");
    let auth = localStorage.getItem("authToken");
    console.log("-----",Email,auth)
    console.log(BACKEND_URL)
    const response =await axios.post(`${BACKEND_URL}/api/orderData`,{
      email:Email,
      order_data : data,
      order_date: new Date().toDateString()
    }).then((resp)=>{
      console.log("Order Response----",resp);
      if(resp.status === 200){
        dispatch({type:"DROP"})
      }
    })
  }

  let totalPrice = data.reduce((total,food)=> total + food.price,0)

  return (
    <div>
      <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
      <Table className='table'>
      <thead className='text-success fs-4' style={{textShadow:"5px 5px 18px white"}}>
        <tr>
          <th>#</th>
          <th >Name</th>
          <th>Quantity</th>
          <th>Option</th>
          <th>Amount</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody className='text-light'>
      {data.map((food,index)=>(
        <tr>
          <td>{index+1}</td>
          <td>{food.name}</td>
          <td>{food.qty}</td>
          <td>{food.size}</td>
          <td>{food.size}</td>
          <td> ₹{food.price}/-</td>
          <td onClick={()=>{dispatch({type:"REMOVE" ,index:index})}} className='del'><DeleteIcon/></td>
        </tr>
      ))}
      </tbody>
    </Table>

<div><h1 className='text-light'>Total Price : ₹{totalPrice}/-</h1></div>

    <hr />
    <div>
        <button className=" btn bg-success text-light fs-4 fw-bold" onClick={HandleCheckOut}>Check Out </button>
    </div>
      </div>
    </div>
  )
}

export default Cart
