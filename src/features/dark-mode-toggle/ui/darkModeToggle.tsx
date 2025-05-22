import { CiDark, CiSun } from 'react-icons/ci';
import { useEffect, useState } from 'react';

export function DarkModeToggle() {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		return localStorage.theme === 'dark';
	});

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [isDarkMode]);

	const handleDarkModeToggle = () => {
		setIsDarkMode(!isDarkMode);
		localStorage.theme = isDarkMode ? 'light' : 'dark';
	};

	return (
		<button onClick={handleDarkModeToggle} className="text-xl cursor-pointer">
			{isDarkMode ? <CiDark /> : <CiSun />}
		</button>
	);
}
