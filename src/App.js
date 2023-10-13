import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/home/Home';
import Nopage from './pages/no page/Nopage';
import Order from './pages/order/Order';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Cart from "./pages/cart/Cart"
import Mystate from './context/myState';
import Allproducts from './pages/all products/Allproducts';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';

const App = () => {
  return (
    <Mystate>
      <Router>
        <Routes>
          < Route path="/" element={<Home/>}/>
          < Route path="/order" element={<Order/>}/>
          < Route path="/cart" element={<Cart/>}/>
          < Route path="/dashboard" element={<Dashboard/>}/>
          < Route path='/allproducts' element={<Allproducts/>}/>
          < Route path='/login' element={<Login/>} />
          < Route path="/signup" element={<Signup/>} />
          < Route path="/*" element={<Nopage/>} />
        </Routes>
      </Router>
    </Mystate>
  )
}

export default App
