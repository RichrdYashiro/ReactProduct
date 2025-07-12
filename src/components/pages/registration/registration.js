import styled from 'styled-components';
import { Input, H2, Button } from '../../../components';
const RegistrationContainer = ({ className }) => {
	return (
		<div className={className}>
			<H2>Регистрация</H2>
		</div>
	);
};

export const Registration = styled(RegistrationContainer)`
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
	& > div > span {
		margin-top: 40px;
		color: rgba(36, 36, 36, 0.6);
		text-align: center;
	}
`;
