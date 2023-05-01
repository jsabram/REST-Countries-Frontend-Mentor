import { useSelector, useDispatch } from 'react-redux';
import { themeActions } from '../../store/theme-slice';
import Card from '../reusable/Card';
import classes from './Header.module.css';

const Header = () => {
	const dispatch = useDispatch();
	const currentTheme = useSelector((state) => state.theme.isLight);

	let moonIcon = <i className='fa-regular fa-moon'></i>;
	let themeName = 'Light';

	if (!currentTheme) {
		moonIcon = <i className='fa-solid fa-moon'></i>;
		themeName = 'Dark';
	}

	const toggleThemeHandler = () => {
		dispatch(themeActions.toggle());
	};

	return (
		<header className={classes.header}>
			<Card className={classes['header-content']}>
				<h1>Where in the world?</h1>
				<button onClick={toggleThemeHandler}>
					{moonIcon} {themeName} Mode
				</button>
			</Card>
		</header>
	);
};

export default Header;
