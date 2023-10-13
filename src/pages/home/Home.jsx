import React, { useContext }  from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/myContext'
import HeroSection from '../../components/heroSection/HeroSection';

function Home() {
  const context = useContext(MyContext);
  return (
    <Layout>
       <HeroSection/>
    </Layout>
  )
}

export default Home