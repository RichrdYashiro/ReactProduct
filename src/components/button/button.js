import styled from 'styled-components';

const ButtonContainer = ({ className, children, width, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	);
};

export const Button = styled(ButtonContainer)`
	font-size: 18px;
	width: ${(width = '100%') => width};
	height: 32px;
	color: #000;
	text-decoration: none;
	border: 1px solid #000;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #eee;
`;
