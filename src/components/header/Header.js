import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div>
      <h1 className="heading">Family Wellness</h1>
      <h3 className="sub-heading">MASSAGE THERAPY</h3>
      <div className="navbar">
        <div className="item active">HOME</div>
        <div className="item">ABOUT</div>
        <div className="item">SERVICES</div>
        <div className="item">FAQ</div>
        <div className="item">CONTACT</div>
      </div>
    </div>
  );
};

export default Header;
