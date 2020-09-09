import "./App.scss";
import logo from "./img/logo.png";
import background from "./img/background.png";


import React from "react";

const Home = () => {
  return (
    <div className="bg">
      <nav className="bar">
        <img
          className="logo"
          alt="imagine"
          src={logo}
        />

        <a href ="https://pages.justgiving.com/charities.html" className="about">About Us</a>
        <a href = "https://www.justgiving.com/" className="home">Home</a>
      </nav>
      <section className="container">
        <img
          className="macLogo"
          alt="imagine"
          src={background}
        />
      </section>
    </div>
  );
};

export default Home;
