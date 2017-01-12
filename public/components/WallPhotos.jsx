import React from 'react';

class WallPhotos extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button className='btn btn-success' onClick={this.props.getPhotos}>Wall Photos</button>
            </div>
        );
    }
}

export default WallPhotos;
