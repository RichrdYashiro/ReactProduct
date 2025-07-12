import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Header, Footer } from './components';
import { Authorization, Registration } from './components/pages';
const Content = styled.div`
	padding: 120px 0;
`;

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100%;
	background-color: #fff;
	margin: 0 auto;
	width: 1440px;
`;

export const Blog = () => {
	return (
		<AppColumn>
			<Header />
			<div className="App">
				<header className="App-header">
					<Content>
						<Routes>
							<Route path="/" element={<div>Главная страница</div>} />
							<Route path="/login" element={<Authorization />} />
							<Route path="/register" element={<Registration />} />
							<Route path="/users" element={<div>Пользователи</div>} />
							<Route path="/post" element={<div>Новая статья</div>} />
							<Route path="/post/:postId" element={<div>Статья</div>} />
							<Route path="*" element={<div>Ошибка</div>} />
						</Routes>
					</Content>
				</header>
			</div>
			<Footer />
		</AppColumn>
	);
};
