import React from "react";
import styles from "./DescribeSection.module.scss";

interface DescribeSectionProps {
  title: string;
  describe: string;
}

const DescribeSection: React.FC<DescribeSectionProps> = ({
  title,
  describe,
}) => (
  <>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.desc}>{describe}</p>
  </>
);

export default DescribeSection;
