import { useEffect, useState } from 'react';
import { useRouteLoaderData, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from '../reusable/Card';
import InfoEntry from '../reusable/InfoEntry';
import LoadingAnimation from './LoadingAnimation';
import classes from './CountriesList.module.css';

const CountriesList = () => {
	const [data, setData] = useState([]);
	const [isLoading, setisLoading] = useState(true);
	const countriesArray = useRouteLoaderData('root-page');

	useEffect(() => {
		setisLoading(true);

		const timer = setTimeout(() => {
			setData(countriesArray);
			setisLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	const enteredCountryName = useSelector(
		(state) => state.countryName.enteredInputValue
	);
	const selectedRegion = useSelector((state) => state.region.selectedRegion);

	const filteredCountries = data.filter((country) => {
		const nameCheck =
			enteredCountryName.trim() === '' ||
			country.name.common
				.toLowerCase()
				.includes(enteredCountryName.toLowerCase());

		const regionCheck =
			selectedRegion === 'All' || country.region === selectedRegion;

		return nameCheck && regionCheck;
	});

	return (
		<Card>
			<ul className={classes['countries-list']}>
				{filteredCountries.map((country) => (
					<li
						className={classes.country}
						key={country.cca2}
						id={country.cca2}
						name={country.name.common}
					>
						<Link to={`/REST-Countries-Frontend-Mentor/details/:${country.cca2}`} className={classes['country-link']}>
							<div className={classes['country-flag']}>
								<img src={country.flags.png} alt={country.flags.alt} />
							</div>
							<div className={classes['country-description']}>
								<h2>{country.name.common}</h2>
								<InfoEntry
									title='Population'
									information={country.population.toLocaleString('en-US')}
								/>
								<InfoEntry title='Region' information={country.region} />
								<InfoEntry title='Capital' information={country.capital} />
							</div>
						</Link>
					</li>
				))}
				{isLoading && data.length === 0 && <LoadingAnimation />}
				{!isLoading && filteredCountries.length === 0 && (
					<p className={classes.result}>No results</p>
				)}
			</ul>
		</Card>
	);
};

export default CountriesList;
