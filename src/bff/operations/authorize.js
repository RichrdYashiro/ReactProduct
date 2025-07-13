import { sessions } from '../sessions';
import { getUser } from '../api/get-user';
export const authorize = async (authLogin, authPassword) => {
	const user = await getUser(authLogin);

	if (!user) {
		return {
			error: 'Такой пользователей не найдет',
			res: null,
		};
	}
	const { id, login, password, roleId } = user;
	if (authPassword !== password) {
		return {
			error: 'Неверный пароль',
			res: null,
		};
	}

	return {
		error: null,
		res: {
			session: sessions.create(user),
			login,
			id,
			roleId: user.role_id,
		},
	};
};
