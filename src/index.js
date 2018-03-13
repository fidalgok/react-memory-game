import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      isWinner: false,

    };
  }

  handleShuffle(array){
      shuffle(array);
      return array.map((color) => ({color, isSelected:false}));
  }

  resetGame(){
      const newColors = this.handleShuffle(colors);
      this.setState({
          colors:newColors,
      })
  }

  render() {
    return [<NavBar />];
  }
}

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    let index = Math.floor(Math.random() * i);
    //swap

    [array[index], array[i]] = [array[i], array[index]];
  }
}

const colors = [
  "#FF4081",
  "#FF4081",
  "#03A9F4",
  "#03A9F4",
  "#3ae374",
  "#3ae374",
  "#fffa65",
  "#fffa65",
  "#ff3838",
  "#ff3838",
  "#ffaf40",
  "#ffaf40",
  "#3c40c6",
  "#3c40c6",
  "#4bcffa",
  "#4bcffa",
];

ReactDOM.render(<App />, document.getElementById("root"));
