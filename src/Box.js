import React from 'react';
import './Box.css';

function Box(props){
    const {color, status, id, onReveal} = props;
    return([
        <div 
            className="box"
            style={status === 1 || status === 3 ? 
                    {backgroundColor:`${color}`} : 
                    null}   
            onClick={()=>(onReveal(id))} 
        ></div>
    ])
}

export default Box;