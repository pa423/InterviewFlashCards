import React, { Component } from 'react';
import './card.css';

const card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="question">{props.question}</div>
            </div>
            <div className="front back">
                <div className="answer">{props.answer}</div>
            </div>
        </div>
    </div>
)

export default card