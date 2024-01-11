import React, { useCallback, useRef, useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart, useDispatchCart } from './ContextReducer';
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Card_fooditem(props) {


  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();

  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty,setQty] = useState(1);
  const [size,setSize] = useState("");
  // let fooditems = props.fooditems;

  const AddToCartHandle=async()=>{
    // e.preventDefault();
    let food =[]
    for(const item of data){
      if(item.id === props.foodItem._id){
        food = item;

        break;
      }
    }
    if(food !== []){
      if(food.size === size){
        await dispatch({type:"UPDATE",id: props.foodItem._id,price:finalPrice,qty:qty});
        toast.success('Item Added');
        return;
      }
      else if(food.size !== size){
        await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,img:props.foodItem.img,price:finalPrice,qty:qty,size:size})
        toast.success('Item Added');
        console.log(data); 
        return;
      }
      return;
    }
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,img:props.foodItem.img,price:finalPrice,qty:qty,size:size})
    toast.success('Item Added');
  }

  let finalPrice = qty * parseInt(options[size]);
  
  useEffect(()=>{
    setSize(priceRef.current.value);
  },[])


  return (
    <div>
      <Card className='m-3' style={{ width: '18rem',maxHeight:"60vh" }}>
      <Card.Img variant="top" src={props.foodItem.img} style={{height:"30vh",objectFit:"fill"}}
      />

      <Card.Body className='text-black'>
        <Card.Title>{props.foodItem.name}</Card.Title>
        {/* <Card.Text>
          {props.desc}
        </Card.Text> */}
        <div className="container w-100 ">
            <select className='my-2 me-2 h-100  bg-success rounded' style={{color:"white"}} onChange={(e)=>setQty(e.target.value)} >
                {
                    Array.from(Array(6),(e,i)=>{
                        return(
                            <option value={i+1} key={i+1}>{i+1}</option>
                        )
                    })
                }
            </select>
            <select className='my-2 me-2 h-100  bg-success rounded' ref={priceRef} style={{color:"white"}} onChange={(e)=>setSize(e.target.value)} >
            {
              priceOptions.map((data)=>(
                <option key={data} value={data}>{data}</option>
              ))
            }
            {/* <option value="quarter">Quarter</option>
                <option value="half">Half</option>
                <option value="full">Full</option> */}
            </select>
            <div className="d-inline fs-5 fw-bold">
            ₹{finalPrice}/-
            </div>
        </div>
       <hr />
       <Button variant='success' onClick={()=>{AddToCartHandle()}}>Add to Cart </Button>
      </Card.Body>
    </Card>
<ToastContainer/>
    </div>
  )
}

export default Card_fooditem
