export function toggle(bugToToggle){
	let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
	let action = { type : 'REPLACE', payload : toggledBug };
	return action;
}