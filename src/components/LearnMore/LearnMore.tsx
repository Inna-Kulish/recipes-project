import React from "react";
import Button from "../Button/Button";
import DescribeSection from "../DescribeSection/DescribeSection";
import styles from "./LearnMore.module.scss";
import chefDesc from "@/assets/images/learn_more/chef_desc.png";
import chefTab from "@/assets/images/learn_more/chef_tab.png";
import chefMob from "@/assets/images/learn_more/chef_mob.png";
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
    <picture>
      <source
        media="(min-width: 768px)"
        srcSet={chefDesc}
        type="image/png"
        width="710px"
        height="597px"
      />
      <source
        media="(max-width: 767px)"
        srcSet={chefTab}
        type="image/png"
        width="526px"
        height="442px"
      />
      <source
        media="(min-width: 375px)"
        srcSet={chefMob}
        type="image/png"
        width="329px"
        height="277px"
      />
      <img
        src={chefMob}
        alt="portrait happy male chef dressed uniform"
        width="329px"
        height="277px"
        loading="lazy"
      />
    </picture>
  </div>
);

export default LearnMore;
