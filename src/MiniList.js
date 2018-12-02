import React, { Component } from 'react';
import firebase from './firebase';
//pointing to top level of firebase



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
            <h2>I am a {props.sequenceId} donut.</h2>

        </div>
        // <div>
            
        //     <p>There are {props.inventory} donuts left.</p>
        //     <button value={props.id} onClick={props.updateInventory} disabled={isDisabled()}>Buy a donut</button>
        // </div>
    )

    }




