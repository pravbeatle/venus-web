import {
  ADD_MESSAGE,
  SET_CURRENT_USERID,
  ADD_HISTORY,
} from './actionTypes';

export const setCurrentUserID = (userID) => {
	return {
		type: SET_CURRENT_USERID,
		data: userID,
	};
}

export const addMessage = (message) => {
	return {
		type: ADD_MESSAGE,
		data: message,
	};
}

export const addHistory = (messages, timestamp) => {
	return {
		type: ADD_HISTORY,
		data: {
			messages,
			timestamp,
		},
	};
}
