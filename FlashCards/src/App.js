import React, { Component } from 'react';
import './App.css';
import Card from './Cards/card.js';
import Button from './Buttons/button.js';
// import { Provider } from 'react-redux';
// import store from './index.js';
// import ReactDOM from 'react-dom';

//Database
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
          <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <a className="navbar-brand" href="#">Filters:</a>
                  </div>
                  <button className="btn btn-primary navbar-btn">Java</button>
                  <button className="btn btn-success navbar-btn">Python</button>
                  <button className="btn btn-info navbar-btn">JS</button>
                  <button className="btn btn-warning navbar-btn">SQL</button>
                  <button className="btn btn-danger navbar-btn">Other</button>
              </div>
          </nav>
          <div className="cardRow">
            <Card question={this.state.currentCard.question}
                  answer={this.state.currentCard.answer}
            />
          </div>
          <div className="allButtons">
              <div className="buttonRow">
                  <Button selectCard = {this.updateCard}/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
