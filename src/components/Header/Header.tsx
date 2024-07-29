import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "./navList";
import styles from "./Header.module.scss";
import Menu from "@/assets/icons/header/menu.svg?react";
import cross from "@/assets/icons/header/cross.svg";
import Logo from "../Logo/Logo";
import SocialsList from "../SocialsList/SocialsList";

const Header: React.FC = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <header>
      <div className={`container ${styles.headerContainer}`}>
        <nav className={styles.nav}>
          <Logo />
          <ul className={styles.navList}>
            {NAV_LINKS.map(({ title, navLink }, index) => (
              <li key={`${title}_${index}`}>
                <NavLink to={navLink}>{title}</NavLink>
              </li>
            ))}
          </ul>
          <SocialsList />
        </nav>

        {/*  Mobile menu */}
        <div className={styles.mobileContainer}>
          <button
            className={styles.menuBtn}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Menu width={28} height={32} />
          </button>
          <Logo />
        </div>
      </div>
      {isMenuToggled && (
        <div className={styles.mobileBox}>
          <button
            className={styles.crossBtn}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img src={cross} alt="mobile exit" />
          </button>

          <ul className={styles.mobileList}>
            {NAV_LINKS.map(({ title, navLink }, index) => (
              <li key={`${title}_${index}`}>
                <NavLink to={navLink}>{title}</NavLink>
              </li>
            ))}
          </ul>

          <SocialsList />
        </div>
      )}
    </header>
  );
};

export default Header;
