import { useRouteError } from 'react-router-dom';
import classes from './ErrorPage.module.css';

const ErrorPage = () => {
	const error = useRouteError();

	let errorInfo = 'Unable to access the page.';

	if (error?.status === 500) {
		errorInfo = JSON.parse(error.data).message;
	}

	return (
		<div className={classes['error-box']}>
			<h2>An error occured</h2>
			<p className={classes['error-message']}>{errorInfo}</p>
		</div>
	);
};

export default ErrorPage;
