import React, { useContext } from "react";
import MainSection from "./components/MainSection"
import Trusted from "./components/Trusted";
import Services from "./components/Services";
import { AppContext } from "./context/ProductContext";
import FeatureProduct from "./components/FeatureProduct";

const Home = () => {

  const data = {
    name: "shoppy",
    btnn: "shop now",
  }
  return( 
    <>
        <MainSection myData = {data}/>
        <FeatureProduct/>
        <Services />;
        <Trusted />;
    </>
  );
};

export default Home;