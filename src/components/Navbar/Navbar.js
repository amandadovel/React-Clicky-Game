import React from 'react';
import './Navbar.css';

const Navbar = props => (

    <div className="navbar navbar-dark">
        <div className="navbar-brand">Clicky Game</div>
        <div className={props.navMsgColor}>{props.navMessage}</div>
        <div className="score">
            Score: {props.score} <span className="pipe">|</span> High Score: {props.highScore}
        </div>
    </div>

);

export default Navbar;