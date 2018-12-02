import React, { Component } from 'react';
import firebase from './firebase';
//pointing to top level of firebase
const dbRef = firebase.database().ref();

export class Community extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    };
    
    componentDidMount() {
        console.log("I mounted");

        //attach event listerner to firebase
        dbRef.on('value', (snapshot) => {
            console.log(snapshot.val());
            const sequenceLibrary = snapshot.val();

        });
    }

    render() {
        return (
            <div className="Community">
                <h1>Firebase Bookshelf</h1>
                   
                {/* <section>
                    {
                        //calling method on the JS object. The object that makes all the other objects
                        Object.entries(this.state.bookList).map((book) => {
                            console.log(book);
                            return (
                                <div key={book[0]}>
                                    <h2>{book[1].title}</h2>
                                    <p>By: {book[1].author}</p>
                                    <button id={book[0]} onClick={this.deleteBook}>Delete This Book</button>
                                </div>
                            )
                        })
                    }
                </section> */}
            </div>
        );
    }
}

