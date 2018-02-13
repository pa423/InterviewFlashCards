import React, { Component } from 'react';
import './App.css';
import Card from './Cards/card.js';
import Button from './Buttons/button.js';
import { config } from './db.js';
import firebase from 'firebase/app';
import 'firebase/database';

class App extends Component {
  constructor(props){
    super(props);

    this.app = firebase.initializeApp(config);
    this.database = this.app.database().ref().child('cards');
    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [],
      currentCard: {}
      }
    }

  componentWillMount(){
    const currentCards = this.state.cards;

      this.database.on('child_added', snap => {
          currentCards.push({
              id: snap.key,
              question: snap.val().question,
              answer: snap.val().answer,
          })

          this.setState({
              cards: currentCards,
              currentCard: this.getRandomCard(currentCards)
          })
      })
  }

    getRandomCard(currentCards){
        var card = currentCards[Math.floor(Math.random() * currentCards.length)];

        return(card);
    }

    updateCard(){
        const currentCards = this.state.cards;
        this.setState({
            cards: currentCards,
            currentCard: this.getRandomCard(currentCards)
        })
  }

  render() {
    return (
      <div className="App">
          <div className="cardRow">
            <Card question={this.state.currentCard.question}
                  answer={this.state.currentCard.answer}
            />
          </div>
          <div className="buttonRow">
              <Button drawCard = {this.updateCard}/>
          </div>
      </div>
    );
  }
}

export default App;
