import React from 'react';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isAuth: false};
        this.check = this.check.bind(this);
        this.loginVK = this.loginVK.bind(this);
    };


    loginVK(){
        let that = this;
        function checkAuth(response) {
            if (response.session) {
                that.setState({
                    isAuth: true
                })
            } else {
                that.setState({
                    isAuth: false
                })
            }
        }
        VK.Auth.login(checkAuth);
    }

    componentDidMount() {
        this.check();
    }

    check(){
        let that = this;
        function checkAuth(response) {
            if (response.session) {
                that.setState({
                    isAuth: true
                })
            } else {
                that.setState({
                    isAuth: false
                })
            }
        }
        VK.Auth.getLoginStatus(checkAuth);
    }


    render() {
        return (
            <div>
                <button className="btn" onClick={this.loginVK}>Login</button>
                <h1>{ this.state.isAuth ?  'You are logged In' : 'You are not logged In' }</h1>
            </div>
        );
    }
}


export default Login;