import React from 'react';
import './Character.css';

// On click callback function
// The clicked elements value can be passed to props.clickEvent 
// Checks if image has already been clicked

const Character = props => (
    <div className="card" onClick={e => props.clickEvent(e.target.src)}>
        <img className="card-img-top card-height" src={props.name} alt="" />
    </div>
)

export default Character;