import React from 'react';
import FrenchToast from './FrenchToast'

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
        this.setState({
            frenchToast: this.state.frenchToast.unshift([1])
        })
    }

    render(){
        return (
            <div>
                <h1 className="title">French Toast Game!</h1>
                <p>The goal of the game is to flip the pieces of french toast at the right time so they are perfectly cooked on both sides.</p>
                <hr></hr>
                <h4>Current Time: </h4>
                <h2>Score</h2>
                    <div className="score">
                        <div className="raw">Raw: 0</div>
                        <div className="cooked">Cooked: 0</div>
                        <div className="burnt">Burnt: 0</div>
                    </div>
                <br></br>
                <div className="french-toast-container">
                    <button onClick={this.addFrenchToast} className="add">add a french toast</button>
                    <br></br><br></br>
                    <div className="french-toasts">
                    {Object.keys(this.state.frenchToast).length !== 0 ?
                this.state.frenchToast.map(toast => <FrenchToast cooking={this.cooking}/>)
                : null }
                        {/* {console.log(Object.keys(this.state.frenchToast).length !== 0)}
                        {this.state.frenchToast.length !== 0 ? this.state.frenchToast.map(toast => <FrenchToast cooking={this.cooking}/>) : null} */}
                    </div>
                </div>
                

            </div>
        )
    }
}

export default Game