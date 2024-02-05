import React from 'react';
import css from './Footer.module.scss';
import { TfiCommentsSmiley } from "react-icons/tfi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { motion } from 'framer-motion';
import { footerVariants, staggerChildren } from '../../utils/motion';

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
            className={`innerWidth yPadding flexCenter ${css.container}`}>
                <div className={css.left}>
                    <span className="primaryText">
                        Let's make something <br />
                        amazing together.
                    </span>
                    <span className="primaryText">
                        Start by <a href="mailto:rasic.alexandar@gmail.com">saying Hi <TfiCommentsSmiley /> </a>
                    </span>
                </div>
                <div className={css.right}>
                    <div className={css.info}>
                        <span className="secondaryText">Information</span>
                        <p>+381606546008 <MdOutlinePhoneInTalk /></p>
                    </div>
                    
                </div>
            </motion.div>
        </motion.footer>
    )
};

export default Footer;