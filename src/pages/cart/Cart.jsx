import React, { useContext } from 'react'
import MyContext from '../../context/myContext';
import Layout from '../../components/layout/Layout';

const Cart = () => {
   const context = useContext(MyContext);


  return (
      <Layout>
          <h1>Cart</h1>
      </Layout>
  )
}

export default Cart
