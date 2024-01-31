import React from 'react';
import css from './Experties.module.scss';
import { projectExperience, WhatDoIHelp } from '../../utils/data';
import {motion} from 'framer-motion';
import {fadeIn, staggerContainer, textVariant} from '../../utils/motion';

const Experties = () => {
    return (
        <motion.section 
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: false, amount: 0.25}}
        
        className={css.wrapper}>
            <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
                <div className={css.leftSide}>
                    {projectExperience.map((exp, idx) => {
                        return (
                            <motion.div
                            variants={fadeIn('right', 'tween', (idx+1)*0.2, 1)}
                            className={css.exp} key={idx}>
                                <div className="flexCenter" style={{ background: exp.bg }}>
                                    <exp.icon size={25} color='white' />
                                </div>

                                <div>
                                    <span>{exp.name}</span>
                                    <span>{exp.projects} Projects</span>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.div
                variants={textVariant(0.5)}
                className={css.rightSide}>
                    <span className="primaryText">
                        What I can do for you?
                    </span>
                    <p>
                        {WhatDoIHelp.map((help, idx) => {
                            return (
                                <span className="secondaryText" key={idx}>
                                    {help}
                                </span>
                            )
                        })}
                    </p>

                    <div className={`flexCenter ${css.stats}`}>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className='primaryText'>285+</span>
                            <span className='secondaryText'>Projects completed</span>
                        </div>
                        <div className={`flexCenter ${css.stat}`}>
                            <span className='primaryText'>120+</span>
                            <span className='secondaryText'>Happy clients</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
};

export default Experties;