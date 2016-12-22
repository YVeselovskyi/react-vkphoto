import React from 'react';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.loginVK = this.loginVK.bind(this);
    }

    loginVK(){
        VK.Auth.login(authInfo);
    }

    render() {
        return (
            <div>
                <button className="btn" onClick={this.loginVK}>Login</button>
            </div>
        );
    }
}

export default Login;