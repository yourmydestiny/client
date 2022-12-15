import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ResultList from './ResultList';

const ResultPage = () => {
  const { state } = useLocation();
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
        <ResultList state={state} dataType={state} currentPeriod="current" />
        <ResultList state={state} dataType={state} currentPeriod="future" />
      </StyledSlider>
    </Container>
  );
};

const Container = styled.div`
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
