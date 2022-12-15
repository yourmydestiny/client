import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ResultList from './ResultList';
import PopUp from 'components/PopUp';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Navigation } from 'swiper';

const ResultPage = () => {
  const [openModal, setOpenModal] = useState(true);

  const { state } = useLocation();

  console.log(state);

  SwiperCore.use([Navigation]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <Swiper>
        <SwiperSlide>
          <ResultList dateType={state} currentPeriod="current" />
        </SwiperSlide>
        <SwiperSlide>
          <ResultList dateType={state} currentPeriod="future" />
        </SwiperSlide>
      </Swiper>
      {/* <StyledSlider {...settings}>
        <ResultList dateType={state} currentPeriod="current" />
        <ResultList dateType={state} currentPeriod="future" />
      </StyledSlider> */}
      {openModal && (
        <PopUp
          close={() => {
            setOpenModal(false);
          }}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding-top: 46px;
  width: 100%;
  padding: 20px;
  overflow: auto;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.GRAY_000};
  background-color: ${({ theme }) => theme.colors.MAIN_BACKGROUND};
`;

const StyledSlider = styled(Slider)`
  position: relative;
  width: 100%;

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;
export default ResultPage;
