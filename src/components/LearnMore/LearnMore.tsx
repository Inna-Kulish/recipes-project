import React from "react";
import Button from "../Button/Button";
import DescribeSection from "../DescribeSection/DescribeSection";
import styles from "./LearnMore.module.scss";
import chef from "@/assets/images/learn_more/chef.png";
import { SectionIds } from "../Header/navList";

const LearnMore: React.FC = () => (
  <div id={SectionIds.blog} className={styles.container}>
    <div className={styles.descWrap}>
      <DescribeSection
        title="Everyone can be a chef in their own kitchen"
        describe="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim"
      />
      <Button name={"Learn More"} />
    </div>
    <img src={chef} alt="portrait happy male chef dressed uniform" />
  </div>
);

export default LearnMore;
