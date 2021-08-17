import React from 'react';
import Home from './Home';
import HomeContent from './HomeContent';
import HomeSubContent from './HomeSubContent';
import HomeSection4 from './HomeSection4';
import Footer from './footer/Footer';
import AllAvailbleRides from './AllAvailbaleRides';

export default function HomeView() {
  return (
    <div>
      <Home />
      <HomeContent />
      <AllAvailbleRides />
      <HomeSubContent />
      <HomeSection4 />
      <Footer />
    </div>
  );
}
