import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

const Logo: React.FC = () => (
  <Link to="/" className={styles.logo}>
    Foodieland<span>.</span>
  </Link>
);

export default Logo;
