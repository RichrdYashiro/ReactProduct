import styled from 'styled-components';
import { H2 } from '../../h2/h2';
import { useDispatch } from 'react-redux';
import { ROLE } from '../../../constants';
import { UserRow } from './components/user-row';
import { TableRow } from './components/table-row';
import { getUsers } from '../../../bff/api/get-users';
import { server } from '../../../bff/server';
import { useServer } from '../../../hooks/use-server';
import { useEffect } from 'react';
const UsersContainer = ({ className }) => {
	const dispatch = useDispatch();
	const users = [];
	const requestServer = useServerRequest();
	useEffect(() => {
		requestServer('fetchRoles');
	});
	return (
		<div className={className}>
			<H2>Пользователи</H2>
			<div className="table">
				<TableRow>
					<div className="login-column">Логин</div>
					<div className="login-redat">Дата регистрации</div>
					<div className="login-role">Роль</div>
				</TableRow>

				{users.map(({ login, id, registeredAt, roleId }) => (
					<UserRow
						key={id}
						login={login}
						registeredAt={registeredAt}
						roleId={roleId}
					/>
				))}
			</div>
		</div>
	);
};

export const Users = styled(UsersContainer)`
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	margin: 0 auto;
	width: fit-content;
	text-align: center;
	gap: 10px 0px;
	& > form {
		display: flex;
		flex-direction: column;
		gap: 10px 0;
		width: 260px;
		margin: 0 auto;
	}
`;
