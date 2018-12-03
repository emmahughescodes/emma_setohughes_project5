import React, { Component } from 'react';

import { MiniList } from "./MiniList";

import firebase from './firebase';
//pointing to top level of firebase
const dbRef = firebase.database().ref();

export class Community extends Component {
    constructor() {
        super();
        this.state = {
            sequenceLibrary: {},
            showPoses: false,
            targetSequence: "",
            colorButton: false
        };
    };

    componentDidMount() {
        console.log("I mounted");

        //attach event listerner to firebase
        dbRef.on('value', (snapshot) => {
            // console.log(snapshot.val());
            this.setState({
                sequenceLibrary: snapshot.val()
            })
        });
    }
    //view poses from the community
    handleChange = (e) => {
        console.log(e.target.id, "target value");
        //if you are not showing any sequences, start showing sequences
        if (this.state.showPoses === false) {
            this.styleButton(e);
            this.setState({
                showPoses: true,
                targetSequence: e.target.id,
                colorButton: true
            });
            // this.styleButton(e);  
        } else {
            //if you are showing sequences, stop showing sequences
            this.styleButton(e);
            this.setState({
                showPoses: false,
                colorButton: false
            });
            // this.styleButton(e);
        }
    }
    styleButton = (e) => {
        let z = document.getElementById(`${e.target.id}`);
        //check if the button is green or white
        if (this.state.colorButton === true) {
            z.style.backgroundColor = "white";
            console.log(this.state.colorButton, "CBT");
        } else {
            let j = document.getElementsByClassName(`sequenceButton`);
            for (let t = 0; t < j.length; t++) {
                j[t].style.backgroundColor = "white";
            }
            this.setState({
                showPoses: true,
                colorButton: false
            });
            z.style.backgroundColor = "#C3E7F1";
            console.log(this.state.colorButton, "CBF");
        }
    }

    handleRestart = () => {
        window.location.reload();
    }

    render() {
        return (
            <div className="community">
                <h1>Thanks for sharing xo</h1>
                <h2>View other sequences in the community</h2>
                <section className="buttonContainer">
                    {
                        Object.entries(this.state.sequenceLibrary).map((sequence, i) => {
                            console.log(sequence);
                            return (
                                <div className="buttonDiv" key={sequence[0]}>
                                    <button className="sequenceButton" id={sequence[0]} onClick={this.handleChange} value={sequence[1].title}>{sequence[1].title}</button>
                                </div>
                            )
                        })
                    }
                    
                </section>
                <div className="miniList">
                    {this.state.showPoses ? <MiniList sequenceId={this.state.sequenceLibrary[this.state.targetSequence]} /> : null}
                </div>
                <section className="restart">
                    <button className="sequenceButton buttonHover" onClick={this.handleRestart}>Contribute More?! <span aria-label="unicorn" role="img">🦄</span></button>
                </section>
            </div>
        );
    }
}


