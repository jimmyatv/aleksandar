import React from 'react';
import css from './Portfolio.module.scss';
import { FaHeart } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn, staggerChildren, textVariant } from '../../utils/motion';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';

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
                        <motion.div
                            variants={fadeIn('up', 'easeOut', 0.5, 0.6)}
                        >
                            <a target='_blank' href="https://jimmyatv.github.io/myBabySpa"><img src={project1} alt="" /></a>
                            <p>Personal project in REACT</p>
                        </motion.div>

                        <motion.div
                            variants={fadeIn('up', 'easeOut', 0.7, 0.6)}
                        >
                            <a target='_blank' href="https://jimmyatv.github.io/SunDivisor/"><img src={project2} alt="" /></a>
                            <p>Vanilla JS</p>
                        </motion.div>

                        <motion.div
                            variants={fadeIn('up', 'easeOut', 0.9, 0.6)}
                        >
                            <a target='_blank' href="https://jimmyatv.github.io/OwnItAll-byAlex"><img src={project3} alt="" /></a>
                            <p>Basic HTML and CSS</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
};

export default Portfolio;