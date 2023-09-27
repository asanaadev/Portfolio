import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isTrue: false,
	active: '',
	scrolled: false,
};

export const navBarSlice = createSlice({
	name: "navbar",
	initialState,
	reducers: {
		toggle: (state, action) => {
			state.isTrue = !state.isTrue
		},
		actives: (state, { payload }) => {
			state.active = payload
		},
		setScrolled: (state, action) => {
			state.scrolled = action.payload
		},
	}
})

export const { toggle, actives, setScrolled } = navBarSlice.actions
export default navBarSlice.reducer
