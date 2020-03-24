import React from 'react';
import FrenchToast from './FrenchToast'

class Game extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            time: undefined,
            frenchToast: []
        }
    }
    
    addFrenchToast = (event) => {
        console.log('adding french toast!')
        this.setState({
            frenchToast: this.state.frenchToast.concat([1])
        })
    }

    render(){
        return (
            <div>
                <h1>French Toast Game!</h1>
                <h2>Timer: </h2>
                <button onClick={this.addFrenchToast} className="add">add a french toast</button>
                <br></br><br></br>
                <div className="french-toast-container">
                    {this.state.frenchToast.map(toast => <FrenchToast />)}
                </div>

            </div>
        )
    }
}

export default Game