import React from 'react';
import './Box.css';

function Box(props){
    const {colors} = props;
    return([
        <div 
            className="box"
            style={props.isSelected ? 
                    {backgroundColor:`${colors.color}`} : 
                    null}    
        ></div>
    ])
}

export default Box;