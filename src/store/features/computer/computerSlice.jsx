import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isMobile: false,
}

export const computerSlice = createSlice({
	name: 'computer',
	initialState,
	reducers: {
		mobile: (state, action) => {
			// state.isMobile = !state.isMobile
			state.isMobile = action.payload
		}
	}
})

export const { mobile } = computerSlice.actions
export default computerSlice.reducer
