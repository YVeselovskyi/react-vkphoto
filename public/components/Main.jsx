import React from 'react';
import Login from 'Login';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isAuth: false};
        this.loginVK = this.loginVK.bind(this);
        this.check = this.check.bind(this);
    }

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
                <h2>Main Component</h2>
                <Login handleStatus={this.loginVK}/>
                {this.state.isAuth ? 'True' : 'False'}
            </div>
        );
    }
}

export default Main;
