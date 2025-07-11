import { removeComment } from './sessions';
import { ROLE } from '../constants';

export const CreateSession = (roleid) => {
	let session = {
		logout() {
			Object.keys(session).forEach((key) => {
				delete session[key];
			});
		},
	};

	switch (roleid) {
		case ROLE.ADMIN: {
			session.removeComment = removeComment;
			break;
		}
		case ROLE.MODERATOR: {
			session.removeComment = removeComment;
			break;
		}
		case ROLE.READER: {
			break;
		}
		default:
	}
	return session;
};
