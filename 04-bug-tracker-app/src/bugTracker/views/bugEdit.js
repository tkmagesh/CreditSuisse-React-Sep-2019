import React, { Component } from 'react';

class BugEdit extends Component{
	state = {
		newBugName : ''
	}
	render(){
		let { addNew } = this.props;
		return(
			<section className="edit">
				<label htmlFor="">Bug Name :</label>
				<input type="text" onChange={ evt => this.setState({newBugName : evt.target.value})} />
				<input type="button" value="Add New" onClick={ () => addNew(this.state.newBugName) }/>
			</section>
		)
	}
}
export default BugEdit;