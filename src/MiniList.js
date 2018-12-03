import React, { Component } from 'react';
import firebase from './firebase';
//pointing to top level of firebase
// const dbRef = firebase.database().ref();


export const MiniList = (props) => {
    
    return (
        <div className="contentContainer">
            <div className="content">
                centering: {props.sequenceId['centering'].map((item) => {
                    return <p key={item} className="listItem"> {item},</p>
                })}
            </div>
            
            <div className="content">
                warmup: {props.sequenceId['warmup'].map((item) => {
                    return <p key={item} className="listItem"> {item},</p>
                })}
            </div>

            <div className="content">
                salutation: {props.sequenceId['salutation'].map((item) => {
                    return <p key={item} className="listItem"> {item},</p>
                })}
            </div>

            <div className="content">
                balancing: {props.sequenceId['balancing'].map((item) => {
                    return <p key={item} className="listItem"> {item},</p>
                })}
            </div>

            <div className="content">
                twist: {props.sequenceId['twist'].map((item) => {
                    return <p key={item} className="listItem"> {item},</p>
                })}
            </div>

            <div className="content">
                meditation: {props.sequenceId['meditation'].map((item) => {
                    return <p key={item} className="listItem"> {item},</p>
                })}
            </div>
        </div>
    )
    }




