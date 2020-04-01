import React from 'react';
import FrenchToast from './FrenchToast';


class Game extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            frenchToast: [],
            raw: 0,
            cooked: 0,
            burnt: 0
        }
    }
    
    addFrenchToast = (event) => {
        if (this.state.frenchToast.length === 0) {
            let starting = this.state.frenchToast.concat(1)
            this.setState({
                frenchToast: starting
            })
        }
        else {
        let toastLength = this.state.frenchToast.length
        let newToasts = this.state.frenchToast.concat(this.state.frenchToast[toastLength-1] + 1)
        this.setState({
            frenchToast: newToasts
        })
        }
    }

    cooking = (cooked, key) => {
        let removeToast = this.state.frenchToast.find(toast => toast === key)
        console.log(removeToast)
        this.state.frenchToast.splice(removeToast, 1)
        if (cooked === 3) {
            this.setState({
                frenchToast: this.state.frenchToast,
                cooked: this.state.cooked += 1
            })
        }
        else if (cooked <= 2) {
            this.setState({
                frenchToast: this.state.frenchToast,
                raw: this.state.raw += 1
            })
        }
        else {
            this.setState({
                frenchToast: this.state.frenchToast,
                burnt: this.state.burnt += 1
            })
        }
        
    }

    render(){
        return (
            <div>
                <h1 className="title">French Toast Game!</h1>
                <p>The goal of the game is to take the pieces of french toast off the grill at the right time so they are perfectly cooked.</p>
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
                    {Object.keys(this.state.frenchToast).length !== 0 ? this.state.frenchToast.map((toast, index) => (<FrenchToast key={toast} id={index} cooking={this.cooking}/>)) : null }
                    </div>
                </div>
                

            </div>
        )
    }
}

export default Game