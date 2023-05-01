import { useEffect } from 'react';
import {
	Link,
	useRouteLoaderData,
	useParams,
	useLocation,
} from 'react-router-dom';
import Card from '../reusable/Card';
import InfoEntry from '../reusable/InfoEntry';
import ErrorPage from '../../pages/ErrorPage';
import classes from './CountryDetails.module.css';

const CountryDetails = () => {
	const data = useRouteLoaderData('root-page');
	const params = useParams();
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	const id = params.countryId;

	const pathIncludesCountryId = data.some((country) =>
		id.includes(country.cca2)
	);

	if (!pathIncludesCountryId) {
		return <ErrorPage />;
	}

	const selectedCountry = data.find((country) => country.cca2 === id.slice(1));

	const currencies = selectedCountry?.currencies;
	let currenciesArr;
	let currenciesName;

	if (currencies) {
		currenciesArr = Object.keys(currencies).map((key) => [
			key,
			currencies[key],
		]);

		currenciesName = currenciesArr[0][1].name;
	}

	const languages = selectedCountry?.languages;
	let languagesValues;

	if (languages) {
		languagesValues = Object.values(languages).join(', ');
	}

	const borderCountriesArr = selectedCountry?.borders;
	let filteredCountries;
	let borderCountries;

	if (borderCountriesArr) {
		filteredCountries = data.filter((country) =>
			borderCountriesArr.includes(country.cca3)
		);

		borderCountries = (
			<div className={classes['country-information--borders']}>
				<h3>Border Countries:</h3>
				<div className={classes['border-countries']}>
					{filteredCountries.map((country) => (
						<Link to={`/REST-Countries-Frontend-Mentor/details/:${country.cca2}`}>{country.name.common}</Link>
					))}
				</div>
			</div>
		);
	}

	return (
		<section className={classes['details-content']}>
			<Card className={classes['details-card']}>
				<div className={classes['country-flag']}>
					<img
						src={selectedCountry.flags.svg}
						alt={selectedCountry.flags.alt}
					/>
				</div>
				<div className={classes['country-information']}>
					<h2>{selectedCountry.name.common}</h2>
					<div className={classes['country-information--box']}>
						<div className={classes['country-information--general']}>
							<InfoEntry
								title='Native Name'
								information={selectedCountry.name.official}
							/>
							<InfoEntry
								title='Population'
								information={selectedCountry.population.toLocaleString('en-US')}
							/>
							<InfoEntry title='Region' information={selectedCountry.region} />
							<InfoEntry
								title='Sub Region'
								information={selectedCountry.subregion}
							/>
							<InfoEntry
								title='Capital'
								information={selectedCountry.capital}
							/>
						</div>
						<div className={classes['country-information--additional']}>
							<InfoEntry
								title='Top Level Domain'
								information={selectedCountry.tld[0]}
							/>
							<InfoEntry
								title='Currencies'
								information={currenciesName ?? 'n/a'}
							/>
							<InfoEntry
								title='Languages'
								information={languagesValues ?? 'n/a'}
							/>
						</div>
					</div>
					{borderCountries}
				</div>
			</Card>
		</section>
	);
};

export default CountryDetails;
