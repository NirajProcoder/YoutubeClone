import React from "react";
import HomePage from "../../Components/HomePage/homePage";
import "./home.css";
import SideNavbar from "../../Components/SideNavbar/sideNavbar";

const Home = ({ sideNavbar }) => {
  return (
    <div className="home">
      <SideNavbar sideNavbar={sideNavbar} />
      <HomePage sideNavbar={sideNavbar} />
    </div>
  );
};

export default Home;
