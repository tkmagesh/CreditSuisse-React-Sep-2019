import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export function spinnerReducer(currentState = 0, action){
	if (action.type === 'DOUBLE_UP')
		return currentState * 2;
	if (action.type === 'UP')
		return ++currentState;
	if (action.type === 'DOWN')
		return --currentState;
	if (action.type === 'DOUBLE_DOWN')
		return currentState / 2;
	return currentState;
}
export let spinnerActionCreators = {
	down(){
		let action = { type : 'DOWN'};
		return action;
	},
	up(){
		let action = { type : 'UP'};
		return action;
	},
	doubleDown(){
		let action = { type : 'DOUBLE_DOWN'};
		return action;
	},
	doubleUp(){
		let action = { type : 'DOUBLE_UP'};
		return action;
	}
}
export let Spinner = ({ spinnerValue : value, up, down, doubleUp, doubleDown}) => (
	<div>
		<input type="button" value="Double Decrement" onClick={doubleDown}/>
		<input type="button" value="Decrement" onClick={down}/>
		<span> [ {value} ] </span>
		<input type="button" value="Increment" onClick={up}/>
		<input type="button" value="Double Increment" onClick={doubleUp}/>
	</div>
);


function mapStateToProps(storeState){
	let spinnerValue = storeState.spinnerData;
	return { spinnerValue : spinnerValue };
}

function mapDispatchToProps(dispatch){
	let spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, dispatch);
	return spinnerActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(Spinner);