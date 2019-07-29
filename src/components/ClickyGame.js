import React, { Component } from 'react';
import Navbar from './Navbar';
import Container from './Container';
import Footer from './Footer';
import Banner from './Banner';
import images from '../images';

class ClickyGame extends Component {
    state = {
        score: 0,
        highScore: 0,

        // Stores class value to assign to navMessage based on good or bad click
        navMsgColor: '',

        // Contains array of image urls
        allCharacters: this.shuffleArray(),

        // Tracks each clicked element
        wasClicked: [],

        // Shakes the container on incorrect guess if set to true
        shake: false
    };

    // Binds current 'this' context to checkClicked
    // Allows access to current state
    clickEvent = this.checkClicked.bind(this);

    // Shuffle the array of images when the DOM loads and when an image is clicked
    shuffleArray() {
        // Creates copy of current characters array
        // Able to modify by value not by reference
        const newArr = images.slice();

        // Stores the shuffled Array
        const shuffleArr = [];

        // Each loop through an index gets spliced from newArr, reducing its length
        // Gets random index based off the current length of newArr
        // Splices the value from newArr, and pushes to shuffleArr
        while (newArr.length > 0) {
            shuffleArr.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
        }

        return shuffleArr;
    }

    checkClicked(clickedElem) {
        // Creates copy of wasClicked array to modify by value not by reference
        // wasClicked stores all previous clicked images
        const prevState = this.state.wasClicked.slice();

        // Shuffle images
        const shuffled = this.shuffleArray();

        // Tracks score 
        let score = this.state.score;
        let highScore = this.state.highScore;

        // If clicked image is not in 'wasClicked' array, score is increased
        if (!this.state.wasClicked.includes(clickedElem)) {
            // If score = highScore, then there is new highScore Value
            if (score === highScore) {
                score++;
                highScore++;

                // Otherwise only increase score value
            } else {
                score++;
            }

            // If this runs, the same element has not been clicked twice and score is increased
            this.setState({
                score: score,
                highScore: highScore,
                navMsgColor: 'correct',
                navMessage: 'Correct!',
                allCharacters: shuffled,
                wasClicked: prevState,
                shake: false
            });

            // adds clicked item to 'wasClicked' 
            prevState.push(clickedElem);
            
            // Removes green correct indicator on a successful click after .5s
            // Re-renders the class on each success
            return setTimeout(() => this.setState({ navMsgColor: '' }), 500);
        }

        // Resets the current score if the same element was clicked twice
        if (this.state.wasClicked.includes(clickedElem)) {
            let score = 0;
            this.setState({
                score: score,
                highScore: highScore,
                navMsgColor: 'incorrect',
                navMessage: 'Incorrect!',
                allCharacters: shuffled,
                wasClicked: [],
                shake: true
            });

            // Removes green correct indicator on a successful click after .5s
            // Re-renders the class on each success
            return setTimeout(() => this.setState({ navMsgColor: '' }), 500);
        }

    }
    // Renders score to navbar
    // Passes randomized 'state.allCharacters' array to Container
    // Creates a character component for each image
    // Passes 'this.checkClicked' to container to pass to each character component for click event
    render() {
        // console.log(this.state);
        const state = this.state;
        return (
            <>
                <Navbar
                    score={state.score}
                    highScore={state.highScore}
                    navMessage={state.navMessage}
                    navMsgColor={state.navMsgColor}
                />
                <Banner />
                <Container
                    shake={state.shake}
                    characters={state.allCharacters}
                    clickEvent={this.clickEvent}
                />
                <Footer />
            </>
        );
    }
}

export default ClickyGame;