import { getUser } from './get-user';
import { addUser } from './add-user';
import { sessions } from './sessions';

export const server = {
	async logout(session) {
		sessions.remove(session);
	},

	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin);

		if (!user) {
			return {
				error: 'Такой пользователей не найдет',
				res: null,
			};
		}

		if (authPassword !== user.password) {
			return {
				error: 'Неверный пароль',
				res: null,
			};
		}

		return {
			error: null,
			res: {
				session: sessions.create(user),
				login: user.login,
				id: user.id,
				roleId: user.role_id,
			},
		};
	},

	async register(regLogin, regPassword) {
		const existedUser = await getUser(regLogin);

		if (existedUser) {
			return {
				error: 'Такой пользователей уже существует',
				res: null,
			};
		}
		const user = await addUser(regLogin, regPassword);

		return {
			error: null,
			res: {
				session: sessions.create(user),
				login: user.login,
				id: user.id,
				roleId: user.role_id,
			},
		};
	},
};
