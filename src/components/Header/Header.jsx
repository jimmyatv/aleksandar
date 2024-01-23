import React, { useState } from 'react';
import css from './Header.module.scss';
import { MdPhoneInTalk } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from 'framer-motion';
import { getMenuStyles, headerVariants } from '../../utils/motion';

const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false);
  const handledMenu = () => {
    setMenuOpened(!menuOpened)
  }

  return (
    <motion.div
      initial='hidden'
      whileInView='show'
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>

      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>
          Alex
        </div>

        <ul
        style={getMenuStyles(menuOpened)}
        className={`flexCenter ${css.menu}`}>
          <li><a href="/">Services</a></li>
          <li><a href="/">Experience</a></li>
          <li><a href="/">Portfolio</a></li>
          <li><a href="/">Projects</a></li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+381606546008</p>
            <MdPhoneInTalk size={'40px'} />
          </li>
        </ul>
{/* Only for media screen */}
        <div onClick={handledMenu} className={css.menuIcon}>
          <BiMenuAltRight size={'40px'} />
        </div>
      </div>
    </motion.div>
  )
};

export default Header;