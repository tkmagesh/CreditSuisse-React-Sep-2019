import bugApi from '../services/bugApi';

export function toggle(bugToToggle){
	let toggledBugData = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
	return bugApi
		.save(toggledBugData)
		.then(toggledBug => ({ type : 'REPLACE', payload : toggledBug }))
}