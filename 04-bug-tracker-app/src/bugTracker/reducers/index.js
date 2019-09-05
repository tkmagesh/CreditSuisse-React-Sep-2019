function bugsReducer(currentState = [], action){
	if (action.type === 'ADD_NEW'){
		let newState = [...currentState, action.payload];
		return newState;
	}
	if (action.type === 'REPLACE'){
		let bugToReplace = action.payload,
			newState = currentState.map(bug => bug.id === bugToReplace.id ? bugToReplace : bug);
		return newState;
	}
	if (action.type === 'REMOVE_ALL'){
		let bugsToRemove = action.payload,
			newState = currentState.filter(bug => !bugsToRemove.find(b => b.id === bug.id));
		return newState;
	}
	return currentState;
}

export default bugsReducer;