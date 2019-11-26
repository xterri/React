// import React & ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create react component - can be a function or class

// function component
const App = function () {
    return (
        <div>Hi, I'm a function!</div> 
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