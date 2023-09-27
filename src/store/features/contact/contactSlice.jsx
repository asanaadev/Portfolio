import { createSlice } from "@reduxjs/toolkit";
import { sendEmail } from "./emailThunk";
import { useDispatch } from "react-redux";

const initialState = {
	thunk: {
		sending: false,
		error: null,
		success: false,
	},
	form: {
		name: '',
		email: '',
		message: '',
	}
}
// export const forThunk = ({ dispatch }) => {
// 	// const dispatch = useDispatch()
// 	dispatch(sssss(state.form))
// }

export const contactSlice = createSlice({
	name: 'contact',
	initialState,
	reducers: {
		sends: (state, action) => {
			state.form = action.payload
			// sendEmail = state.form
		},
		// sssss: (state, action) => {
		// 	sendEmail = action.payload
		// }
	},
	extraReducers: (builder) => {
		builder
			.addCase(sendEmail.pending, (state) => {
				state.thunk.sending = true;
				state.thunk.error = null;
				state.thunk.success = false;
			})
			.addCase(sendEmail.fulfilled, (state, action) => {
				state.thunk.sending = false;
				if (action.payload) {
					state.thunk.success = true;
					alert("Thank you. I will get back to you as soon as possible.")
				} else {
					state.thunk.error = 'Something went wrong';
					alert(state.thunk.error)
				}
			})
			.addCase(sendEmail.rejected, (state, action) => {
				state.thunk.sending = false;
				state.thunk.error = 'Something went wrong';
				alert(state.thunk.error)
			});
	},
})

export const { sends, sssss } = contactSlice.actions
export default contactSlice.reducer
