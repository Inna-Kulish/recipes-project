import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ name }) => (
  <button className={styles.btn}>{name}</button>
);

export default Button;
