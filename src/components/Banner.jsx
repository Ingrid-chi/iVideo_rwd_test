import { useState } from 'react';
import styles from './Banner.module.scss';
import banner_1 from '../assets/banners/2024_12_6_christmas_event_1272_520.jpg';
import banner_2 from '../assets/banners/2023_03_14_可儲值上網卡-Banner_1272_520.jpg';
import banner_3 from '../assets/banners/2023_03_01_globalpickup_1272_520.jpg';

const Banner = () => {
  const slides = [
    {
      id: 1,
      content: 'Banner 1',
      src: banner_1,
    },
    {
      id: 2,
      content: 'Banner 2',
      src: banner_2,
    },
    {
      id: 3,
      content: 'Banner 3',
      src: banner_3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className={styles.banner}>
      <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide}>
        &lt;
      </button>
      <div
        className={styles.slides}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.slide}>
            <img src={slide.src} />
          </div>
        ))}
      </div>
      <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Banner;
