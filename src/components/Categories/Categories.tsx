import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import useFetch from "../../hooks/useFetch";
import { CategoryData } from "../../utils/types";
import { CATEGORY_IMG, CategoryKey } from "./categoryImg";
import styles from "./Categories.module.scss";

const Categories = () => {
  const { data } = useFetch<CategoryData>(
    "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
  );

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
        {data?.meals.map(({ strCategory }, index) => (
          <SwiperSlide key={`${strCategory}_${index}`} className={styles.item}>
            <a href="" className={styles.link}>
              <img
                className={styles.img}
                src={CATEGORY_IMG[strCategory.toLowerCase() as CategoryKey]}
                alt={strCategory}
                width="100px"
                height="100px"
              />
              <p className={styles.name}>{strCategory}</p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
