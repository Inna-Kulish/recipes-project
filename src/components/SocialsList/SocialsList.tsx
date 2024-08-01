import React from "react";
import { SOCIALS_LINKS } from "./socialsLinks";
import styles from "./SocialsList.module.scss";

const SocialsList: React.FC = () => (
  <ul className={styles.socialsList}>
    {SOCIALS_LINKS.map(({ name, Icon, link }, index) => (
      <li key={`${name}_${index}`}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Icon />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialsList;
