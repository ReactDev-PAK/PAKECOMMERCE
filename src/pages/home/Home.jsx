import React, { useContext }  from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/myContext'
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCart/ProductCart';

function Home() {
  const context = useContext(MyContext);
  return (
    <Layout>
       <HeroSection/>
       <Filter/>
       <ProductCard/>
    </Layout>
  )
}

export default Home