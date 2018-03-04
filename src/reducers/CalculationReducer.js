import { Actions } from 'react-native-router-flux';

const initial_state = { 
	display_value:null,
	active_number : 0,
	tempValue : 0,
	calcType : null,
	show_result:false
};


const calculate = function(num1, num2, type) {
    switch (type) {
      case "+":
        return Number(num1) + Number(num2);
      case "-":
        return Number(num1) - Number(num2);
      case "*":
        return Number(num1) * Number(num2);
      case "/":
        return Number(num1) / Number(num2);
      default:
        break;
    }
}

export default (state = initial_state,action) => {
	switch (action.type){
		case 'keyPressed':
		    switch (action.payload) {
		      	case "=":
					if (state.active_number && state.calcType) {
						var finalVal = calculate(parseFloat(state.tempValue), parseFloat(state.active_number), state.calcType);
						if (finalVal % 1 != 0 ) {
							finalVal = finalVal.toFixed(2)
						}
						return {...state,tempValue:0,active_number:finalVal,display_value:finalVal,calcType:null,show_result:true}
					}else{
						return state;
					}
					break;
				case "+":
				case "-":
				case "*":
				case "/":
					if (state.display_value) {
						if(state.display_value[state.display_value.length - 1] == '+' || state.display_value[state.display_value.length - 1] == '-' || state.display_value[state.display_value.length - 1] == '*' || state.display_value[state.display_value.length - 1] == '/'){
							var newString = state.display_value.slice(0,-1)
							return {...state,calcType:action.payload,display_value:newString+''+action.payload,show_result:false}
						}else{
							var newString = state.display_value
							if (state.calcType) { 
								var tempCalc = calculate(parseFloat(state.tempValue), parseFloat(state.active_number), state.calcType);
								if (tempCalc % 1 != 0 ) {
									tempCalc = tempCalc.toFixed(2)
								}
								return {...state,tempValue:tempCalc,calcType:action.payload,display_value:newString+''+action.payload,active_number:0,show_result:false}
							} else {
								return {...state,tempValue:parseFloat(state.active_number),active_number:0,calcType:action.payload,display_value:newString+''+action.payload,show_result:false}
							}
						}
					}else{
						return {...state,tempValue:0,active_number:0,calcType:action.payload,display_value:0+''+action.payload,show_result:false}
					}
					break;
				case "C":
					return {...state,display_value:null, active_number:null,tempValue:null,calcType:null,show_result:false}
					break;

				case "B":
					if (!state.show_result) {
						if (state.display_value && state.active_number && state.active_number != 0) {
							var newDisplay = state.display_value.slice(0,-1)
							var newActive = state.active_number.slice(0,-1)
							return {...state,display_value:newDisplay, active_number:newActive ,show_result:false}
						}else{
							return state;
						}
					}else{
						return {...state,display_value:null, active_number:null ,show_result:false}
					}
					break;

				case ".":
					if (parseFloat(state.active_number) % 1 == 0) {
						if (state.active_number == 0) {
							return {...state,display_value:state.display_value+''+action.payload,active_number:0+''+action.payload,show_result:false}
						}else{
							return {...state,display_value:state.display_value+''+action.payload,active_number:state.active_number+''+action.payload,show_result:false}
						}
					}else{
						return state;
					}
					break;
				default:
					if (state.display_value == null) {
						if (parseFloat(action.payload) == 0) {
							return state;
						}else{
							return {...state,display_value:action.payload,active_number:action.payload,show_result:false}
						}
					}else{
						if (parseFloat(state.display_value) != 0) {
							return {...state,display_value:state.display_value+''+action.payload,active_number:state.active_number+''+action.payload,show_result:false}
						}else{
							if (parseFloat(action.payload) == 0) {
								return state;
							}else{
								return {...state,display_value:state.display_value+''+action.payload,active_number:state.active_number+''+action.payload,show_result:false}
							}
						}
					}
					break;
		    }
		default:
			return state
	}
}
