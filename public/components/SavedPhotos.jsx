import React from 'react';

class SavedPhotos extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button className='btn btn-success' onClick={this.props.getPhotos}>Saved Photos</button>
            </div>
        );
    }
}

export default SavedPhotos;
