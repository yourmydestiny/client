import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ResultList from './ResultList';
import PopUp from 'components/PopUp';

const ResultPage = () => {
  const [openModal, setOpenModal] = useState(true);

  const { state } = useLocation();

  console.log(state);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        <ResultList dateType={state} currentPeriod="current" />
        <ResultList dateType={state} currentPeriod="future" />
      </StyledSlider>
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
