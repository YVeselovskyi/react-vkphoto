import React from 'react';
import ProfilePhotos from 'ProfilePhotos';
import WallPhotos from 'WallPhotos';
import SavedPhotos from 'SavedPhotos';
import moment from 'moment';

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
        let loadedPhotos = this.state.photos.reverse();
        const emptyPhotosStyle = {
          margin: '10px 0 0 0',
          fontSize: '16px',
          border: 'none',
        };
        return (
            <div className='container'>
              <div className='row'>
                <div className='col-md-4'><ProfilePhotos getPhotos={() => this.loadPhotos('profile')}/></div>
                <div className='col-md-4'><WallPhotos getPhotos={() => this.loadPhotos('wall')}/></div>
                <div className='col-md-4'><SavedPhotos getPhotos={() => this.loadPhotos('saved')}/></div>
              </div>
              <ul className='rig'>
                  {loadedPhotos.length != 0 ? loadedPhotos.map((e, i) => {
                    return(
                    <li key={i}>
                      <img src={e.src_big}/>
                      <h3>{moment(e.created*1000).format('MMMM Do YYYY')}</h3>
                    </li>
                  )
                }) : <li style={emptyPhotosStyle}>You didn't load any photos 😅</li>}
              </ul>
            </div>


        );
    }
}

export default NavButtons;
