import React from 'react';
import NavButtons from 'NavButtons';

class Login extends React.Component{
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <button className="btn" onClick={this.props.handleStatus}>Login</button>
            </div>
        );
    }
}


export default Login;
