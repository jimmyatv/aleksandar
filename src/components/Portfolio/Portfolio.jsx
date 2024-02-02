import React from 'react';
import css from './Portfolio.module.scss';
import { FaHeart } from "react-icons/fa";
import {motion} from 'framer-motion';
import {fadeIn} from '../../utils/motion';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';

const Portfolio = () => {
    return (
        <section className={`paddings ${css.wrapper}`}>
            <div className={`innerWidth flexCenter ${css.container}`}>
                <div className={css.heading}>
                    <div>
                        <span className='primaryText'>
                            My Works
                        </span>
                        <p className='secondaryText' style={{ marginTop: '10px' }}>
                            Build with <FaHeart /> by Aleksandar Rasic
                        </p>
                    </div>

                    {/* Projects */}
                    <div className={css.cta}>
                        <motion.div 
                        variants={fadeIn('up', 'tween', 0.5, 0.6)}
                        >
                            <a target='_blank' href="https://jimmyatv.github.io/myBabySpa"><img src={project1} alt="" /></a>
                            <p>React project</p>
                        </motion.div>

                        <motion.div
                        variants={fadeIn('up', 'tween', 0.7, 0.6)}
                        >
                            <a target='_blank' href="https://jimmyatv.github.io/Ramen"><img src={project2} alt="" /></a>
                            <p>Bootstrap and Vanilla JS</p>
                        </motion.div>

                        <motion.div
                        variants={fadeIn('up', 'tween', 0.9, 0.6)}
                        >
                            <a target='_blank' href="https://jimmyatv.github.io/OwnItAll-byAlex"><img src={project3} alt="" /></a>
                            <p>Basic HTML and CSS</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Portfolio;