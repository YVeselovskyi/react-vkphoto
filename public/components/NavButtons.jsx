import React from 'react';
import ProfilePhotos from 'ProfilePhotos';
import WallPhotos from 'WallPhotos';

class NavButtons extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='container'>
              <div className='row'>
                <div className='col-md-4'><ProfilePhotos/></div>
                <div className='col-md-4'><WallPhotos/></div>
              </div>
            </div>
        );
    }
}

export default NavButtons;
