import React from 'react';

class ProfilePhotos extends React.Component {
    constructor(props) {
        super(props);
        this.getProfilePhotos = this.getProfilePhotos.bind(this);
        this.state = {
          loadedPhotos: []
        }
    }
    getProfilePhotos(){
      let that  = this;
      VK.api('photos.get', { album_id: 'profile' }, function(result){
        if(result.response){
            that.setState({loadedPhotos: result.response})
          }
        });
    }
    render() {
        let neededPhotos = this.state.loadedPhotos;
        return (
            <div>
                <button className='btn' onClick={this.getProfilePhotos}>Profile Photos</button>
                {neededPhotos.map((e) => {
                    return <img src={e.src_big}/>
                })}
            </div>
        );
    }
}

export default ProfilePhotos;
