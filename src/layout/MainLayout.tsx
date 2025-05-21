import Header from './components/Header';
import Footer from './components/Footer';

const MainLayout = ({ children }: { children: React.ReactNode }) => (
	<>
		<div className="h-screen">
			<Header />
			<main className="mx-auto px-4">{children}</main>
			<Footer />
		</div>
	</>
);

export default MainLayout;
