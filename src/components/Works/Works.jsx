import React from 'react';
import css from './Works.module.scss';
import { motion } from 'framer-motion';
import { fadeIn, staggerChildren, textVariant2, zoomIn } from '../../utils/motion';
import { workExp } from '../../utils/data';
import { FaAmazon } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { MdOutlineAccountTree } from "react-icons/md";

const Works = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className={`paddings  ${css.wrapper}`}>

            <div className={`flexCenter innerWidth ${css.container}`}>
                <span className="primaryText yPaddings">
                    My work Experience
                </span>
                <div className={`flexCenter ${css.experiance}`}>
                    {workExp.map((exp, idx) => {
                        return (
                            <motion.div
                                variants={textVariant2}
                                className={`flexCenter ${css.exp}`} key={idx}>
                                <div className={css.post}>
                                    <h2>{exp.place}</h2>
                                    <p>{exp.tenure}</p>
                                </div>
                                <div className={css.role}>
                                    <h2>{exp.role}</h2>
                                    <p>{exp.detail}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                    <motion.div
                        variants={zoomIn(1, 1)}
                        className={css.progressbar}>
                        <motion.div
                            variants={fadeIn('down', 'twin', 2, 1.5)}
                            className={css.line}></motion.div>
                        <div><IoCodeSlash /></div>
                        <div><FaAmazon /></div>
                        <div><MdOutlineAccountTree /></div>
                    </motion.div>

                </div>
            </div>
        </motion.section>
    )
};

export default Works;