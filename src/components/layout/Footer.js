import classes from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<p>
				Challenge by {''}
				<a
					href='https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca/hub'
					className={classes['footer-link']}
				>
					Frontend Mentor
				</a>
				. Coded by {''}
				<a href='https://github.com/jsabram' className={classes['footer-link']}>
					jsabram
				</a>
				.
			</p>
		</footer>
	);
};

export default Footer;
