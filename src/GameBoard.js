import React from 'react';
import './GameBoard.css';
import Box from "./Box";

function GameBoard(props){
    const {colors} = props;
    console.log(colors);
    
    
    const boxes = colors.map((color, i) =>(
        <Box color={color} key={i}/>
    ))
    return ([
        <div className="game-board">
            {boxes}
        </div>
    ])
}

export default GameBoard;