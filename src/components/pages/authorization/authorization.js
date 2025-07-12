import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { server } from '../../../bff';
import { useState } from 'react';
import styled from 'styled-components';

const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(/^\w+$/, 'Неверный логин. Допускаются только буквы и цифры')
		.min(3, 'Неверный логин. Минимум 3 символов')
		.max(15, 'Неверный логин. Масимум 15 символов'),

	password: yup
		.string()
		.required('Заполните пароль')
		.matches(/^[\w#%]+$/, 'Неверный пароль. Недоступные символы')
		.min(6, 'Неверный пароль. Минимум 6 символов')
		.max(25, 'Неверный пароль. Масимум 25 символов'),
});

const AuthorizationContainer = ({ className }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	});

	const [serverError, setServerError] = useState();

	const onSubmit = ({ login, password }) => {
		server.authorize(login, password).then(({ res, error }) => {
			if (error) {
				setServerError(`Ошибка запроса ${error}`);
			}
		});
	};
	const formError = errors?.login?.message || errors?.password?.message;
	const erorMessage = formError || serverError;

	return (
		<div className={className}>
			<h2>Авторизация</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input type="text" placeholder="Логин" {...register('login')}></input>
				<input type="text" placeholder="Пароль" {...register('password')}></input>
				<button type="button" disabled={!!formError}>
					Войти
				</button>

				{erorMessage && <div>{erorMessage}</div>}
			</form>
		</div>
	);
};
export const Authorization = styled(AuthorizationContainer)`
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	margin: 0 auto;
	width: fit-content;
	text-align: center;

	& > form {
		display: flex;
		flex-direction: column;
		gap: 5px 0;
	}
	& > form > input {
		width: 225px;
		height: 30px;
		padding: 0 10px;
	}
`;
