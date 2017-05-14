import React from 'react';
import { ChatInput } from '../components';
import {connect} from 'react-redux';
import {addMessage, setCurrentUserID, addHistory} from '../actions';

class App extends React.Component {
	sendMessage = (message) => {
		console.log(message);
	}

	render() {
		const {props} = this;
		return(
			<div>
				<ChatInput userID={props.userID} sendMessage={this.sendMessage} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		history: state.app.get('messages').toJS(),
		userID: state.app.get('userID'),
		lastMessageTimestamp: state.app.get('lastMessageTimestamp'),
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addMessage: (message) => dispatch(addMessage(message)),
		setCurrentUserID: (userID) => dispatch(setCurrentUserID(userID)),
		addHistory: (messages, timestamp) => dispatch(addHistory(messages, timestamp)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
