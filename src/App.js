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

const App = () => {
  return (
    <Router>
      <Routes>
        < Route path="/" element={<Home/>}/>
        < Route path="/order" element={<Order/>}/>
        < Route path="/cart" element={<Cart/>}/>
        < Route path="/dashboard" element={<Dashboard/>}/>
        < Route path="/*" element={<Nopage/>} />
      </Routes>
    </Router>
  )
}

export default App
