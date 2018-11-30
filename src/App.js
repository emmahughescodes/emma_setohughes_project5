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
    const newSequence = this.state.answerPoses;
    dbRef.push(newSequence);
    this.setState({
      answerPoses: {
        centering: [],
        warmup: [],
        salutation: [],
        balancing: [],
        twist: [],
        meditation: []
      }
    });
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

          <div className="results">
  
            {Object.keys(this.state.answerPoses)
              .map((keyVal) => {
                return this.state.answerPoses[keyVal].map((item) => {
                  console.log(item, "item");
                  return (<h1 key={item}>{item}</h1>)
                })
              }
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
