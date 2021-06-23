import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" bigTitle="團隊介紹" style={{background: 'rgb(247, 231, 216)', color: 'black'}}/>
      <FeaturesTiles style={{background: 'rgb(246, 240, 216)', color: 'black', paddingTop: 100}}/>
    </>
  );
}

export default Home;