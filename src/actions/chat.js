import {
  ADD_MESSAGE,
  SET_CURRENT_USERID,
  ADD_HISTORY,
} from './actionTypes';

export function setCurrentUserID(userID) {
	return {
		type: SET_CURRENT_USERID,
		data: userID,
	};
}

export function addMessage(message) {
	return {
		type: ADD_MESSAGE,
		data: message,
	};
}

export function addHistory(messages, timestamp) {
	return {
		type: ADD_HISTORY,
		data: {
			messages,
			timestamp,
		},
	};
}
