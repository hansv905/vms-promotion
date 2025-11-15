'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './ImageSlider.module.css';

export default function ImageSlider({ images }: { images: string[] }) {
  return (
    <div className={styles.swiperContainer}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        spaceBetween={0}
        slidesPerView={1}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`slide ${i}`}
              className={styles.slideImage}
              onError={(e) => {
                e.currentTarget.src =
                  'https://dummyimage.com/1200x800/333/eee&text=Image+Not+Found&font=roboto';
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
