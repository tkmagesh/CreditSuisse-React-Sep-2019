//import axios from 'axios';

/*let getBugs = function(){
	let bugs = [
		{id : 1, name : 'Server communication failure', isClosed : false, createdAt : new Date()},
		{id : 2, name : 'Data integrity checks failed', isClosed : true, createdAt : new Date()},
		{id : 3, name : 'Application not responding', isClosed : false, createdAt : new Date()}
	];
	return bugs;
}*/

/*let getBugsFromServer = function(){
	return axios
		.get('http://localhost:3030/bugs')
		.then(response => response.data);
}*/

import bugApi from '../services/bugApi';

export function load(){
	/*return function(dispatch){
		let promise = getBugsFromServer();
		promise.then(function(bugs){
			let action = { type : 'LOAD', payload : bugs };
			dispatch(action);	
		})
	}*/

	/*return getBugsFromServer()
		.then(bugs => {
			let action = { type : 'LOAD', payload : bugs};
			return action;
		})*/

	return bugApi
		.getAll()
		.then(bugs => ({ type : 'LOAD', payload : bugs}));
}