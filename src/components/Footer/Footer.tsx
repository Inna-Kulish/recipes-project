import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.scss";
import { NAV_LINKS } from "../Header/navList";
import SocialsList from "../SocialsList/SocialsList";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.wrap}>
        <div>
          <Logo />
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetuipisicing elit
          </p>
        </div>
        <ul className={styles.navList}>
          {NAV_LINKS.filter(({ title }) => title !== "Home").map(
            ({ title, navLink }, index) => (
              <li key={`${title}_${index}`}>
                <NavLink to={navLink}>{title}</NavLink>
              </li>
            )
          )}
        </ul>
      </div>
      <div className={styles.box}>
        <p className={styles.end}>© 2024 Powered by <span>Inna Kulish</span></p>
        <SocialsList/>
      </div>
    </footer>
  );
};

export default Footer;
