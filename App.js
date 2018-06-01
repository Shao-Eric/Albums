import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>//need this to expand the scrollView to the bottom
        <Header headerText={'Albums customized'} />
        <AlbumList />
      </View>
    );
  }
}




//http://rallycoding.herokuapp.com/api/music_albums
