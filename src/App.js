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
      answerPoses: {
        centering: [],
        warmup: [],
        salutation: [],
        balancing: [],
        twist: [],
        meditation: []
      }
    };
  };


  updateUserSequence = (event, poseKey) => {
    console.log("i am hereeee");
    console.log(event.target.value);
    console.log(poseKey);
    const newPoses = this.state.answerPoses[poseKey];

    if (newPoses.includes(event.target.value)) {
      const poseIndex = newPoses.indexOf(event.target.value);
      newPoses.splice(poseIndex, 1);
      // console.log(stateKey, "stateKey");
      console.log(newPoses, "newPoses");
    } else {
      newPoses.push(event.target.value);
    }
    this.setState({
      answerPoses: {
        ...this.state.answerPoses,
        [poseKey]: newPoses
      }
    });
    console.log("this.state.newPose", newPoses);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("share sequence with community");

  }

  render() {
    return (
      <div className="App">
        <h1>Just Some Poses</h1>
        <div className="posePlanner">
          <form action="" onSubmit={this.handleSubmit}>

            {Object.keys(poses).map((key, i) => {
              return <Sequence key={`sequence-${i}`} poseKey={key} posesForSection={poses[key]} updateUserSequence={(e) => this.updateUserSequence(e, key)} />
            })
            }
            <input type="submit" />
          </form>

          {/* <div className="results">
            {this.state.answerPoses.map((answer, i) => <h1 key={i}>{answer}</h1>)} */}
          {/* {this.state.answerwarmup.map((answer, i) => <h1 key={i}>{answer}</h1>)}
            {this.state.answersalutation.map((answer, i) => <h1 key={i}>{answer}</h1>)}
            {this.state.answerbalancing.map((answer, i) => <h1 key={i}>{answer}</h1>)}
            {this.state.answertwist.map((answer, i) => <h1 key={i}>{answer}</h1>)}
            {this.state.answermeditation.map((answer, i) => <h1 key={i}>{answer}</h1>)} */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default App;
