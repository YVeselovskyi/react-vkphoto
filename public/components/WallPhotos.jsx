import React from 'react';

class WallPhotos extends React.Component {
    constructor(props) {
        super(props);
        this.getWallPhotos = this.getWallPhotos.bind(this);
        this.state = {
          loadedPhotos: []
        }
    }
    getWallPhotos(){
      let that  = this;
      VK.api('photos.get', { album_id: 'wall' }, function(result){
        if(result.response){
            that.setState({loadedPhotos: result.response})
          }
        });
    }
    render() {
        let neededPhotos = this.state.loadedPhotos;
        return (
            <div>
                <button className='btn' onClick={this.getWallPhotos}>Wall Photos</button>
                {neededPhotos.map((e) => {
                    return <img src={e.src_big}/>
                })}
            </div>
        );
    }
}

export default WallPhotos;
