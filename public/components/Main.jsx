import React from 'react';
import Login from 'Login';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.isLogged = !!localStorage.getItem('isLogged');
    }
    render() {
        return (
            <div>
                <h2>Main Component</h2>
                <Login loggedIn={this.isLogged}/>
            </div>
        );
    }
}

export default Main;