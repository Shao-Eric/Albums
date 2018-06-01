import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(data => this.setState({ albums: data }));
  }
  renderAlbums(){
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album = {album}/>);
  }//album is the prop we are trying to pass down to the child component

  render(){
    return (
      <ScrollView>//replace view with scrollview
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}

export default AlbumList;
