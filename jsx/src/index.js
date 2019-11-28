// import React & ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create react component - can be a function or class

function getButtonText() {
    return 'Click on me!';
}

// function component
// "" (double quotes) = string in JSX
// '' (single quotes) = non-JSX properties 
// class = className in JSX (to avoid class functions vs class label in jsx)
const App = function () {
    // const buttonText = { text: 'Click here' };
        // can be string, numbers, array, but not objects unless called properly (ex. buttonText.text)

    return (
        <div>
            <div>Hi, I'm a function!</div> 
            <div>
                <label className="label" htmlFor="name">Enter Name: </label>
                <input id="name" type="text" />
                <button style={{ border: '2px solid blue', backgroundColor: "black", color: "white"}}>{getButtonText()}</button>
            </div>
        </div>
    );
}

/* // class component
class App extends React.Component {
    render() {
        return (
            <div>
                Hello, I'm a class
            </div>
        )
    }
}
*/

// take react component and display on screen
ReactDOM.render(
    <App />,
    // which div to display the component to(?)
    document.querySelector('#root')
);