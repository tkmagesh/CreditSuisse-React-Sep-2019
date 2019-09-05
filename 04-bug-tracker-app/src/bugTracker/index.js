import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BugStats from './views/bugStats';
import BugEdit from './views/bugEdit';
import BugSort from './views/bugSort';
import BugList from './views/bugList';

import * as bugActionCreators from './actions';

class BugTracker extends Component{
	componentDidMount(){
		this.props.load();
	}
	render(){
		let { bugs, addNew, removeClosed, toggle } = this.props;
		return(
			<section>
				<BugStats bugs={bugs} />
				<BugSort />
				<BugEdit addNew={addNew} />
				<BugList {...{bugs, toggle, removeClosed}} />
			</section>
		)
	}
}

function mapStateToProps(storeState){
	let bugs = storeState.bugsData.filter(bug => bug.id % 2 === storeState.spinnerData % 2);
	return { bugs : bugs };
}

function mapDispatchToProps(dispatch){
	let bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
	return bugActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(BugTracker);


