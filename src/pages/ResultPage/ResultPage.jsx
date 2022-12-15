import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as LeftButton } from '../../assets/svg/leftButton.svg';
import { ReactComponent as RightButton } from '../../assets/svg/rightButton.svg';

const ResultPage = () => {
  const [currentPeriod, setCurrentPeriod] = useState('current');

  const getHeaderText = () => {
    const day = new Date();
    const WEEKDAY = [
      'SUNDAY',
      'MONDAY',
      'TUESDAY',
      'WEDNESDAY',
      'THURSDAY',
      'FRIDAY',
      'SATURDAY',
    ];

    const todayInfo = {
      year: day.getFullYear(),
      date: day.getDate(),
      week: WEEKDAY[day.getDay()],
    };

    return `${todayInfo.year} ${todayInfo.week} ${todayInfo.date}`;
  };

  const handleTest = () => {
    const result = async () => {
      const currentUrl = window.location.href;
      console.log(currentUrl);
      await navigator.clipboard.writeText(currentUrl); // 클립보드 복사 로직
    };
    result();
  };

  return (
    <Container>
      <Header>
        <StyledLeftButton />
        <HeaderText>{getHeaderText()}</HeaderText>
        <StyledRightButton />
      </Header>
      <MainImage />
      <MainText>
        제주 황우지해변은 어쩌구 저쩌구하는 해변입니다 푸른빛이 도는 바다물결이
        특징이며 매년 10만명이 넘는 관광객이 방문하는 인기많은 해변입니다 어쩌구
        저쩌구 블라블라 제주 황우지해변은 어쩌구 저쩌구하는 해변입니다 푸른빛이
        도는 바다물결이 특징이며 매년 10만명이 넘는 관광객이 방문하는 인기많은
        해변입니다
      </MainText>
      <Testing onClick={handleTest}>테스팅</Testing>
    </Container>
  );
};

export default ResultPage;

const Container = styled.div`
  padding-top: 43px;
  padding: 20px;
  height: 100%;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.WHITE};
  background-color: ${({ theme }) => theme.colors.MAIN_BACKGROUND};
`;

const Header = styled.div`
  display: flex;
  width: calc(100% - 37px);
  margin: auto;
  margin-bottom: 26px;
  color: white;
  justify-content: center;
`;

const HeaderText = styled.div``;

const StyledLeftButton = styled(LeftButton)`
  margin-right: 49px;
  cursor: pointer;
`;

const StyledRightButton = styled(RightButton)`
  margin-left: 49px;
  cursor: pointer;
`;

const MainImage = styled.div`
  width: auto;
  height: 335px;
  background-color: white;
  margin-bottom: 22px;
`;

const MainText = styled.div`
  margin-bottom: 11px;
`;

const Testing = styled.div`
  background-color: blue;
  display: inline-block;
  min-width: 200px;
  padding: 50px;
`;
