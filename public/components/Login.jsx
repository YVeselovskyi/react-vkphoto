import React from 'react';

class Login extends React.Component{
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <button className="btn" onClick={this.props.handleStatus}>Enter VK</button>
            </div>
        );
    }
}

export default Login;
