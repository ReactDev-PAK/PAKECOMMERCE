import React, { useContext } from 'react'
import MyContext from '../../context/myContext';
import Layout from '../../components/layout/Layout';

const Cart = () => {
   const context = useContext(MyContext);
   const {state,color} = context;
   const {class_name,name,school} = state


  return (
      <Layout>
        <>
          <h1>{class_name}</h1>
        </>
      </Layout>
  )
}

export default Cart
