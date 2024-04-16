// import React from 'react'
import React from "react";
import Hero from "../../components/HomePageComponents/Hero/Hero";
import Statistics from "../../components/HomePageComponents/Statistics/Statistics";
import "./homePage.scss"; // Import your SCSS file
// import Products from "../../components/HomePageComponents/Products/Products";
import NavCards from "../../components/HomePageComponents/NavCards/NavCards";

const HomePage = () => {
  return (
    <div className="home">
      <Hero />
      <Statistics />
      {/*<Products />*/}
      <NavCards />
    </div>
  );
};

export default HomePage;
