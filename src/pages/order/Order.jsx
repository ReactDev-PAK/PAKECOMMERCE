import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/myContext';

const Order = () => {
  const context = useContext(MyContext);

  return (
    <Layout>
      <h1> Order</h1>
    </Layout>
  )
}

export default Order
