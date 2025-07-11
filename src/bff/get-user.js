import { getUsers } from './get-users';

export const getuser = async (loginToFind) => {
	const users = await getUsers();
	return users.find(({ login }) => login === loginToFind);
};
