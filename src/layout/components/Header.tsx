import { useState } from 'react';
import { Link } from 'react-router';
import { CiMenuBurger } from 'react-icons/ci';
import { CiShare1 } from 'react-icons/ci';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="w-full shadow-md bg-white sticky top-0 z-50">
			<div className="container mx-auto px-4 py-3 flex justify-between items-center">
				<Link to="/" className="text-2xl font-bold text-gray-900">
					Hi, I'm Didar!
				</Link>

				<nav className="hidden md:flex gap-8 text-black font-medium">
					<a
						href="https://drive.google.com/file/d/1zlzi7i9dLUN3Gw4ZwSXq7JwyOs1bp0r1/view?usp=sharing"
						className="flex items-center gap-2 over:cursor-pointer hover:underline hover:underline-offset-4"
						target="_blank"
						rel="noopener noreferrer"
					>
						Go to CV <CiShare1 />
					</a>
					<Link
						to="/about"
						className="hover:cursor-pointer hover:underline hover:underline-offset-4"
					>
						About
					</Link>
					<Link
						to="/contact"
						className="hover:cursor-pointer hover:underline hover:underline-offset-4"
					>
						Contact
					</Link>
				</nav>

				<div className="flex items-center md:hidden text-black">
					<button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
						<CiMenuBurger />
					</button>
				</div>
			</div>

			{menuOpen && (
				<div className="md:hidden bg-white px-4 pb-4 text-black">
					<Link to="/about" className="block py-2 border-b">
						About
					</Link>
					<Link to="/contact" className="block py-2">
						Contact
					</Link>
				</div>
			)}
		</header>
	);
};

export default Header;
