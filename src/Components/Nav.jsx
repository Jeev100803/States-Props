import React from "react";
import logo from "../assets/logofinal.png";

function Nav() {
  return (
    <div className="Nav">
      <div className="Nav-leftEnd">
        <i className="fa-solid fa-bars"></i>
        <img src={logo} alt="" height={125} width={125} />
      </div>

      <div className="Nav-center">
        <div className="search">
          <input type="text" placeholder="Search" />
          <div className="search-bar"> 
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="Microphone">
            <i className="fa-solid fa-microphone"></i>
        </div>
      </div>

      <div className="Nav-rightEnd">
        <span><i className="fa-solid fa-plus"></i>Create</span>
        <i className="fa-solid fa-bell"></i>
        <div className="Account"></div>
      </div>
    </div>
  );
}

export default Nav;
