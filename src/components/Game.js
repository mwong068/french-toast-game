import React from 'react';
import FrenchToast from './FrenchToast';


class Game extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            time: undefined,
            frenchToast: [],
            raw: 0,
            cooked: 0,
            burnt: 0
        }
    }
    
    addFrenchToast = (event) => {
        console.log('adding french toast!')
        this.setState({
            frenchToast: this.state.frenchToast.concat([1])
        })
    }

    cooking = (event) => {
        console.log('cooking!')
        this.state.frenchToast.pop()
        this.setState({
            frenchToast: this.state.frenchToast,
            cooked: this.state.cooked += 1
        })
    }

    render(){
        return (
            <div>
                <h1 className="title">French Toast Game!</h1>
                <p>The goal of the game is to flip the pieces of french toast at the right time so they are perfectly cooked on both sides.</p>
                <hr></hr>
                <p><b>Current Time:</b> {Date().toString()}</p>
                <h2>Score</h2>
                    <div className="score">
                        <div className="raw">Raw: {this.state.raw}</div>
                        <div className="cooked">Cooked: {this.state.cooked}</div>
                        <div className="burnt">Burnt: {this.state.burnt}</div>
                    </div>
                <br></br>
                <div className="french-toast-container">
                    <button onClick={this.addFrenchToast} className="add">add a french toast</button>
                    <br></br><br></br>
                    <div className="french-toasts">
                    {Object.keys(this.state.frenchToast).length !== 0 ?
                this.state.frenchToast.map(toast => <FrenchToast cooking={this.cooking} time={Date()}/>)
                : null }
                    </div>
                </div>
                

            </div>
        )
    }
}

export default Game