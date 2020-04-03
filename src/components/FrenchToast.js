import React from 'react';

class FrenchToast extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            sideOne: 0,
            flipped: false,
            sideTwo: 0
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
            sideOne: this.state.sideOne + 1
        })
    }

    flipToast = (event) => {
        clearInterval(this.interval)
        this.setState({
            flipped: true
        })
        this.interval = setInterval(this.continueCooking, 1000)
    }

    continueCooking = (event) => {
        this.setState({
            sideTwo: this.state.sideTwo + 1
        })
    }
    
    takeOffToast = (event) => {
        clearInterval(this.interval)
        this.props.cooking(this.state.sideOne, this.state.sideTwo, this.props.id);
    }

    render(){
        return(
            <div>
                {this.state.sideOne <= 3 ? 
                (<div className="toastie">
                    <div>
                    Cooking time: {this.state.sideOne} second  
                    </div>
                    <div className='french-toast'>
                    </div>
                    <div>
                    <button className="flip" onClick={this.flipToast}>Flip Over</button>
                    </div>
                </div>) : 
                (<div  className="toastie">
                    <div>
                    Cooking time: {this.state.sideOne} second
                    </div>
                    <div className='burnt-toast'>
                    </div>
                    <div>
                    <button className="flip" onClick={this.flipToast}>Flip Over</button>
                    </div>
                </div>)
                } 
                {this.state.flipped === true ?
                   (<div className="toastie">
                   <div>
                   Cooking time: {this.state.sideTwo} second  
                   </div>
                   <div className='french-toast'>
                   </div>
                   <div>
                   <button className="flip" onClick={this.takeOffToast}>Take Off</button>
                   </div>
               </div>) : 
               (<div  className="toastie">
                   <div>
                   Cooking time: {this.state.sideTwo} second
                   </div>
                   <div className='burnt-toast'>
                   </div>
                   <div>
                   <button className="flip" onClick={this.takeOffToast}>Take Off</button>
                   </div>
               </div>)
                }
            </div>
        )
    }
}

export default FrenchToast