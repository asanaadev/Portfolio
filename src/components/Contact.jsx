import React, { useState, useRef } from 'react'
import { motion } from "framer-motion"
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { Wrapper } from '../hoc'
import { fadeIn, slideIn } from '../utlits/motion'
import { useDispatch, useSelector } from 'react-redux'
import { sends, sssss } from '../store/features/contact/contactSlice'
import { sendEmail } from '../store/features/contact/emailThunk'


const Contact = () => {
  const { sending, success, error } = useSelector((state) => state.contact.thunk);
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendEmail(form));
    // dispatch(sends(form));
  };

  const formRef = useRef()

  return (
    <div
      className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'
    >
      <motion.div
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        variants={fadeIn("right", "tween", 0.3, 1)}
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label
            className='flex flex-col'
          >
            <span
              className='text-white font-medium mb-4'
            >Your Name</span>
            <input
              type="text"
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label
            className='flex flex-col'
          >
            <span
              className='text-white font-medium mb-4'
            >Your Email</span>
            <input
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label
            className='flex flex-col'
          >
            <span
              className='text-white font-medium mb-4'
            >Your Message</span>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary resize-none py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            className='bg-tertiary py-4 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            type='submit'
          >
            {sending ? 'Sending...' : success ? "Send" : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        variants={fadeIn("left", "tween", 0.3, 1)}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default Wrapper(Contact, "contact")
