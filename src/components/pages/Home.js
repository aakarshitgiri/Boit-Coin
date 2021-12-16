import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import RoadMap from '../roadMap';
import Tokenomics from '../tokenOmics';
import FAQ from '../faq';
import HeroSection from '../HeroSection';

import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      
      <RoadMap />
      <Tokenomics />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
