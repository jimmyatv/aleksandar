import React from 'react';
import css from './Footer.module.scss';
import { TfiCommentsSmiley } from "react-icons/tfi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { motion } from 'framer-motion';
import { footerVariants, staggerChildren } from '../../utils/motion';
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GrMailOption } from "react-icons/gr";

const Footer = () => {
    return (
        <motion.footer
            variants={staggerChildren}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.20 }}

            className={`paddings ${css.wrapper}`}>


            <motion.div
                variants={footerVariants}
                className={`innerWidth yPadding paddings flexCenter ${css.container}`}>
                <div className={css.left}>
                    <span className="primaryText">
                        Let's make something <br />
                        amazing together.
                    </span>
                    <span className="primaryText">
                        Start by <br /> <a href="mailto:rasic.alexandar@gmail.com">saying Hi <TfiCommentsSmiley /> </a>
                    </span>
                </div>
                <div className={css.right}>
                    <div className={css.info}>
                        <span className="secondaryText">Information</span>
                        <p>+381606546008 <MdOutlinePhoneInTalk /></p>
                        <div className={css.name}>
                            <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/aleksandar-rasic-jimmy/"><FaLinkedinIn /></a>
                            <a target='_blank' rel="noreferrer" href="https://github.com/jimmyatv"><FiGithub /></a>
                            <a target='_blank' rel="noreferrer" href="mailto:rasic.alexandar@gmail.com"><GrMailOption /></a>
                        </div>
                    </div>

                </div>
            </motion.div>
        </motion.footer>
    )
};

export default Footer;