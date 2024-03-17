import React from 'react';
import css from './Portfolio.module.scss';
import { FaHeart } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn, staggerChildren, textVariant } from '../../utils/motion';
import { projects } from '../../utils/data';


const Portfolio = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.10 }}
            className={`paddings ${css.wrapper}`}>

            <a className="anchor" id="portfolio"></a>
            <div className={`innerWidth flexCenter ${css.container}`}>
                <div className={css.heading}>
                    <motion.div
                        variants={textVariant(0.5)}
                    >
                        <span className='primaryText'>
                            My Works
                        </span>
                        <p className='secondaryText' style={{ marginTop: '10px' }}>
                            Build with <FaHeart /> by Aleksandar Rasic
                        </p>
                    </motion.div>

                    {/* Projects */}
                    <div className={css.cta}>
                        {projects.map((project, idx) => {
                            return (
                                <motion.div key={idx}
                                    variants={fadeIn('up', 'easeOut', idx * 0.2 + 0.5, 0.6)}>
                                    <a target='_blank' rel='noopener noreferrer' title='Visit project' href={project.url}>
                                        <img src={project.img} alt="" />
                                    </a>
                                    <p>{project.name}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </motion.section>
    )
};

export default Portfolio;