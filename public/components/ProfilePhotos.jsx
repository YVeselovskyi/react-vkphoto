import React from 'react';

class ProfilePhotos extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button className='btn btn-success' onClick={this.props.getPhotos}>Profile Photos</button>
            </div>
        );
    }
}

export default ProfilePhotos;
