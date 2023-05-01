import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './theme-slice';
import { nameReducer } from './name-slice';
import { regionReducer } from './region-slice';

const store = configureStore({
	reducer: {
		theme: themeReducer,
		countryName: nameReducer,
		region: regionReducer,
	},
});

export default store;
