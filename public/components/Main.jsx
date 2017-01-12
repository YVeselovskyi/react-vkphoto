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
            <div className='center'>
                <h1>VK PhotoApp</h1>
                {this.state.isAuth ? <h3>{this.state.greeting}</h3> : <Login handleStatus={this.loginVK}/>}
                {this.state.isAuth && <p>Click buttons below to see photos from your albums </p>}
                {this.state.isAuth ? <NavButtons/> : 'Please enter your VK account'}
            </div>
        );
    }
}

export default Main;
