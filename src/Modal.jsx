import React from 'react';
import ReactDOM from 'react-dom';

const Modal_Styles ={
    position:"fixed",
    top:"50%",
    left:"50%",
    backgroundColor:"Black",
    transform:"translate(-50%,-50%)",
    zIndex:1000,
    boxShadow: "2px 2px 2px 2px green, 0 6px 20px 0 green",
    borderRadius:"10px",
    height:"90%",
    width:"90%"
}

const Overlay_Styles={
    position:"fixed",
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:"rgba(0,0,0,.7)",
    zIndex:1000
}


function Modal({children,onClose}) {
  return ReactDOM.createPortal(
    <>
        <div style={Overlay_Styles}/> 
        <div style={Modal_Styles}>
        <button className='btn bg-danger fs-4' style={{marginLeft:"97%",marginTop:"5px"}} onClick={onClose}>X</button>
        {children}
        </div>
    </>,
    document.getElementById("cart-root")
  )
}

export default Modal
