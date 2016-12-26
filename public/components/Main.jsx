import React from 'react';
import Login from 'Login';
import NavButtons from 'NavButtons';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isAuth: false, greeting : ''};
        this.loginVK = this.loginVK.bind(this);
        this.check = this.check.bind(this);
    }

    loginVK(){
      let that = this;
      function checkAuth(response) {
          if (response.session) {
            VK.api('users.get', {users_id: response.session.mid} , function(result){
              if(result.response){
                let {first_name, last_name} = result.response[0];
                that.setState({greeting: `Hello, ${first_name} ${last_name}`});
              }
            });
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
                VK.api('users.get', {users_id: response.session.mid} , function(result){
                  if(result.response){
                    let {first_name, last_name} = result.response[0];
                    that.setState({greeting: `Hello, ${first_name} ${last_name}`});
                  }
                });
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
                <h2>VK PhotoApp</h2>
                {this.state.isAuth ? this.state.greeting : <Login handleStatus={this.loginVK}/>}
                {this.state.isAuth ? <NavButtons/> : 'Please enter your VK account'}
            </div>
        );
    }
}

export default Main;
