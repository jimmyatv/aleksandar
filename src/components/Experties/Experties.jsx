import React, { useState, useEffect } from 'react';
import css from './Experties.module.scss';
import { projectExperience, WhatDoIHelp } from '../../utils/data';
import { motion } from 'framer-motion';
import { fadeIn, footerVariants, staggerContainer, textVariant } from '../../utils/motion';
import { useInView } from 'react-intersection-observer'; // Dodajemo hook za praćenje vidljivosti
import NumberCounter from 'number-counter';

const Experties = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.7, // Pratite vidljivost kada je više od 50% sekcije vidljivo
        triggerOnce: false, // Pokretanje samo jednom kada postane vidljivo
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <motion.section
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.15 }}
            className={css.wrapper}>
            <a className="anchor" id="services"></a>
            <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`} ref={ref}>
                <div className={css.leftSide}>
                    <motion.span
                        variants={footerVariants}
                        className="primaryText">
                        My achievements in my current company!
                    </motion.span>
                    {projectExperience.map((exp, idx) => {
                        return (
                            <motion.div
                                variants={fadeIn('right', 'tween', (idx + 1) * 0.2, 1)}
                                className={css.exp} key={idx}>
                                <div className="flexCenter" style={{ background: exp.bg }}>
                                    <exp.icon size={25} color='white' />
                                </div>

                                <div>
                                    <span>{exp.name}</span>
                                    <span>{exp.projects}</span>
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
                            {isVisible && (
                                <span className='primaryText'>
                                    <NumberCounter end={300} start={100} delay='5' preFix='+' />
                                </span>
                            )}
                            <span className='secondaryText'>Projects and tasks completed</span>
                        </div>
                        <div className={`flexCenter ${css.stat}`}>
                            {isVisible && (
                                <span className='primaryText'>
                                    <NumberCounter end={50} start={10} delay='5' preFix='+' />
                                </span>
                            )}
                            <span className='secondaryText'>Happy clients</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
};

export default Experties;
