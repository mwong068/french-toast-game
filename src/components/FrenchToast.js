import React from 'react';

class FrenchToast extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            timeCooked: 0,
        }
    }

    componentDidMount() {
        this.startInterval();
    }

    startInterval = (event) => {
       this.interval = setInterval(this.beginCooking, 1000)
    }

    beginCooking = (event) => {
        this.setState({
            timeCooked: this.state.timeCooked + 1
        })
    }

    takeOffToast = (event) => {
        clearInterval(this.interval)
        this.props.cooking(this.state.timeCooked, this.props.id);
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

// need to figure out how to keep track of time on each piece of french toast