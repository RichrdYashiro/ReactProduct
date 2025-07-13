import { server } from '../bff/server';
import { useSelector } from 'react-redux';
import { selectUserSession } from '../components/selectors';
export const useServer = (operation, ...params) => {
	const session = useSelector(selectUserSession);

	return (operation, ...params) => {
		const request = ['register', 'authorize'].includes(operation)
			? params
			: [session, ...params];
		return server[operation](session, ...request);
	};
};
