import React, { Component } from 'react';
import './button.css';

class Button extends Component{
    constructor(props){
        super(props);

        this.drawCard = this.drawCard.bind(this);
    }

    // getRandom()
    // {
    //     store.dispatch(drawCard());
    // }

    drawCard(){
        this.props.drawCard();
    }

    render(props){
        return(
            <div className="buttonContainer">
                <button className="btn" onClick={this.drawCard}>Random Card</button>
            </div>
        )
    }
}

export default Button