import styled from 'styled-components';
import { Icon } from '../../../icon/icon';
import { useDispatch } from 'react-redux';
//import { ROLE } from '../../../constants';
const UserRowContainer = ({ className, id, login, registeredAt, roleId: userRoleId }) => {
	const onRoleChange = () => {};
	const roles = [];
	const dispatch = useDispatch();
	return (
		<div className={className} key={id}>
			<div className="user-data">
				<div className="login-column">{login}</div>
				<div className="login-redat">{registeredAt}</div>
				<div className="login-role">
					<select value={userRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option value={roleId}>{roleName}</option>
						))}
					</select>
					<Icon
						onClick={() => dispatch()}
						id="fa-floppy-o"
						size="20px"
						margin="5px 0 0 15px"
					/>
				</div>
			</div>
			<Icon
				onClick={() => dispatch()}
				id="fa-trash-o"
				size="20px"
				margin="5px 0 0 15px"
			/>
		</div>
	);
};

export const UserRow = styled(UserRowContainer)``;
