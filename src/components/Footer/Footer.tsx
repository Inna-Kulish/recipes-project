import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.scss";
import { NAV_LINKS, SectionIds } from "../Header/navList";
import SocialsList from "../SocialsList/SocialsList";
import { RoutePages } from "../../routes/RoutePages";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavClick = (navLink?: RoutePages, sectionId?: SectionIds) => {
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (navLink) {
      navigate(navLink);
    }
  }
  return (
    <footer id={SectionIds.about} className={styles.footerContainer}>
      <div className={styles.wrap}>
        <div>
          <Logo />
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetuipisicing elit
          </p>
        </div>
        <ul className={styles.navList}>
          {NAV_LINKS.filter(({ title }) => title !== "Home").map(
            ({ title, navLink, sectionId }, index) => (
              <li key={`${title}_${index}`}>
                <a onClick={() => handleNavClick(navLink, sectionId)}>
                  {title}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
      <div className={styles.box}>
        <p className={styles.end}>
          © 2024 Powered by <span>Inna Kulish</span>
        </p>
        <SocialsList />
      </div>
    </footer>
  );
};

export default Footer;
