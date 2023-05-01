import { useDispatch, useSelector } from 'react-redux';
import { nameActions } from '../../store/name-slice';
import { regionActions } from '../../store/region-slice';
import classes from './SearchBar.module.css';

const SearchBar = () => {
	const dispatch = useDispatch();
	const enteredName = useSelector(
		(state) => state.countryName.enteredInputValue
	);

	const inputValueHandler = (event) => {
		dispatch(nameActions.setName(event.target.value));
	};

	const selectHandler = (event) => {
		dispatch(regionActions.setRegion(event.target.value));
	};

	return (
		<div className={classes['search-box']}>
			<span className={classes['input-box']}>
				<div className={classes.icon}>
					<i className='fa-solid fa-magnifying-glass'></i>
				</div>
				<input
					placeholder='Search for a country'
					onChange={inputValueHandler}
					value={enteredName}
				/>
			</span>
			<select defaultValue='All' onChange={selectHandler}>
				<option value='All' disabled hidden>
					Filter by Region
				</option>
				<option value='All'>All</option>
				<option value='Africa'>Africa</option>
				<option value='Americas'>Americas</option>
				<option value='Asia'>Asia</option>
				<option value='Europe'>Europe</option>
				<option value='Oceania'>Oceania</option>
			</select>
		</div>
	);
};

export default SearchBar;
