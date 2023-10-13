import React, { useContext }  from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/myContext'

function Home() {
  const context = useContext(MyContext);
 


  return (
    <Layout>
       <h1>Home</h1>
    </Layout>
  )
}

export default Home