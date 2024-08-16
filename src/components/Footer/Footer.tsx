import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.scss";
import { NAV_LINKS, SectionIds } from "../Header/navList";
import SocialsList from "../SocialsList/SocialsList";
import { RoutePages } from "../../routes/RoutePages";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const handleNavClick = (navLink?: RoutePages, sectionId?: SectionIds) => {
     if (sectionId) {
       if (location.pathname !== RoutePages.Home) {
        navigate(RoutePages.Home);
         setTimeout(() => {
           console.log(sectionId);
          scrollToSection(sectionId);
        }, 1000);
      } else {
        scrollToSection(sectionId);
      }
    } else if (navLink) {
      navigate(navLink);
    }
  }

  const scrollToSection = (sectionId: SectionIds) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              <li key={`${title}_${index}`} className={styles.item}>
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
