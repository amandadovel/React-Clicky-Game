import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.svg';

const Navbar = props => (

    <div className="navbar fixed-top px-4">
        <div className="d-flex align-items-center">
            <img src={logo} className="logo" alt="logo" />
            <div className="navbar-brand">Clicky Game</div>
        </div>
        <div className={"msg " + props.navMsgColor}>{props.navMessage}</div>
        <div className="score">
            Score: {props.score} <span className="pipe">|</span> High Score: {props.highScore}
        </div>

    </div>

);

export default Navbar;