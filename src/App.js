import React, { Component } from "react";
import Mole from "./Mole";
import "./main.css";

class App extends Component {
  constructor(props) {
    super(props);
    setInterval(this.generateRandom, 2000);
  }

  state = {
    score: 0,
    active: 1, //Point at the active mole ... (bekijk football oplossing ...)
    hitMole: ''
  };

  fillMoleArray = () => {
    const moles = [];
    for (let i = 0; i < 12; i++) {
      moles.push(<Mole active={this.state.active} id={i} checkMove={this.checkHit} />);
    }

    return moles;
  };

  addToScore = () =>{
    let score = this.state.score;
    score = score + 2;
    this.setState({score: score, hitMole: true});
  }

  subtractFromScore = () =>{
    let score = this.state.score;
    if(score >= 1){
      score -= 1
    }
    this.setState({score: score});
  }

  checkHit = (id) =>{
    id === this.state.active ? this.checkDoubleHit() : this.subtractFromScore();
  }

  checkDoubleHit = () =>{
    
    !hitMole ? this.addToScore() : {''};
  }

  generateRandom = () => {
    this.setState({ active: Math.floor(Math.random() * 12) });
  };

  render() {
    return (
      <div className="App">
        <div className="container custom-cursor">{this.fillMoleArray()}</div>
        <div className="score">
          <p>Score: {this.state.score}</p>
        </div>
      </div>
    );
  }
}

export default App;