import React from 'react';

class FrenchToast extends React.Component{

    FlipToast = (event) => {
        console.log('flipping toast!')
    }

    render(){
        return(
            <div className='french-toast'>
                <h3>piece of french toast</h3>
                {/* <br></br> */}
                <button className="flip" onClick={this.FlipToast}>flip</button>
            </div>
        )
    }
}

export default FrenchToast

// need to add redux to remove pieces of toast based on central store