import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Status } from '../Status';
import { images } from '../SlidesImgData';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';

const Wrapper = styled.div`
  position: relative;
  /* max-width: 67rem; */
  max-width: calc(100% - 120.1rem);
  width: 100%;
  height: 100%;
  border-left: 1px solid ${(props) => props.theme.colorBorder};
  border-right: 1px solid ${(props) => props.theme.colorBorder};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 3rem;
`;

const WrapperAside = styled.div`
  width: 1rem;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.colorBorder};
`;

const Image = styled.img`
  max-height: 76vh;
  max-width: 100%;
  width: auto;
  margin: auto;
`;

const Text = styled.p`
  position: absolute;
  left: 3.4rem;
  top: 2.8rem;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontsm};
  line-height: 18px;
  color: ${(props) => props.theme.colorMain};
`;

const Cover = styled.div`
  position: relative;
  width: 100%;
`;

const ArrowPrev = styled.svg`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  width: 9px;
  height: 16px;
  fill: none;
  pointer-events: ${(props) => (props.fistSlide ? 'none' : 'auto')};
  & > path {
    fill: #a0a0a0;
    transition: all 0.2s ease;
  }
  &:hover {
    & > path {
      fill: ${(props) => props.theme.colorMain};
    }
  }
`;

const ArrowNext = styled.svg`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  width: 9px;
  height: 16px;
  fill: none;
  pointer-events: ${(props) => (props.lastSlide ? 'none' : 'auto')};
  & > path {
    fill: #a0a0a0;
    transition: all 0.2s ease;
  }
  &:hover {
    & > path {
      fill: ${(props) => props.theme.colorMain};
    }
  }
`;

export const Appearance = () => {
  const [slides, setSlides] = useState([]);
  const [lastSlide, setLastSlide] = useState(false);
  const [fistSlide, setFirstSlide] = useState(true);

  useEffect(() => {
    setSlides(images);
  }, []);

  const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return (
      <ArrowPrev
        viewBox="0 0 9 16"
        onClick={() => swiper.slidePrev()}
        fistSlide={fistSlide}
      >
        <path d="M8.95001 13.09H6.84003V15.2H8.95001V13.09Z" />
        <path d="M6.84003 10.98H4.72998V13.09H6.84003V10.98Z" />
        <path d="M4.71997 8.85999H2.60999V10.97H4.71997V8.85999Z" />
        <path d="M2.60999 6.75H0.5V8.85999H2.60999V6.75Z" />
        <path d="M4.71997 4.64001H2.60999V6.75H4.71997V4.64001Z" />
        <path d="M6.84003 2.52002H4.72998V4.63H6.84003V2.52002Z" />
        <path d="M8.95001 0.409973H6.84003V2.52002H8.95001V0.409973Z" />
      </ArrowPrev>
    );
  };

  const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return (
      <ArrowNext
        viewBox="0 0 9 16"
        onClick={() => swiper.slideNext()}
        lastSlide={lastSlide}
      >
        <path d="M2.53003 0.619995H0.420044V2.72998H2.53003V0.619995Z" />
        <path d="M4.64001 2.73999H2.53003V4.84998H4.64001V2.73999Z" />
        <path d="M6.75 4.84998H4.64001V6.96002H6.75V4.84998Z" />
        <path d="M8.85999 6.96002H6.75V9.07001H8.85999V6.96002Z" />
        <path d="M6.75 9.07001H4.64001V11.18H6.75V9.07001Z" />
        <path d="M4.64001 11.19H2.53003V13.3H4.64001V11.19Z" />
        <path d="M2.53003 13.3H0.420044V15.41H2.53003V13.3Z" />
      </ArrowNext>
    );
  };

  return (
    <>
      <Wrapper>
        <Text>APPEARANCE</Text>
        <Status status="online" color="#00c70a" />
        <Cover>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            onSlideChange={(swiper) => {
              swiper.activeIndex === swiper.slides.length - 1
                ? setLastSlide(true)
                : setLastSlide(false);
              swiper.activeIndex === 0
                ? setFirstSlide(true)
                : setFirstSlide(false);
            }}
          >
            {slides.map((item) => (
              <SwiperSlide>
                <Image key={item.img} src={item.img} alt="Nerv" />
              </SwiperSlide>
            ))}
            <SwiperButtonPrev />
            <SwiperButtonNext />
          </Swiper>
        </Cover>
      </Wrapper>
      <WrapperAside />
    </>
  );
};
