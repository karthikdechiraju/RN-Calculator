import React, { Component } from 'react';
import { Text, TouchableHighlight, TouchableNativeFeedback , View, Platform} from 'react-native';

const Button = ({ onPress, children,style,textStyleProps }) => {
	const { buttonStyle, textStyle } = styles;
	
	if (Platform.OS === 'android') {
       return (
          <TouchableNativeFeedback onPress={onPress} > 
               <View style={[styles.buttonStyle,style]}><Text style={[textStyle,textStyleProps]}>{children}</Text></View>
          </TouchableNativeFeedback>    
       )
    } else {
       return (
          <TouchableHighlight onPress={onPress} style={[styles.buttonStyle,style]}> 
			<Text style={textStyle}>{children}</Text>
          </TouchableHighlight>    
       )
    }
}

const styles={
	buttonStyle:{
		flex:1,
		display:'flex',
		alignSelf:'stretch',
		justifyContent:'center',
		alignItems:'center',
		borderWidth:1,
		borderColor:'#ebebeb',
		backgroundColor:'#fafafa',
		elevation:2		
	},
	textStyle:{
		fontSize:30,
		color:'#777777'
	}
}

export default Button;