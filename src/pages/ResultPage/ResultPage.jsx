import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
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

  SwiperCore.use([Navigation]);

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
export default ResultPage;
