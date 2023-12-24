import {
	SELECTED_USER_CHANGE
} from '../constants/Users';

const initState = {
	selectedUser: null
}

const users = (state = initState, action) => {
	switch (action.type) {
		case SELECTED_USER_CHANGE:
			return {
				...state,
				selectedUser: action.user
			}
		default:
			return state;
	}
}

export default users