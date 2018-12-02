import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import answerPoses from "./answerPoses";
import poses from "./poses";

import Sequence from "./Sequence";
import { Community } from "./Community";

//firebase
import firebase from './firebase';
//pointing to top level of firebase
const dbRef = firebase.database().ref();

class App extends Component {
  constructor() {
    super();
    //special one time set state
    this.state = {
      title: "",
      warning: false,
      showCommunityPoses: false,
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
    //update incomplete highlighted red titles
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

    //check if title is empty
    if (this.state.title == "") {
      console.log("where you at, title");
      this.setState({
        warning: true
      })
      let t = document.querySelector(".title");
      t.style.backgroundColor = "red";
    } else {
      let t = document.querySelector(".title");
      t.style.backgroundColor = "white";
    }

    //check form if a section is blank
    if (this.state.answerPoses['centering'].length !== 0 && this.state.answerPoses['warmup'].length !== 0 && this.state.answerPoses['salutation'].length !== 0 && this.state.answerPoses['balancing'].length !== 0 && this.state.answerPoses['twist'].length !== 0 && this.state.answerPoses['meditation'].length !== 0 && this.state.title !== "") {

      console.log("share sequence with community");
      const newSequence = this.state.answerPoses;
      newSequence["title"] = this.state.title;
      dbRef.push(newSequence);

      

      this.setState({
        // title: e.target.value,
        title: "",
        showCommunityPoses: true,
        answerPoses: {
          centering: [],
          warmup: [],
          salutation: [],
          balancing: [],
          twist: [],
          meditation: []
        }
      })
      const checked = document.getElementsByClassName("inputCheckbox");
      for (let i = 0; i < checked.length; i++) {
        checked[i].checked = false;
      }
    } else {
      this.setState({

      })
      this.changeStyle();
    }
  };

  handleChange = (e) => {
    //event happened and then looking at event Obj to see what happened
    // e.target = input --> use the value property to get the value out
    console.log(e.target.value, "this is e");
    this.setState({
      title: e.target.value
    });
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
            <input className="title" onChange={this.handleChange} placeholder="Sequence Title" type="text" value={this.state.title} />
            <input className="share" type="submit" value="save sequence" />
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
        <div className="communityPoses">
          {this.state.showCommunityPoses ? <Community /> : null}
        </div>
      </div>
    );
  }
}

export default App;
