import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	enteredInputValue: '',
};

const nameSlice = createSlice({
	name: 'countryName',
	initialState,
	reducers: {
		setName(state, action) {
			state.enteredInputValue = action.payload;
		},
	},
});

export const nameActions = nameSlice.actions;

export const nameReducer = nameSlice.reducer;
