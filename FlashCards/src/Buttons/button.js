import React, { Component } from 'react';
import './button.css';
import store from '../index.js';
import { getRandom } from '../Actions/actions.js';

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
                <button className="btn" >Previous</button>
                <button className="btn" onClick={this.drawCard}>Random</button>
                <button className="btn" >Next</button>
            </div>
        )
    }
}

export default Button