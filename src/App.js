// import logo from './logo.svg';
// import './App.css';
import Header from './Components/Header';
import Home from './Screens/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import About from './Screens/About';
import SignUp from './Screens/SignUp';
import Login from './Screens/Login';
import ForgotPassword from './Screens/ForgotPassword';
import { CartProvider } from './Components/ContextReducer';
import Cart from './Screens/Cart';
import MyOrders from './Screens/MyOrders';
// import ParticlesBackground from './Config/ParticlesBackground';
function App() {
  return (
    <>
    <CartProvider>
    <div className="app text-light">
    {/* <ParticlesBackground/> */}
    {/* Hello World */}
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        <Route path='/myOrder' element={<MyOrders/>}/>
      </Routes>
    </Router>

    </div>
    
    </CartProvider>
    </>
  );
}

export default App;
