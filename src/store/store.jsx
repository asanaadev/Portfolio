import { combineReducers, configureStore } from "@reduxjs/toolkit";
import navBarSlice from "./features/navbar/navbarSlice";
import computerSlice from "./features/computer/computerSlice";
import constantsSlice from "./features/constants/constantsSlice";
import contactSlice from "./features/contact/contactSlice";

const reducers = combineReducers({
	navbar: navBarSlice,
	computer: computerSlice,
	constants: constantsSlice,
	contact: contactSlice,
})

export const store = configureStore({
	reducer: reducers
})
