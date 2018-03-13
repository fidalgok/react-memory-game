import React from "react";
import "./NavBar.css";

function NavBar(props) {
  return [
    <div className="navBar">
      <h1><a>Memory Game</a></h1>
      <nav>
          <a>Play Again</a>
      </nav>
    </div>
  ];
}

export default NavBar;
