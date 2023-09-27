// emailThunk.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import emailjs from "@emailjs/browser"
// Замените на значения
const SERVICE_ID = 'service_elt23em'
const TEMPLATE_ID = 'template_65sipaj'
const USER_ID = 'l0cD1aU5ujrnUpotE'

export const sendEmail = createAsyncThunk('email/sendEmail', async (form, { dispatch }) => {
	try {
		const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
			from_name: form.name,
			to_name: 'Zhumabai',
			from_email: form.email,
			to_email: 'asanaalyev1@gmail.com',
			message: form.message,
		}, USER_ID);

		if (response.status === 200) {
			// dispatch(resetForm({
			// 	name: '',
			// 	email: '',
			// 	message: '',
			// }));
			form.name = ''
			form.email = ''
			form.message = ''
			return true;
		} else {
			return false;
		}
	} catch (error) {
		console.error(error);
		return false;
	}
});
