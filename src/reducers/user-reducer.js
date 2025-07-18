import { ACTION_TYPE } from '../actions';
import { ROLE } from '../constants';

const initialUserState = {
	session: null,
	login: null,
	id: null,
	roleId: ROLE.GUEST,
};
export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_USER: {
			return {
				...state,
				...action.payload,
			};
		}
		case ACTION_TYPE.LOGOUT:
			return initialUserState;

		default:
			return state;
	}
};
