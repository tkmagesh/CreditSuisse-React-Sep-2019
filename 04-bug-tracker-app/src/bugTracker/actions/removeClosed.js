export function removeClosed(currentBugs){
	let closedBugs = currentBugs.filter(bug => bug.isClosed);
	let action = { type : 'REMOVE_ALL', payload : closedBugs};
	return action;
}