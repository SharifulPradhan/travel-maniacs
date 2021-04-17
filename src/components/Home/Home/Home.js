import React from 'react';
import Footer from '../../SharedComponents/Footer/Footer';
import Header from '../Header/Header';
import Packages from '../Packages/Packages';
import Reviews from '../Reviews/Reviews';
import ShowCase from '../ShowCase/ShowCase';
import Specialities from '../Specialities/Specialities';



const Home = () => {

  return (
    <div>
      <Header></Header>
      <Specialities></Specialities>
      <Packages></Packages>
      <ShowCase></ShowCase>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;