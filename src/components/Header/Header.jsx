import React from "react";
import css from "./Header.module.scss";
import { MdPhoneInTalk } from "react-icons/md";

const Header = () => {
  return (
    <div className={`paddings ${css.wrapper}`}>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Alex</div>

        <ul className={`flexCenter ${css.menu}`}>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Experience</a>
          </li>
          <li>
            <a href="/">Portfolio</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <p>+381606546008</p>
            <MdPhoneInTalk size={"40px"} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
