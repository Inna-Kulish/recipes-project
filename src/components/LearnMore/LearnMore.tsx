import Button from "../Button/Button";
import styles from "./LearnMore.module.scss";
import chef from "@/assets/images/learn_more/chef.png";

const LearnMore = () => {
  return (
    <div className={styles.container}>
      <div className={styles.descWrap}>
        <h2 className={styles.title}>
          Everyone can be a chef in their own kitchen
        </h2>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim
        </p>
        <Button name={"Learn More"} />
      </div>
      <img src={chef} alt="portrait happy male chef dressed uniform" />
    </div>
  );
};

export default LearnMore;
