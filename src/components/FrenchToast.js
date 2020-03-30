import React from 'react';

class FrenchToast extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            timeCooked: 0,
        }
    }

    takeOffToast = (event) => {
        this.props.cooking();
    }

    componentDidMount() {
        this.startInterval();
    }

    startInterval = (event) => {
        setInterval(this.beginCooking(), 1000)
    }

    beginCooking = (event) => {
        this.setState({
            timeCooked: this.state.timeCooked + 1
        })
    }

    render(){
        return(
            <div className='french-toast'>
                <h3>piece of french toast</h3>
                <p>Cooking time: {this.state.timeCooked} second</p>
                <button className="flip" onClick={this.takeOffToast}>Take Off</button>
            </div>
        )
    }
}

export default FrenchToast

// need to add redux to remove pieces of toast based on central store