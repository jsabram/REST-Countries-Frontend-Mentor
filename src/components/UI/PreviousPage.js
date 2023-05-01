import { Link } from 'react-router-dom';
import classes from './PreviousPage.module.css';

const PreviousPage = () => {
	return (
		<Link to='..' className={classes.link}>
			<i class='fa-solid fa-arrow-left'></i>
			Back
		</Link>
	);
};

export default PreviousPage;
