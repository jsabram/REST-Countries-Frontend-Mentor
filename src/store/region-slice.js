import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	selectedRegion: 'All',
};

const regionSlice = createSlice({
	name: 'region',
	initialState,
	reducers: {
		setRegion(state, action) {
			state.selectedRegion = action.payload;
		},
	},
});

export const regionActions = regionSlice.actions;

export const regionReducer = regionSlice.reducer;
