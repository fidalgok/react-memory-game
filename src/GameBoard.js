import React from 'react';
import './GameBoard.css';
import Box from "./Box";

function GameBoard(props){
    
    const boxArr = props.boxes;
    
    const boxes = boxArr.map((box, i) =>(
        <Box color={box.backgroundColor} key={box.id} id={box.id} status={box.status} onReveal={props.onReveal}/>
    ))
    return ([
        <div className="game-board">
            {boxes}
        </div>
    ])
}

export default GameBoard;