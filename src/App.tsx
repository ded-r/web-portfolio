import { Route } from 'react-router';
import MainLayout from './layout/MainLayout';
import { Routes } from 'react-router';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
	return (
		<>
			<MainLayout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
			</MainLayout>
		</>
	);
}

export default App;
