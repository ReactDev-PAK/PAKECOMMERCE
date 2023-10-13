import React, { useContext }  from 'react'
import Layout from '../../components/layout/Layout'
import MyContext from '../../context/myContext'
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCart/ProductCart';
import Track from '../../components/track/Track';
import Testimonial from '../../components/testimional/Testimional';

function Home() {
  const context = useContext(MyContext);
  return (
    <Layout>
       <HeroSection/>
       <Filter/>
       <ProductCard/>
       <Track/>
       <Testimonial/>
    </Layout>
  )
}

export default Home