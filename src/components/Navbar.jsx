import React from 'react'
import { styles } from '../styles'
// import { navLinks } from '../constants'
import { logo, menu, close, logocolor } from '../assets'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggle, actives, setScrolled } from '../store/features/navbar/navbarSlice'


export const Navbar = () => {
  const dispatch = useDispatch()
  const { isTrue, active, scrolled } = useSelector((state) => state.navbar)
  const { allKnowledges } = useSelector((state) => state.constants)
  const handleToggle = () => {
    dispatch(toggle(isTrue));
  };
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const threshold = 150

      if (scrollY >= threshold) {
        dispatch(setScrolled(true))
      } else {
        dispatch(setScrolled(false))
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [dispatch])

  const setClass = scrolled ? 'bg-primary' : 'bg-inherit';

  return (
    <nav
      className={`${styles.paddingX} ${setClass} w-full flex items-center transition ease-out duration-700 py-5 fixed top-0 z-20`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            dispatch(actives(""))
            window.scrollTo(0, 0);
          }}
        >
          <img src={logocolor} alt="Logo" className='w-9 h-9 object-contain' />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Zhumabai &nbsp;
            <span
              className='sm:block hidden'
            >| Dev</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {allKnowledges.navLinks.map((link) => (
            <li key={link.id}
              className={`
              ${active === link.title
                  ? "text-white"
                  : "text-secondary"}
                  hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => dispatch(actives(link.title))}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* // Change Burger */}
          <img src={isTrue ? close : menu} alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => handleToggle()}
          />
          <div className={`${!isTrue ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 ring-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end-end items-start flex-col gap-4'>
              {allKnowledges.navLinks.map((link) => (
                <li key={link.id}
                  className={`
              ${active === link.title
                      ? "text-white"
                      : "text-secondary"}
                  font-poppins font-medium cursor-pointer text=[16px]`}
                  onClick={() => {
                    handleToggle()
                    dispatch(actives(link.title))
                  }}

                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav >
  )
}
