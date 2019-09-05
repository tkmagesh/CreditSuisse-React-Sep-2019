import { createStore, combineReducers } from 'redux';
import bugsReducer from '../bugTracker/reducers'
import { spinnerReducer } from '../spinner';

let rootReducer = combineReducers({
	bugsData : bugsReducer,
	spinnerData : spinnerReducer
})

let store = createStore(rootReducer);

export default store;