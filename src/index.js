import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import "./index.css";
import GameBoard from "./GameBoard";

const boxStatus = {
  HIDING: 0,
  SHOWING: 1,
  MATCHED: 3
};

class App extends Component {
  static defaultProps = {
    boxes: [
      { id: 0, backgroundColor: "#FF4081", status: boxStatus.HIDING },
      { id: 1, backgroundColor: "#FF4081", status: boxStatus.HIDING },
      { id: 2, backgroundColor: "#03A9F4", status: boxStatus.HIDING },
      { id: 3, backgroundColor: "#03A9F4", status: boxStatus.HIDING },
      { id: 4, backgroundColor: "#3ae374", status: boxStatus.HIDING },
      { id: 5, backgroundColor: "#3ae374", status: boxStatus.HIDING },
      { id: 6, backgroundColor: "#fffa65", status: boxStatus.HIDING },
      { id: 7, backgroundColor: "#fffa65", status: boxStatus.HIDING },
      { id: 8, backgroundColor: "#ff3838", status: boxStatus.HIDING },
      { id: 9, backgroundColor: "#ff3838", status: boxStatus.HIDING },
      { id: 10, backgroundColor: "#ffaf40", status: boxStatus.HIDING },
      { id: 11, backgroundColor: "#ffaf40", status: boxStatus.HIDING },
      { id: 12, backgroundColor: "#3c40c6", status: boxStatus.HIDING },
      { id: 13, backgroundColor: "#3c40c6", status: boxStatus.HIDING },
      { id: 14, backgroundColor: "#4bcffa", status: boxStatus.HIDING },
      { id: 15, backgroundColor: "#4bcffa", status: boxStatus.HIDING }
    ]
  };

  constructor(props) {
    super(props);

    this.state = {
      boxes: [...this.props.boxes],
      gameStarted: false,
      isWinner: false,
      revealed: []
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
    this.handleReveal = this.handleReveal.bind(this);
  }

  handleShuffle(array) {
    shuffle(array);
  }

  handleStart(array) {
    
    this.setState({
      gameStarted: true,
      
    });
  }

  handleReset() {
    const boxes = this.state.boxes.map((box)=>{
        return {
            id: box.id,
            backgroundColor:box.backgroundColor,
            status: boxStatus.HIDING,
        }
    })
    this.handleShuffle(boxes);
    
    this.setState({
      boxes: boxes,
      revealed: [],
      gameStarted: false,
      isWinner: false
    });
  }

  handleReveal(id) {
    let isWinner = false;
    const revealed = this.state.boxes.filter(box => {
      return box.status === boxStatus.SHOWING || box.status === boxStatus.MATCHED;
    });
    if(revealed.length == 15){
        isWinner = true;
        
    }
    let revealedBoxes = this.state.revealed.slice();
    const boxes = this.state.boxes.map((box, i, arr) => {
        
      if (box.id === id) {
        if (revealedBoxes.length <= 2) {
          box.status = boxStatus.SHOWING;
          revealedBoxes.push(i);
          if (revealedBoxes.length > 1) {
              
              if(arr[revealedBoxes[0]].backgroundColor === box.backgroundColor &&
                arr[revealedBoxes[0]].id !== box.id
                ){
                box.status = boxStatus.MATCHED;
                arr[revealedBoxes[0]].status = boxStatus.MATCHED;
              
              }
            
              
          }
          
        }
      }
      //if not matched we need to reset the boxes

      return box;
    });
    
      //
      this.setState({ boxes, revealed: revealedBoxes, isWinner});
    if (revealedBoxes.length === 2) {
      if (boxes[revealedBoxes[0]].status !== boxStatus.MATCHED) {
          
        boxes[revealedBoxes[0]].status = boxStatus.HIDING;
        boxes[revealedBoxes[1]].status = boxStatus.HIDING;
      }
      this.setState({ boxes, revealed: [] });
    }
  }

  render() {
    let { boxes } = this.state;
    
    this.state.gameStarted ? null : this.handleStart(this.props.boxes);
    boxes = this.state.boxes || boxes;
    
    return [
      <NavBar isWinner={this.state.isWinner} onReset={this.handleReset}/>,
      <GameBoard
        boxes={boxes}
        onReveal={this.handleReveal}
        
      />
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

ReactDOM.render(<App />, document.getElementById("root"));
