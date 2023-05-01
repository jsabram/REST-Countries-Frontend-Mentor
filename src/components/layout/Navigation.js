import { useLocation } from 'react-router-dom';
import Card from '../reusable/Card';
import SearchBar from '../UI/SearchBar';
import PreviousPage from '../UI/PreviousPage';
import classes from './Navigation.module.css';

const Navigation = () => {
	const activePath = useLocation();

	let navContent;

	if (activePath.pathname === '/') {
		navContent = <SearchBar />;
	} else {
		navContent = <PreviousPage />;
	}

	return (
		<nav className={classes.nav}>
			<Card>{navContent}</Card>
		</nav>
	);
};

export default Navigation;
