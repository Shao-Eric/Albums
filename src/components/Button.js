import React, {Component} from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({onPress, children}) =>{ //this onpress is the same as the func in albumdetail onpress
  const {buttonStyle, textStyle} = styles;
  return(
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles ={
  textStyle:{
    alignSelf:'center',
    color:'#007aff',
    fontSize:16,
    fontWeight:'600',//fontweight = 'bold'
    paddingTop:10,
    paddingBottom:10
  },
  buttonStyle:{
    flex:1,//expand as much content as it can
    alignSelf:'stretch', //stretch to the limit of the container
    backgroundColor:'#fff',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#007aff',//ios button color
    marginLeft:5,
    marginRight:5
  }
}

export default Button;
