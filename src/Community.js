import React, { Component } from 'react';

import {MiniList} from "./MiniList";

import firebase from './firebase';
//pointing to top level of firebase
const dbRef = firebase.database().ref();

export class Community extends Component {
    constructor() {
        super();
        this.state = {
            sequenceLibrary: {},
            showPoses: false,
            targetSequence: ""
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
        console.log(e.target.id, "target id value");
        //if you are not showing any sequences, start showing sequences
        if (this.state.showPoses === false) {
            this.setState({
                showPoses: true,
                targetSequence: e.target.id
            });
        } else {
            //if you are showing sequences, stop showing sequences
            this.setState({
                showPoses: false
            });
        }
    }

    render() {
        return (
            <div className="Community">
                <h1>Thank you for sharing <span aria-label="heart" role="img">❤️</span></h1>
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
                    <div className="miniList">
                        {this.state.showPoses ? <MiniList sequenceId={this.state.targetSequence} /> : null}
                    </div>

                </section>
            </div>
        );
    }
}

{/* <MiniList sequenceId={this.state.targetSequence} /> */}