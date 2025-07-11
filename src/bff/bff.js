import { getUser } from './get-user';
import { addUser } from './add-user';
import { CreateSession } from './create-session';

export const server = {
	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin);

		if (!user) {
			return {
				error: 'Такой пользователей не найдет',
				res: null,
			};
		}

		if (authPassword !== user.userPassword) {
			return {
				error: 'Неверный пароль',
				res: null,
			};
		}
		return {
			error: null,
			res: CreateSession(user.role_id),
		};
	},

	async register(regLogin, regPassword) {
		const user = await getUser(regLogin);

		if (user) {
			return {
				error: 'Такой пользователей уже существует',
				res: null,
			};
		}
		await addUser(regLogin, regPassword);

		return {
			error: null,
			res: CreateSession(user.role_id),
		};
	},
};
