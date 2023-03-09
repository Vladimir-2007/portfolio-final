import React from 'react'
import { motion } from 'framer-motion'

import './Navbar.scss'
import { navVariants } from '../../utils/motion'

const Navbar = () => {

   return (
      <motion.nav
         variants={ navVariants }
         initial='hidden'
         whileInView='show'
         className='app__navbar'
      >
         <div className='app__navbar-main'>
            <a href='/' className='app__navbar-logo'>
               My Portfolio
            </a>
            <ul className='app__navbar-links'>
               <li className='p-text'>
                  <a href="mailto:vladmir_37@mail.ru">
                     Email: vladmir_37@mail.ru
                  </a>
               </li>
            </ul>
         </div>
      </motion.nav>
   )
}

export default Navbar
