import styled from 'styled-components';

const TableRowContainer = ({ className, children }) => {
	return <div className={className}>{children}</div>;
};

export const TableRow = styled(TableRowContainer)`
	display: flex;
	gap: 0 135px;
	& * {
		width: 172px;
		text-align: center;
	}
`;
