import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from 'next/image'



import "@splidejs/react-splide/css";
// import styles from "../tagList/tagList.module.scss";
import styles from "@/components/tagList/tagList.module.scss"


export const TagList = () => {
  return (
    <Splide className={styles.slideWrap}
    options={ {
        perPage: 4,
        rewind:true,
        perMove:1,
        
      } }>
      <SplideSlide>
        <div className={styles.tagIconBox}>
          <p className={styles.tagIcon}>
          <Image src="/icons8-css3-40.png" objectFit="cover" width={40} height={40} className={styles.Icon} alt='cssロゴ'/>
          </p>
          <p className={styles.tagName}>css</p>
        </div>
      </SplideSlide>
      {/* <SplideSlide>
        <div className={styles.tagIconBox}>
          <p className={styles.tagIcon}>
          <Image src="/react.png" objectFit="cover" width={40} height={40} className={styles.Icon} alt='reactロゴ'/>
          </p>
          <p className={styles.tagName}>react</p>
        </div>
      </SplideSlide> */}
      {/* <SplideSlide>
        <div className={styles.tagIconBox}>
          <p className={styles.tagIcon}>
          <Image src="/next.png" objectFit="cover" width={40} height={40} className={styles.Icon} alt='next.jsロゴ'/>
          </p>
          <p className={styles.tagName}>next.js</p>
        </div>
      </SplideSlide> */}
      {/* <SplideSlide>
        <div className={styles.tagIconBox}>
          <p className={styles.tagIcon}>
          <Image src="/icons8-css3-40.png" objectFit="cover" width={40} height={40} className={styles.Icon} alt='cssロゴ'/>
          </p>
          <p className={styles.tagName}>css</p>
        </div>
      </SplideSlide> */}
      {/* <SplideSlide>
        <div className={styles.tagIconBox}>
          <p className={styles.tagIcon}>
          <Image src="/react.png" objectFit="cover" width={40} height={40} className={styles.Icon} alt='reactロゴ'/>
          </p>
          <p className={styles.tagName}>react</p>
        </div>
      </SplideSlide> */}
      <SplideSlide>
        <div className={styles.tagIconBox}>
          <p className={styles.tagIcon}>
          <Image src="/next.png" objectFit="cover" width={40} height={40} className={styles.Icon} alt='next.jsロゴ'/>
          </p>
          <p className={styles.tagName}>typescript</p>
        </div>
      </SplideSlide>
    </Splide>
  );
};
