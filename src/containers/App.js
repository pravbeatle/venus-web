import React from 'react';
import { ChatInput } from '../components';
import {connect} from 'react-redux';

class App extends React.Component {
	sendMessage = (message) => {
		console.log(message);
	}

	render() {
		return(
			<div>
				<ChatInput />
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log(state);
	return {

	};
}

function mapDispatchToProps(dispatch) {
	console.log(dispatch);
	return {

	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
