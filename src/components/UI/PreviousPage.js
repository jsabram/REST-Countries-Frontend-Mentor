import { Link } from 'react-router-dom';
import classes from './PreviousPage.module.css';

const PreviousPage = () => {
	return (
		<Link to='/REST-Countries-Frontend-Mentor/' className={classes.link}>
			<i class='fa-solid fa-arrow-left'></i>
			Back
		</Link>
	);
};

export default PreviousPage;
