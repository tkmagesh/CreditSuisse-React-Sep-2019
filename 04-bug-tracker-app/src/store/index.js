import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from '../bugTracker/reducers'
import { spinnerReducer } from '../spinner';

import thunk from 'redux-thunk';
import logger from 'redux-logger'

let rootReducer = combineReducers({
	bugsData : bugsReducer,
	spinnerData : spinnerReducer
})


/*function loggerMiddleware({getState, dispatch}){
	console.log('loggerMiddlware ', arguments);
	return function loggerNext(next){
		console.log('loggerNext next -> ', next);
		return function loggerAction(action){
			console.log('logger action function');
			next(action);
		}
	}
}

function dummyMiddleware({getState, dispatch}){
	console.log('dummyMiddlware ', arguments);
	return function dummyNext(next){
		console.log('dummyNext next -> ', next);
		return function dummyAction(action){
			console.log('dummy action function');
			next(action);
		}
	}
}

let store = createStore(rootReducer, applyMiddleware(loggerMiddleware, dummyMiddleware));*/

function loggerMiddleware({ getState, dispatch}){
	return function(next){
		return function(action){
			console.group(action.type);
			console.group('Before Action');
			console.log(getState());
			console.groupEnd();
			next(action);
			console.group('After Action');
			console.log(getState());
			console.groupEnd();
			console.groupEnd();

		}
	}
}

let thunkMiddleware = ({getState, dispatch}) => next => action => {
	if (typeof action === 'function'){
		return action(dispatch);
	}
	return next(action);
}

let promiseMiddleware = ({getState, dispatch}) => next => action => {
	if (action instanceof Promise){
		action.then(act => {
			dispatch(act);
		});
	} else {
		return next(action);
	}
}

let store = createStore(rootReducer, applyMiddleware(logger, thunk, promiseMiddleware));
export default store;