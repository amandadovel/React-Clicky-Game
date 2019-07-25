import React from 'react';
import './Container.css';
import Character from '../Character';

// Main container for each character component
// Loops through props.characters which contains array of character images
// Attaches the clickEvent function to each character component

const Container = props => (
    <div 
        className={
            props.shake 
            ? 'container d-flex flex-wrap justify-content-center shake'
            : 'container d-flex flex-wrap justify-content-center'
        }
        >
            {props.characters.map((a, i) => <Character name={a} key={i} clickEvent={props.clickEvent} />)}
        </div>
);

export default Container;