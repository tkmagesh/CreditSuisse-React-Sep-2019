import bugApi from '../services/bugApi';

//removing one closedbug from the store
/*export function removeClosed(currentBugs){
	return function(dispatch){
		let closedBugs = currentBugs.filter(bug => bug.isClosed);
		closedBugs
			.forEach(closedBug => {
				bugApi
					.remove(closedBug)
					.then(() => dispatch({ type : 'REMOVE', payload : closedBug}))
			})
	}
}*/

//removing all closedBugs from the store in one shot
/*export function removeClosed(currentBugs){

	let closedBugs = currentBugs.filter(bug => bug.isClosed);
	let removeReqPromises = closedBugs
		.map(closedBug => {
			return bugApi.remove(closedBug)
		});
	return Promise.all(removeReqPromises)
		.then(() => ({ type : 'REMOVE_ALL', payload : closedBugs}));
	
}*/

export function removeClosed(){
	return function(dispatch, getState){
		let currentBugs = getState().bugsData;
		let closedBugs = currentBugs.filter(bug => bug.isClosed);
		let removeReqPromises = closedBugs
			.map(closedBug => {
				return bugApi.remove(closedBug)
			});
		Promise
			.all(removeReqPromises)
			.then(() => dispatch({ type : 'REMOVE_ALL', payload : closedBugs}));
	}
	
}