import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Skills.scss'

const Skills = () => {
   const [abouts, setAbouts] = useState([])

   useEffect(() => {
      setAbouts([])
      const query = '*[_type == "abouts"] | order(description asc)'

      client.fetch(query).then((data) => setAbouts(data))
   }, [])


   return (
      <>
         <div className='app__skills'>
            <div className='app__skills-wrap'>
               <h3>I work with</h3>
               <div className='app__profiles'>
                  { abouts.map((about, index) => (
                     <motion.a
                        whileInView={ { opacity: 1 } }
                        whileHover={ { scale: 1.1 } }
                        transition={ { duration: 0.5, type: 'tween∂' } }
                        className='app__profile-item'
                        key={ about.title + index }
                        href={ about.codeLink }
                        target='_blank'
                     >
                        { about.imgUrl && (
                           <img src={ urlFor(about.imgUrl) } alt={ about.title } />
                        ) }
                        <p className='skills__text'>
                           { about.title }
                        </p>
                     </motion.a>
                  )) }
               </div>
            </div>
         </div>
      </>
   )
}

export default MotionWrap(Skills, 'app__skills')
