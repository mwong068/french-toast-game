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
            <div>
                {this.state.timeCooked <= 3 ? 
                (<div className="toastie">
                    <div>
                    Cooking time: {this.state.timeCooked} second  
                    </div>
                    <div className='french-toast'>
                    </div>
                    <div>
                    <button className="flip" onClick={this.takeOffToast}>Take Off</button>
                    </div>
                </div>) : 
                (<div  className="toastie">
                    <div>
                    Cooking time: {this.state.timeCooked} second
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