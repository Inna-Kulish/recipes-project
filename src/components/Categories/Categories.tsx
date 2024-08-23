import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import useFetch from "../../hooks/useFetch";
import { CategoryData } from "../../utils/types";
import { CATEGORY_IMG, CategoryKey } from "./categoryImg";
import styles from "./Categories.module.scss";

interface CategoriesProps {
  onCategoryClick: (category: string) => void;
}

const Categories:React.FC<CategoriesProps> = ({ onCategoryClick }) => {
  const { data } = useFetch<CategoryData>("/list.php?c=list");

  const filteredCategories = useMemo(() => {
    return data?.meals || [] ;
  }, [data]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Categories</h2>
      <Swiper
        freeMode={true}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          1440: { slidesPerView: 6 },
          320: { slidesPerView: 3 },
        }}
        className={`${styles.list} mySwiper`}
      >
        {filteredCategories.map(({ strCategory }, index) => (
          <SwiperSlide key={`${strCategory}_${index}`} className={styles.item}>
            <div className={styles.link} onClick={()=>onCategoryClick(strCategory)}>
              <img
                className={styles.img}
                src={CATEGORY_IMG[strCategory.toLowerCase() as CategoryKey]}
                alt={strCategory}
                width="100px"
                height="100px"
                loading="lazy"
              />
              <p className={styles.name}>{strCategory}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
