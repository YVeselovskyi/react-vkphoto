import React from 'react';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.loginVK = this.loginVK.bind(this);
        this.state = {isAuth: 'Auth'}
    }

    loginVK(){
        VK.Auth.login(authInfo);
    }

    render() {
        return (
            <div>
                <button className="btn" onClick={this.loginVK}>Login</button>
                <h1>{ this.props.loggedIn ?  'You are logged In' : 'You are not logged In' }</h1>
            </div>
        );
    }
}

export default Login;