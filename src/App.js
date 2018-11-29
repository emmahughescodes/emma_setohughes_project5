import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import poses from "./poses";
// import answerPoses from "./answerPoses";

import firebase from './firebase';
import Sequence from "./Sequence";
//pointing to top level of firebase
const dbRef = firebase.database().ref();


class App extends Component {
  constructor() {
    super();
    //special one time set state
    this.state = {
      //pose list is an object because everything from firebase is returned as an object
      poses: poses,
      // answerPoses: {
        answercentering: [],
        answerwarmup: [],
        answersalutation: [],
        answerbalancing: [],
        answertwist: [],
        answermeditation: []
      // }
    };
  };

  updateUserSequence = (event, poseKey) => {
    console.log("i am hereeee");
    const stateKey = 'answer' + poseKey;
    const newPoses = this.state[stateKey];
    
    if (newPoses.includes(event.target.value)) {
      const poseIndex = newPoses.indexOf(event.target.value);
      newPoses.splice(poseIndex, 1);
    }  else {
      newPoses.push(event.target.value);
    }
    this.setState({
      //how to add poses to an object at a certain key
      // answerPoses: answerPoses[poseKey].push("made it!")
      [stateKey]: newPoses
    });
  };

  viewSequence = (e) => {
    e.preventDefault();
    console.log("submit, please");
  }

  render() {
    return (
      <div className="App">
        <h1>Just Some Poses</h1>
        <form action="" onSubmit={this.viewSequence}>
          
          {Object.keys(this.state.poses).map((key, i) => {
            return <Sequence key={`sequence-${i}`} poseKey={key} posesForSection={poses[key]} updateUserSequence={(e) => this.updateUserSequence(e, key)} />
          })
          }

          <input type="submit"/>
        </form>



        
        

      </div>
    );
  }
}

export default App;
