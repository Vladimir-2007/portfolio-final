import React, { useState, useEffect } from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import './Work.scss'

const Work = () => {
   const [activeFilter, setActiveFilter] = useState('All')
   const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
   const [works, setWorks] = useState([])
   const [filterWork, setFilterWork] = useState([])


   useEffect(() => {
      const query = '*[_type == "works"]'
      client.fetch(query).then((data) => {
         setWorks(data)
         setFilterWork(data)

      })
   }, [])

   const handleWorkFilter = (item) => {
      setActiveFilter(item)
      setAnimateCard([{ y: 100, opacity: 0 }])

      setTimeout(() => {
         setAnimateCard([{ y: 0, opacity: 1 }])

         if (item === 'All') {
            setFilterWork(works)
         } else {
            setFilterWork(works.filter((work) => work.tags.includes(item)))
         }
      }, 500)
   }

   return (
      <div className='app__works'>
         <h2 className='works__text'>
         </h2>
         <div className='app__work-filter'>
            { [
               'All',
               'HTML CSS JS',
               'React',
               'Vue',
               'Django',
               'Laravel',
            ].map((item, index) => (
               <div
                  key={ index }
                  onClick={ () => handleWorkFilter(item) }
                  className={ `app__work-filter-item ${
                     activeFilter === item ? 'item-active' : ''
                  }` }
               >
                  <p>{ item }</p>
               </div>
            )) }
         </div>
         <motion.div
            animate={ animateCard }
            transition={ { duration: 1, delayChildren: 1 } }
            className='app__work-portfolio'
         >
            { filterWork?.map((work, index) => (
               <a href={ work.projectLink } key={ index } target='_blank' rel='noreferrer'>
                  <div
                     className='app__work-item'>
                     <div className='app__work-img'>
                        <img src={ urlFor(work.imgUrl) } alt={ work.name } />
                     </div>

                     <div className='app__work-content '>
                        <h4>{ work.title }</h4>
                        <p className='p__author p__desc'><span>Description:</span> { work.description }</p>
                        <p className='p__author'>
                           <span>Author:</span> SVM
                        </p>
                        <p className='p__date'>
                           <span>Date:</span> 2021-2023
                        </p>
                        <div className='app__work-tag '>
                           <p>{ work.tags[1] } </p>
                        </div>
                     </div>

                     <motion.div
                        whileHover={ { opacity: [0, 1] } }
                        transition={ {
                           duration: 0.25,
                           ease: 'easeInOut',
                           staggerChildren: 0.5,
                        } }
                        className='app__work-hover'
                     >
                        <button onClick={ () => window.open(work.codeLink, '_blank') }>
                           <motion.div
                              whileInView={ { scale: [0, 1] } }
                              whileHover={ { scale: [1, 0.9] } }
                              transition={ { duration: 0.25 } }
                           >
                              <AiFillGithub />
                           </motion.div>
                        </button>
                     </motion.div>

                  </div>
               </a>
            )) }
            { !filterWork.length && (
               <div className='in__process'>
                  <h1>In the process of being placed in the portfolio</h1>
               </div>
            ) }

         </motion.div>
      </div>
   )
}

export default
   MotionWrap(Work, 'app__works')