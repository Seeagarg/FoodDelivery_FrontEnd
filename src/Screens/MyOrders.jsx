import React,{useEffect, useState} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import axios from 'axios';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


function MyOrders() {

// const [date,setDate] = useState("");
const [orderData,setOrderData] = useState("");
    
const loadData=async()=>{
    console.log("LoadData")
    let Email = localStorage.getItem('userEmail');
    const resp = await axios.post(`${BACKEND_URL}/api/myOrderData`,{
        email: Email
    })
    .then((resp)=>{
        console.log("--------",resp.data.orderData);
        setOrderData(resp.data.orderData); 
        console.log(orderData.orderData) ;
    })
}

useEffect(()=>{
    loadData();
},[])

  return (
    <div>
    <Header/>

     <div className="container">
     <div className="row" >
     {
        orderData !== {} ? Array(orderData).map((data)=>{
            return(
                
                data ?
                data.order_data.slice(0).reverse().map((item)=>{
                    return(
                        item.map((arrayData)=>{
                            return(
                                <>
                                    <div className='row'>
                                        {arrayData.order_date ? <div className='m-auto mt-5'>
                                            {data = arrayData.order_date}
                                            <hr />
                                        </div>:
                                        
                                        <div className='col-sm-12 col-md-6 col-lg-3'>
                                        <div className="Card mt-3" style={{width:"20rem",maxHeight:" 360px"}}>
                                        {/* <img src={arrayData.img} className='card-img-top'/> */}
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {arrayData.name}
                                            </h5>
                                            <span className='m-1'>
                                            {arrayData.qty}
                                            </span>
                                            <span className='m-1'>
                                            {arrayData.size}
                                            </span>
                                            <span className='m-1'>
                                            {arrayData.name}
                                            </span>
                                            <div className="d-inline ms-2 h-100 w-20 fs-5">
                                            rs.{arrayData.price}/-
                                            </div>

                                        </div>
                                        </div>
                                        <hr />
                                        </div>
                                        
                                        
                                        }
                                    </div>
                                </>
                            )
                        })
                    )
                }): <h1>No Orders Yet!!</h1> 
            )
        }):" You Haven't Order Anything" 
     }

            
     </div>
     </div>

    <Footer/>
    </div>
  )
}

export default MyOrders
