import React, {Component} from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
const AlbumDetail = ({album}) =>{
  const { title, artist, thumbnail_image, image, url} = album;
  const { thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
  } = styles;
  return(
    <Card>
      <CardSection>
      <View style={thumbnailContainerStyle} >
        <Image
        style={thumbnailStyle}
        source={{uri: thumbnail_image}}
         />

      </View>
      <View style={headerContentStyle}>
        <Text style = {headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
      </View>
      </CardSection>
//Image section
      <CardSection>
        <Image style={imageStyle} source={{uri:image}}/>
      </CardSection>

//Button section
      <CardSection>
        <Button onPress = {() => Linking.openURL(url)}>
          Buy Now!
        </Button>
      </CardSection>
    </Card>
  )
}

const styles = {
  headerContentStyle:{
    flexDirection:'column',
    justifyContent:'space-around'
  },
  headerTextStyle:{
    fontSize:18
  },
  thumbnailStyle:{//styling for the image
    height:50,
    width:50
  },
  thumbnailContainerStyle:{//styling for the view.
    justifyContent:'center',//optional
    alignItems:'center',//optional
    marginLeft:10,
    marginRight:10
  },
  imageStyle:{
    height:300,
    flex:1,
  //  width:null,
  }
}
export default AlbumDetail;
