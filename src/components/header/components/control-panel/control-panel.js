import styled from 'styled-components';
import { Icon } from '../../../icon/icon';
import { Link, useNavigate } from 'react-router-dom';
const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
`;
const StyledLink = styled(Link)`
	font-size: 18px;
	width: 100px;
	height: 32px;
	color: #000;
	text-decoration: none;
	border: 1px solid #000;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #eee;
`;
const StyledButton = styled.div`
	&:hover {
		cursor: pointer;
	}
`;
const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();

	return (
		<div className="{className}">
			<RightAligned>
				<StyledLink to="/login">Войти</StyledLink>
			</RightAligned>
			<RightAligned>
				<StyledButton onClick={() => navigate(-1)}>
					<Icon id="fa-backward" size="20px" margin="10px  0 0 0" />
				</StyledButton>

				<Link to="/posts">
					<Icon id="fa-file-text-o" size="20px" margin="10px  0 0 15px" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" size="20px" margin="10px  0 0 15px" />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
