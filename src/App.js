import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import poses from "./poses";
// import answerPoses from "./answerPoses";

import firebase from './firebase';
import Sequence from "./Sequence";
import Alert from "./Alert";
//pointing to top level of firebase
const dbRef = firebase.database().ref();


class App extends Component {
  constructor() {
    super();
    //special one time set state
    this.state = {
      alert: false,
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
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const checkArray1 = Object.keys(this.state.answerPoses);
    for (let i in checkArray1) {
      // this.state.answerPoses[checkArray1[i]] 
      let z1 = document.querySelectorAll("fieldset h2");
      for (let k = 0; k < z1.length; k++) {
        if (this.state.answerPoses[checkArray1[i]].length !== 0) {
          z1[k].style.backgroundColor = "white"; 
        }
      }
    }


    //check form if a section is blank
    if (this.state.answerPoses['centering'].length !== 0 && this.state.answerPoses['warmup'].length !== 0 && this.state.answerPoses['salutation'].length !== 0 && this.state.answerPoses['balancing'].length !== 0 && this.state.answerPoses['twist'].length !== 0 && this.state.answerPoses['meditation'].length !== 0) {

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
    }})} else {
      this.setState({
        alert: true
      });
      this.changeStyle();
    }
  };

  changeStyle = () => {
    const checkArray = Object.keys(this.state.answerPoses);

    for (let i in checkArray) {
      if (this.state.answerPoses[checkArray[i]].length == 0) {
        let z = document.querySelectorAll("fieldset h2");
        z[i].style.backgroundColor = "red"; 
      }
    }
  }

  render() {
    return (
      <div className="App wrapper">
        <h1>Just Some Poses</h1>
        <div className="posePlanner">
          <form action="" onSubmit={this.handleSubmit}>
            <div className="selection">
            {Object.keys(poses).map((key, i) => {
              return <Sequence key={`sequence-${i}`} poseKey={key} posesForSection={poses[key]} updateUserSequence={(e) => this.updateUserSequence(e, key)} />
            })
            }
            </div>
            <input className="share" type="submit" value="save sequence"/>
          </form>
        </div>
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
          <div className="alert">
            {/* {this.state.alert ? this.changeStyle() : null} */}
          </div>
        
       
      </div>
    );
  }
}

export default App;
// {this.state.showCommunityPoses ? <CommunityPoses /> : null}