import { useState } from 'react';
import { Link } from 'react-router';
import { CiMenuBurger } from 'react-icons/ci';
import { CiShare1 } from 'react-icons/ci';
import { DarkModeToggle } from '../../features/dark-mode-toggle/ui/darkModeToggle';
import LinkBtn from '../../shared/ui/LinkBtn';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="grid grid-cols-12 sticky top-0 z-50 dark:bg-gray-800">
			<div className="col-start-2 col-span-10">
				<div className="flex justify-between items-center py-4">
					<div className="flex items-center gap-4">
						<Link to="/" className="text-2xl font-bold">
							Hi, I'm Didar!
						</Link>
						<a
							href="https://drive.google.com/file/d/1zlzi7i9dLUN3Gw4ZwSXq7JwyOs1bp0r1/view?usp=sharing"
							className="hidden md:flex items-center gap-2  bg-primary border border-primary rounded-md px-2 py-1 hover:cursor-pointer transition-all duration-300 hover:scale-105"
							target="_blank"
							rel="noopener noreferrer"
						>
							Go to CV <CiShare1 className="text-xl" />
						</a>
					</div>

					<nav className="hidden md:flex gap-8 font-medium items-center">
						<LinkBtn label="About" to="/about" />
						<LinkBtn label="Contact" to="/contact" />
						<DarkModeToggle />
					</nav>

					<div className="flex items-center md:hidden">
						<button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
							<CiMenuBurger className={menuOpen ? 'rotate-90' : ''} />
						</button>
					</div>
				</div>
			</div>

			{menuOpen && (
				<div className="md:hidden border rounded-md px-4 text-center col-start-2 col-span-10 transition-all duration-300">
					<Link to="/about" className="block py-2 border-b">
						About
					</Link>
					<Link to="/contact" className="block py-2 border-b">
						Contact
					</Link>
					<div className="block py-2">
						<a
							href="https://drive.google.com/file/d/1zlzi7i9dLUN3Gw4ZwSXq7JwyOs1bp0r1/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
						>
							Go to CV
						</a>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
