import React, { useContext } from 'react'
import MainSection from './components/MainSection'
import { AppContext } from './context/ProductContext'

const About = () => {

  const {myCont} = useContext(AppContext);
  const data = {
    name: "shoppy ecommerce",
    btnn: "Continue Shopping"
  }
  return(
    <>
    {myCont}
    <MainSection myData={data}/>
    </>
  );
}

export default About
