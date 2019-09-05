import bugApi from '../services/bugApi';

export function addNew(newBugName){
	let newBugData = { id : 0, name : newBugName, isClosed : false, createdAt : new Date() };
	return bugApi
		.save(newBugData)
		.then(newBug => ({ type : 'ADD_NEW', payload : newBug}))
}