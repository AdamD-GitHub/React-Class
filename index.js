/*----------------------------------------------------------------------*/
// Excercise 1-8, 10Filter, extra, 11
/*----------------------------------------------------------------------*/

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './original/serviceWorker';
import './original/index.css';
// Change the path below ---------
import App from './extra2/App';
// Change the path above ---------

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/*----------------------------------------------------------------------*/
// Excercise 9  
/*----------------------------------------------------------------------*/
/*
import React from 'react';
import ReactDOM from 'react-dom';
// import './original/index.css';
import App from './ex09/App';
import * as serviceWorker from './original/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

const renderedApp = ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

const milliseconds = 3000;

setTimeout(() => {
    console.warn('author.name starts with', renderedApp.props.author.name);
    console.info('Changing props author\'s name to Mr. Author...');
    renderedApp.props.author.name = "Mr. Author";
    console.warn('author.name is', renderedApp.props.author.name);
    console.info('End 1.');
}, milliseconds*1); 

setTimeout(() => {
    // adding this code causes any subsequent changes to be ignored including this one
    // console.info('Changing props object {author:  Mr. User}...');
    // renderedApp.props = {
    //     author: {name: 'Mr. User', company: 'Building Corp.'}
    // };
    console.warn('author.name is', renderedApp.props.author.name);
    console.info('End 2.');
}, milliseconds*2); 

setTimeout(() => {
    console.info('Changing props author\'s name to Mr. Updated...');
    renderedApp.props.author.name = "Mr. Updated ";
    console.warn('author.name now is', renderedApp.props.author.name);
    console.info('End 3.');
}, milliseconds*3); 

setTimeout(() => {
    console.info('Changing props author\'s name to Mr. Changed...');
    renderedApp.props.author.name = "Mr. Changed";
    console.warn('author.name now is', renderedApp.props.author.name);
    console.info('End 4');
}, milliseconds*4); 

setTimeout(() => {
    console.info('Updating the state and forcing render...');
    renderedApp.changeState();
    console.warn('author.name now is', renderedApp.props.author.name);
    console.info('End 5');
}, milliseconds*5); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
/*----------------------------------------------------------------------*/
// Excercise 10 
/*----------------------------------------------------------------------*/
/*
import React from 'react';
import ReactDOM from 'react-dom';
// import './original/index.css';
import App from './ex10/App';
import * as serviceWorker from './original/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
const renderedApp = ReactDOM.render(
    <App />, 
    document.getElementById('root')
);

setTimeout(() => {
    console.log(8.1,'Mr. Lemon', 'Yellow Freight' );
    renderedApp.setState({
        exercise  : { number: 8.1, title: 'State change 1'},
        author    : {name: 'Mr. Lemon', company: 'Yellow Freight'},
        update : {
          date: new Date().toLocaleDateString(), 
          time: new Date().toLocaleTimeString()
        }
    });
}, 3000);

setTimeout(() => {
    console.log(8.2,'Mr. Rich', 'Success Corp.' );
    renderedApp.setState({
        exercise  : { number: 8.2, title: 'State change 2'},
        author    : {name: 'Mr. Rich', company: 'Success Corp.'},
        update : {
          date: new Date().toLocaleDateString(), 
          time: new Date().toLocaleTimeString()
        }
    });
}, 6000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
