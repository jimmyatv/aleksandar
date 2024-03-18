import React from 'react'
import css from './Hero.module.scss';
import Jimmy from '../../assets/mainPhoto2.png';
import { FaReact } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion'
import vueIcon from '../../assets/vueIcon.png';

const Hero = () => {
    return (
        <section className={`paddings ${css.wrapper}`}>
            <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.15 }}
                className={` innerWidth ${css.container}`}>

                {/* upper Elements */}
                <div className={css.upperElements}>
                    <motion.span
                        variants={fadeIn('right', 'tween', 0.2, 1)}
                    >
                        Hi there <br />
                        I'm Aleksandar
                    </motion.span>
                    <motion.span
                        variants={fadeIn('left', 'tween', 0.4, 1)}
                    >
                        <strong>Talk is cheap. <br />
                        Actions speak</strong>
                    </motion.span>
                </div>


                {/* Main Photo */}
                <motion.div
                    variants={fadeIn('up', 'tween', 0.3, 1)}
                    className={css.jimmy}>
                    <motion.img
                        variants={slideIn('up', 'tween', 0.5, 1.3)}
                        src={Jimmy} alt="" />
                </motion.div>

                {/* email */}
                <a target='_blank' href="mailto:rasic.alexandar@gmail.com" className={css.email}>rasic.alexandar@gmail.com</a>

                {/* lower Elements */}
                <div className={css.lowerElements}>
                    <motion.div
                        variants={fadeIn('right', 'tween', 0.3, 1)}
                        className={css.experiance}>
                        <div className='primaryText'>5</div>
                        <div className='secondaryText'>
                            <div>Years</div>
                            <div>Exp.</div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeIn('left', 'tween', 0.5, 1)}
                        className={css.certificate}>
                        <div className={css.devIcons}>
                            <span><FaReact /></span>
                            <span><img src={vueIcon} alt="" /></span>
                        </div>
                        <span>React/Vue coder</span>
                        <span>Frontend developer</span>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero