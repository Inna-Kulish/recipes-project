import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import styles from "../styles/components/Header.module.scss";
import Instagram from "../assets/instagram.svg?react";
import Facebook from "../assets/facebook.svg?react";
import Twitter from "../assets/twitter.svg?react";
import Menu from "../assets/menu.svg?react";
import cross from "../assets/cross.svg";

const Header = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <header>
      <div className={`container ${styles.headerContainer}`}>
        {isAboveMediumScreens ? (
          <nav className={styles.nav}>
            <a href="" className={styles.logo}>
              Foodieland<span>.</span>
            </a>
            <ul className={styles.navList}>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Recipes</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">About us</a>
              </li>
            </ul>
            <ul className={styles.socialsList}>
              <li>
                <a href="">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="">
                  <Twitter />
                </a>
              </li>
              <li>
                <a href="">
                  <Instagram />
                </a>
              </li>
            </ul>
          </nav>
        ) : (
          /*  Mobile menu */
          <div className={styles.mobileContainer}>
            <button
              className={styles.menuBtn}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Menu width={28} height={32} />
            </button>
            <a href="" className={styles.logo}>
              Foodieland<span>.</span>
            </a>
          </div>
        )}
      </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <div className={styles.mobileBox}>
          <button
            className={styles.crossBtn}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img src={cross} alt="mobile exit" />
          </button>

          <ul className={styles.mobileList}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Recipes</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
