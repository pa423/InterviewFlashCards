import React, { Component } from 'react';
import './button.css';
import store from '../index.js';
import { getRandom } from '../Actions/actions.js';

class Button extends Component{
    constructor(props){
        super(props);

        this.selectCard = this.selectCard.bind(this);
    }

    // getRandom()
    // {
    //     store.dispatch(selectCard());
    // }

    selectCard(){
        this.props.selectCard();
    }

    render(props){
        return(
            <div className="buttonContainer">
                <button className="btn" >Previous</button>
                <button className="btn" onClick={this.selectCard}>Random</button>
                <button className="btn" >Next</button>
            </div>
        )
    }
}

export default Button