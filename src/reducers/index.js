import { combineReducers } from 'redux';
import CalculationReducer from './CalculationReducer'

export default combineReducers({
	calculate:CalculationReducer,
})