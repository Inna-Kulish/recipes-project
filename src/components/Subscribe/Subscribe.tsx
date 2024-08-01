import React from "react";
import Button from "../Button/Button";
import DescribeSection from "../DescribeSection/DescribeSection";
import styles from "./Subscribe.module.scss";
import { SectionIds } from "../Header/navList";

const Subscribe: React.FC = () => (
  <div id={SectionIds.contact} className={styles.container}>
    <DescribeSection
      title="Deliciousness to your inbox"
      describe="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
    />
    <form className={styles.form} name="subscribe_form">
      <input
        className={styles.input}
        name="email"
        type="email"
        placeholder="Your email address..."
        required
      />

      <Button name="Subscribe" />
    </form>
  </div>
);

export default Subscribe;
