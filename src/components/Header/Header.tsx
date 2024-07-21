import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS, SOCIALS_LINKS } from "./navList";
import styles from "./Header.module.scss";
import Menu from "../../assets/menu.svg?react";
import cross from "../../assets/cross.svg";

const Header = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <header>
      <div className={`container ${styles.headerContainer}`}>
          <nav className={styles.nav}>
            <Link to="/" className={styles.logo}>
              Foodieland<span>.</span>
          </Link>
          <ul className={styles.navList}>
            {NAV_LINKS.map(({ title, navLink }, index) => (
                <li key={`${title}_${index}`}>
                <NavLink to={navLink}>{title}</NavLink>
              </li>
             ))}
            </ul>
          <ul className={styles.socialsList}>
            {SOCIALS_LINKS.map(({name, Icon, link}, index) => (
              <li key={`${name}_${index}`}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <Icon />
                </a>
              </li>
            ))}
            </ul>
        </nav>
        
          {/*  Mobile menu */}
          <div className={styles.mobileContainer}>
            <button
              className={styles.menuBtn}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Menu width={28} height={32} />
            </button>
            <Link to="/" className={styles.logo}>
              Foodieland<span>.</span>
            </Link>
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

          <ul className={styles.socialsList}>
            {SOCIALS_LINKS.map(({name, Icon, link}, index) => (
              <li key={`${name}_${index}`}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <Icon />
                </a>
              </li>
            ))}
            </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
