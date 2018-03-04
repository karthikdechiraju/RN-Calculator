import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, Keyboard,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Button from './commons/Button';
import { keyPressed } from '../actions'

class Home extends Component{
	renderValue(){
		if (parseInt(this.props.tempValue) != 0) {
			return(
				<Text style={{fontSize:30,color:'#777777'}}>{this.props.tempValue}</Text>
			)
		}
	}

	renderEquation(){
		if (this.props.show_result) {
			return(
				<Text style={{fontSize:32,color:'#59a7e5'}}>{this.props.display_value}</Text>
			)
		}else{
			return(
				<Text style={{fontSize:30,color:'#59a7e5'}}>{this.props.display_value}</Text>
			)
		}
	}

	render(){
		return(
			<View style={{flex:1,display:'flex',flexDirection:'column'}}>
				<View style={{flex:2,backgroundColor:'#f5f6f8',display:'flex',flexDirection:'column'}}>
					<View style={{flex:5,display:'flex',flexDirection:'column'}}>
						<View style={{flex:1,display:'flex',justifyContent:'flex-end',alignItems:'flex-end',paddingHorizontal:20}}>
							{this.renderEquation()}
						</View>
						<View style={{flex:1,display:'flex',justifyContent:'center',alignItems:'flex-end',paddingHorizontal:20}}>
							{this.renderValue()}
						</View>
					</View>
					<View style={{flex:1,alignItems:'center',justifyContent:'space-between',display:'flex',flexDirection:'row'}}>
						<Button onPress={() => this.props.keyPressed('C') } textStyleProps={{fontSize:20,color:'#59a7e5'}}>CLEAR</Button>
						<Button onPress={() => this.props.keyPressed('B') } textStyleProps={{fontSize:20,color:'#59a7e5'}}>BACK</Button>
					</View>
				</View>
				<View style={{flex:2,backgroundColor:'green',display:'flex',flexDirection:'column'}}>
					<View style={{display:'flex',flexDirection:'row',justifyContent:'center',flex:1,backgroundColor:'blue'}}>
						<Button onPress={() => this.props.keyPressed('1') } >1</Button>
						<Button onPress={() => this.props.keyPressed('2') } >2</Button>
						<Button onPress={() => this.props.keyPressed('3') } >3</Button>
						<Button onPress={() => this.props.keyPressed('/') } textStyleProps={{color:'#59a7e5'}}>/</Button>
					</View>
					<View style={{display:'flex',flexDirection:'row',justifyContent:'center',flex:1}}>
						<Button onPress={() => this.props.keyPressed('4') } >4</Button>
						<Button onPress={() => this.props.keyPressed('5') } >5</Button>
						<Button onPress={() => this.props.keyPressed('6') } >6</Button>
						<Button onPress={() => this.props.keyPressed('*') } textStyleProps={{color:'#59a7e5'}}>x</Button>
					</View>
					<View style={{display:'flex',flexDirection:'row',justifyContent:'center',flex:1}}>
						<Button onPress={() => this.props.keyPressed('7') } >7</Button>
						<Button onPress={() => this.props.keyPressed('8') } >8</Button>
						<Button onPress={() => this.props.keyPressed('9') } >9</Button>
						<Button onPress={() => this.props.keyPressed('-') } textStyleProps={{color:'#59a7e5'}}>-</Button>
					</View>
					<View style={{display:'flex',flexDirection:'row',justifyContent:'center',flex:1}}>
						<Button onPress={() => this.props.keyPressed('.') } >.</Button>
						<Button onPress={() => this.props.keyPressed('0') } >0</Button>
						<Button onPress={() => this.props.keyPressed('=') } textStyleProps={{color:'#fff'}} style={{backgroundColor:'#59a7e5',borderWidth:0}}>=</Button>
						<Button onPress={() => this.props.keyPressed('+') } textStyleProps={{color:'#59a7e5'}}>+</Button>
					</View>
				</View>
			</View>
		)
	}
}

const mapStateToProps = (state)=>{
	return{
		display_value:state.calculate.display_value,
		tempValue:state.calculate.tempValue,
		show_result:state.calculate.show_result
	}
}

export default connect(mapStateToProps,{ keyPressed })(Home);