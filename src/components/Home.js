import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, Keyboard,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Button from './commons/Button'

class Home extends Component{

	render(){
		return(
			<View style={{flex:1,display:'flex',flexDirection:'column'}}>
				<View style={{flex:4,backgroundColor:'#eee'}}>
					
				</View>
				<View style={{flex:6,backgroundColor:'green',display:'flex',flexDirection:'column'}}>
					<View style={{display:'flex',flexDirection:'row',justifyContent:'center',flex:1,backgroundColor:'blue'}}>
						<Button>1</Button>
						<Button>2</Button>
						<Button>3</Button>
						<Button textStyleProps={{color:'#59a7e5'}}>/</Button>
					</View>
					<View style={{display:'flex',flexDirection:'row',justifyContent:'center',flex:1}}>
						<Button>4</Button>
						<Button>5</Button>
						<Button>6</Button>
						<Button textStyleProps={{color:'#59a7e5'}}>*</Button>
					</View>
					<View style={{display:'flex',flexDirection:'row',justifyContent:'center',flex:1}}>
						<Button>7</Button>
						<Button>8</Button>
						<Button>9</Button>
						<Button textStyleProps={{color:'#59a7e5'}}>-</Button>
					</View>
					<View style={{display:'flex',flexDirection:'row',justifyContent:'center',flex:1}}>
						<Button>.</Button>
						<Button>0</Button>
						<Button textStyleProps={{color:'#fff'}} style={{backgroundColor:'#59a7e5'}}>=</Button>
						<Button textStyleProps={{color:'#59a7e5'}}>+</Button>
					</View>
				</View>
			</View>
		)
	}
}

export default Home;