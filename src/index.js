import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import "./index.css";
import GameBoard from "./GameBoard";

class App extends Component {
  static defaultProps = {
    colors: [
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
      "#4bcffa"
    ]
  };

  constructor(props) {
    super(props);

    this.state = {
      colors: colors,
      gameStarted: false,
      isWinner: false
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
  }

  handleShuffle(array) {
    shuffle(array);
    return array.map(color => ({ color, isSelected: false }));
  }

  handleStart(array) {
    
    this.setState({
      gameStarted: true,
      colors: this.handleShuffle(this.props.colors)
    });
    
  }

  handleReset() {
    const newColors = this.handleShuffle(this.props.colors);
    this.setState({
      colors: newColors,
      gameStarted: false,
      isWinner: false
    });
  }

  handleReveal(){
      return
  }

  render() {
    const { colors } = this.props;
    
    this.state.gameStarted ? null : this.handleStart(colors);
    return [
      <NavBar />,
      <GameBoard colors={this.state.colors} onReset={() => this.handleReset} />
    ];
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
 
];

ReactDOM.render(<App />, document.getElementById("root"));
