import React, { useState, useEffect, useRef } from 'react';
import css from './Header.module.scss';
import { MdPhoneInTalk } from "react-icons/md";
import { motion } from 'framer-motion';
import { getMenuStyles, headerVariants } from '../../utils/motion';
import useHeaderShadow from "../../hooks/useHeaderShadow";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GrMailOption } from "react-icons/gr";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow()
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setMenuOpened(false);
    }
  };

  const handledMenu = () => {
    setMenuOpened(!menuOpened);
  };

  const handleMenuItemClick = () => {
    if (window.innerWidth <= 768) {
      setMenuOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      initial='hidden'
      whileInView='show'
      variants={headerVariants}
      viewport={{ once: false, amount: 0.15 }}
      className={`paddings ${css.wrapper}`} style={{ boxShadow: headerShadow }} >

      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>
          <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/aleksandar-rasic-jimmy/"><FaLinkedinIn /></a>
          <a target='_blank' rel="noreferrer" href="https://github.com/jimmyatv"><FiGithub /></a>
          <a target='_blank' rel="noreferrer" href="mailto:rasic.alexandar@gmail.com"><GrMailOption /></a>
        </div>
        <ul
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}>
          <li><a href="#aboutMe" onClick={handleMenuItemClick}>About me</a></li>
          <li><a href="#services" onClick={handleMenuItemClick}>Services</a></li>
          <li><a href="#experience" onClick={handleMenuItemClick}>Experience</a></li>
          <li><a href="#portfolio" onClick={handleMenuItemClick}>Projects</a></li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+381606546008</p>
            <a href="tel:+381606546008"><MdPhoneInTalk size={'40px'} /></a>
          </li>
        </ul>
        {/* Only for media screen */}
        <button
          ref={buttonRef}
          onClick={handledMenu}
          className={`${css.burger} ${menuOpened ? css['is-active'] : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.div>
  );
};

export default Header;
