import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation';
import Footer from '../components/layout/Footer';

const RootLayout = () => {
	return (
		<Fragment>
			<MainNavigation />
			<main>
				<Outlet />
			</main>
			<Footer />
		</Fragment>
	);
};

export async function loader() {
	const response = await fetch('https://restcountries.com/v3.1/all');

	if (!response.ok) {
		throw new Response(
			JSON.stringify({ message: 'Failed to load the data.' }),
			{ status: 500 }
		);
	} else {
		const data = await response.json();
		return data;
	}
}

export default RootLayout;
