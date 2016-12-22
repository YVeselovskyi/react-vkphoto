import React from 'react';
import Login from 'Login';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Main Component</h2>
                <Login/>
            </div>
        );
    }
}

export default Main;