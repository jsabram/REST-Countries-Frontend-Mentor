import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
	name: 'theme',
	initialState: { isLight: true },
	reducers: {
		toggle(state) {
			state.isLight = !state.isLight;
		},
	},
});

export const themeActions = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
