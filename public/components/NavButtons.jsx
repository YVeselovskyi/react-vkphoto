import React from 'react';
import ProfilePhotos from 'ProfilePhotos';
import WallPhotos from 'WallPhotos';
import SavedPhotos from 'SavedPhotos';

class NavButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {photos : []};
    }
    loadPhotos(album){
      let that = this;
      VK.api('photos.get', { album_id: album }, function(result){
        if(result.response){
          that.setState({photos : result.response})
        }
      });
    }
    render() {
        let loadedPhotos = this.state.photos;
        return (
            <div className='container'>
              <div className='row'>
                <div className='col-md-4'><ProfilePhotos getPhotos={() => this.loadPhotos('profile')}/></div>
                <div className='col-md-4'><WallPhotos getPhotos={() => this.loadPhotos('wall')}/></div>
                <div className='col-md-4'><SavedPhotos getPhotos={() => this.loadPhotos('saved')}/></div>
              </div>
              <div>
                {loadedPhotos.map((e) => {
                  return <img src={e.src_big}/>
                })}
              </div>
            </div>
        );
    }
}

export default NavButtons;
