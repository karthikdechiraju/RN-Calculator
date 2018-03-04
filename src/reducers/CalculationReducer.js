import { Actions } from 'react-native-router-flux';

const initial_state = { 
	display_value:null,
};


export default (state = initial_state,action) => {
	switch (action.type){
		case 'keyPressed':
			return state;
		default:
			return state
	}
}
