import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { EffectCoverflow, Pagination } from 'swiper/modules';

interface SwiperComponentProps {
  swiperSlideItems: string[];
}

// Initialize the swiper core
SwiperCore.use([EffectCoverflow, Pagination]);

const SwiperComponent: React.FC<SwiperComponentProps> = ({ swiperSlideItems }) => {
  const swiperConfig = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      clickable: true,
    },
    className: 'mySwiper mt-5 bg-dark',
  };

  return (
    <div className='bg-[#312E81] p-8'>
      <Swiper {...swiperConfig}>
      {
              swiperSlideItems.map((img) => {
                return(
                    <SwiperSlide>
                        <img src={img} className='w-[300px]'/>
                    </SwiperSlide>
                )
            })
          }
      </Swiper>
    </div>
  );
};

export default SwiperComponent;

export{};
