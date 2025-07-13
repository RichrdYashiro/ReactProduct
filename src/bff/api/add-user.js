export const addUser = async (login, password) => {
	const response = await fetch('http://localhost:3005/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			login,
			password,
			registed_at: new Date().toISOString().substring(0, 16).replace('T', ' '),
			role_id: 2,
		}),
	});

	if (!response.ok) {
		throw new Error('Ошибка регистрации');
	}

	return await response.json();
};
