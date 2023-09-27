import { createSlice } from "@reduxjs/toolkit";
import allKnowledges from '../../../constants/index'

const initialState = {
	allKnowledges,
}
const constantsSlice = createSlice({
	name: 'constants',
	initialState,
	reducers: {},
})

export default constantsSlice.reducer
