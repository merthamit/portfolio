import React from 'react';
import Data from './Data';
import './testimonials.css';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useHookView } from '../../hooks/useHookView';

const Testimonials = () => {
  const { ref, styleOption } = useHookView();
  return (
    <section
      className={`section container testimonials ${styleOption}`}
      ref={ref}
    >
      <h2 className="section__title">Clients & Reviews</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        className="testimonials__container grid"
      >
        {Data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonial__title">{title}</h3>
              <div className="subtitle">{subtitle}</div>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
