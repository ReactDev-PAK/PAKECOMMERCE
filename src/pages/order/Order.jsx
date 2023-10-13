import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/myContext';

const Order = () => {
  const context = useContext(MyContext);
   const {state,color} = context;
   const {class_name,name,school} = state

  return (
    <Layout>
      <h1>{class_name}</h1>
    </Layout>
  )
}

export default Order
