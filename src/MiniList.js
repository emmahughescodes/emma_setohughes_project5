import React, { Component } from 'react';
import firebase from './firebase';
//pointing to top level of firebase
// const dbRef = firebase.database().ref();


export const MiniList = (props) => {

    // function getSequence () {
    //     const dbRefGet = firebase.database().ref(`/${props.sequenceId}`);
    //     //what does 'value' mean?
    //     dbRefGet.on('value', (data) => {
    //     const sequenceData = data.val();
    //     return sequenceData;
        // list the wardrobe items from firebase for the specified climate and display them for the user
        // for (key in myApp.wardrobe) {
        //     $('.wardrobeList').append(`<li>${myApp.wardrobe[key]}</li>`);
        // }
        // });
    // }


    
    return (
        <div>
            <div className="content">
                centering: {props.sequenceId['centering'].map((item) => {
                    return <p key={item} className="listItem">{item},</p>
                })}
            </div>
            
            <div className="content">
                warmup: {props.sequenceId['warmup'].map((item) => {
                    return <p key={item} className="listItem">{item},</p>
                })}
            </div>

            <div className="content">
                salutation: {props.sequenceId['salutation'].map((item) => {
                    return <p key={item} className="listItem">{item},</p>
                })}
            </div>

            <div className="content">
                balancing: {props.sequenceId['balancing'].map((item) => {
                    return <p key={item} className="listItem">{item},</p>
                })}
            </div>

            <div className="content">
                twist: {props.sequenceId['twist'].map((item) => {
                    return <p key={item} className="listItem">{item},</p>
                })}
            </div>

            <div className="content">
                meditation: {props.sequenceId['meditation'].map((item) => {
                    return <p key={item} className="listItem">{item},</p>
                })}
            </div>
        </div>
        // <div>
            
        //     <p>There are {props.inventory} donuts left.</p>
        //     <button value={props.id} onClick={props.updateInventory} disabled={isDisabled()}>Buy a donut</button>
        // </div>
    )

    }




