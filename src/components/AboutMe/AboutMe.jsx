import React from 'react';
import css from './AboutMe.module.scss';
import { motion } from 'framer-motion';
import { footerVariants, staggerChildren } from '../../utils/motion';
import Slider from 'react-slick';
import { comments, sliderSettings } from '../../utils/data';

const AboutMe = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.20 }}
            className={`paddings ${css.wrapper}`}>


            <motion.div
            variants={footerVariants}
            className={`yPaddings innerWidth ${css.container}`}>
                <div className={`flexCenter ${css.heading}`}>
                    <span className="primaryText">Something about me!</span>
                </div>

                {/* carousel */}
                <div style={{ marginTop: '1.2rem' }} className={`yPaddings ${css.comments}`}>
                    <Slider
                        {...sliderSettings}
                        className={css.slider}
                    >
                        {comments.map((comment, idx) => {
                            return (
                                <div className={`flexCenter ${css.comment}`}>
                                    <img src={comment.img} alt="" />
                                    <h4 style={{marginTop:'1.5rem'}}>{comment.name}</h4>
                                    <div className={css.line}></div>
                                    <p>{comment.comment}</p>

                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </motion.div>
        </motion.section>
    )
};

export default AboutMe;