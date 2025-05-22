import { Link } from 'react-router';

interface LinkBtnProps {
	label: string;
	to: string;
	className?: string;
}

const LinkBtn = ({ label, to }: LinkBtnProps) => {
	return (
		<Link
			to={to}
			className="hover:cursor-pointer hover:underline hover:underline-offset-4"
		>
			{label}
		</Link>
	);
};

export default LinkBtn;
