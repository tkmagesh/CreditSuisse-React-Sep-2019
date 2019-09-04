var SM = (function(){	
	var _currentState = undefined,
		_listenerFns = [],
		_reducer = null,
		_init_action = { type : '@INIT_ACTION' };

	function getState(){
		return _currentState;
	}

	function subscribe(listenerFn){
		_listenerFns.push(listenerFn);
	}

	function triggerChange(){
		_listenerFns.forEach(listenerFn => listenerFn());
	}

	function dispatch(action){
		var newState = _reducer(_currentState, action);
		if (newState === _currentState) return;
		_currentState = newState;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_currentState = reducer(_currentState, _init_action)
		return { getState, subscribe, dispatch };
	}

	return { createStore };
})();