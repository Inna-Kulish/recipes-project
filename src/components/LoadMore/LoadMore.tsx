import React from "react";
import styles from "../Button/Button.module.scss";
import stylesBtn from "./LoadMore.module.scss";

interface LoadMorePrors {
  onClick: () => void;
}

const LoadMore: React.FC<LoadMorePrors> = ({ onClick }) => (
  <button className={`${styles.btn} ${stylesBtn.btnLoadMore}`} onClick={onClick}>
    Load More
  </button>
);
export default LoadMore;
