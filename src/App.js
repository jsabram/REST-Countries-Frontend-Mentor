import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RootLayout, { loader as countriesLoader } from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import CountriesListPage from './pages/CountriesListPage';
import CountryDetailsPage from './pages/CountryDetailsPage';
import './assets/light-mode.css';
import './assets/dark-mode.css';

const router = createBrowserRouter([
	{
		path: '',
		element: <RootLayout />,
		id: 'root-page',
		loader: countriesLoader,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <CountriesListPage />,
			},
			{
				path: '/details/:countryId',
				element: <CountryDetailsPage />,
			},
			{
				path: '*',
				element: <ErrorPage />,
			},
		],
	},
]);

const App = () => {
	const currentTheme = useSelector((state) => state.theme.isLight);

	let theme = currentTheme ? 'light' : 'dark';

	return (
		<section className={theme}>
			<RouterProvider router={router}></RouterProvider>
		</section>
	);
};

export default App;
