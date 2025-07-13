import { authorize } from './operations/authorize';
import { register } from './operations/register';
import { logout } from './operations/logout';
export const server = {
	authorize,
	register,
	logout,
};
