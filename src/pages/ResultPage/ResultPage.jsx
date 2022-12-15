import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as LeftButton } from '../../assets/svg/leftButton.svg';
import { ReactComponent as RightButton } from '../../assets/svg/rightButton.svg';
import { ReactComponent as Marker } from '../../assets/svg/marker.svg';

const ResultPage = () => {
  const { state } = useLocation();

  console.log(state);
  const [currentPeriod, setCurrentPeriod] = useState('current');
  const [copiedState, setCopiedState] = useState(false);

  const images = [1, 2, 3];

  const friends = [1, 2];

  const plantImages = [1, 2, 3];

  const domainUrl = window.location.href;

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
      await navigator.clipboardContainer.writeText(currentUrl); // 클립보드 복사 로직
    };
    result();
  };

  console.log(currentPeriod);

  const changePast = () => {
    if (currentPeriod === 'current') {
      setCurrentPeriod('past');
    } else if (currentPeriod === 'future') {
      setCurrentPeriod('current');
    } else {
      return;
    }
  };

  const changeFuture = () => {
    if (currentPeriod === 'current') {
      setCurrentPeriod('future');
    } else if (currentPeriod === 'past') {
      setCurrentPeriod('current');
    } else {
      return;
    }
  };

  const handleCopy = () => {
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 3000);
  };

  return (
    <Container>
      <Header>
        <StyledLeftButton currentPeriod={currentPeriod} onClick={changePast} />
        <HeaderText>{getHeaderText()}</HeaderText>
        <StyledRightButton
          currentPeriod={currentPeriod}
          onClick={changeFuture}
        />
      </Header>
      <MainImage />
      <MainText>
        제주 황우지해변은 어쩌구 저쩌구하는 해변입니다 푸른빛이 도는 바다물결이
        특징이며 매년 10만명이 넘는 관광객이 방문하는 인기많은 해변입니다 어쩌구
        저쩌구 블라블라 제주 황우지해변은 어쩌구 저쩌구하는 해변입니다 푸른빛이
        도는 바다물결이 특징이며 매년 10만명이 넘는 관광객이 방문하는 인기많은
        해변입니다
      </MainText>
      <SubFirstText>내가 있는 위치는?</SubFirstText>
      <SubFirstMain>
        <Marker />
        <SubFirstMainText>무슨무슨도로</SubFirstMainText>
      </SubFirstMain>
      <SubFirstImage />
      <SubSecondText>내가 가진 식물은?</SubSecondText>
      <SubSecondImageContainer>
        {plantImages.map(() => {
          return <SubSecondImage />;
        })}
      </SubSecondImageContainer>
      <SubSecondStory>
        제주 황우지해변은 어쩌구 저쩌구하는 해변입니다 푸른빛이 도는 바다물결이
        특징이며 매년 10만명이 넘는 관광객이 방문하는 인기많은 해변입니다 어쩌구
        저쩌구 블라블라
      </SubSecondStory>
      <SubThirdText>주변에 이런 곳은 어때요?</SubThirdText>
      <AroundContainer>
        {images.map(() => {
          return <AroundSolo />;
        })}
      </AroundContainer>
      <FitFriendContainer>
        {friends.map((friend, index) => {
          return (
            <FriendContainer>
              <FitFriendImage />
              {index === 0 ? (
                <div>잘 맞는 친구</div>
              ) : (
                <div>잘 안맞는 친구</div>
              )}
            </FriendContainer>
          );
        })}
      </FitFriendContainer>
      {copiedState && <CopiedText>클립보드에 저장되었습니다.</CopiedText>}
      <ClipboardContainer>
        <ClipboardText>{domainUrl}</ClipboardText>
        <ClipboardButton copiedState={copiedState} onClick={handleCopy}>
          복사
        </ClipboardButton>
      </ClipboardContainer>
    </Container>
  );
};

export default ResultPage;

const Container = styled.div`
  padding-top: 43px;
  padding: 20px;
  height: 100%;
  overflow: auto;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.GRAY_000};
  background-color: ${({ theme }) => theme.colors.MAIN_BACKGROUND};
`;

const Header = styled.div`
  display: flex;
  width: calc(100% - 37px);
  margin: auto;
  margin-bottom: 26px;
  color: ${({ theme }) => theme.colors.GRAY_000};
  justify-content: center;
`;

const HeaderText = styled.div``;

const StyledLeftButton = styled(LeftButton)`
  margin-right: 49px;
  cursor: ${props =>
    props.currentPeriod === 'past' ? 'not-allowed' : 'pointer'};
  stroke: ${props =>
    props.currentPeriod === 'past'
      ? props.theme.colors.GRAY_700
      : props.theme.colors.GRAY_000};
`;

const StyledRightButton = styled(RightButton)`
  margin-left: 49px;
  cursor: pointer;
  cursor: ${props =>
    props.currentPeriod === 'future' ? 'not-allowed' : 'pointer'};
  stroke: ${props =>
    props.currentPeriod === 'future'
      ? props.theme.colors.GRAY_700
      : props.theme.colors.GRAY_000};
`;

const MainImage = styled.div`
  width: auto;
  height: 335px;
  width: calc(100% + 40px);
  margin: 0 0 22px -20px;
  background-color: ${({ theme }) => theme.colors.GRAY_000};
`;

const MainText = styled.div`
  margin-bottom: 53px;
  font-weight: 500;
  line-height: 24px;
  font-size: 15px;
`;

const Testing = styled.div`
  background-color: blue;
  display: inline-block;
  min-width: 200px;
  padding: 50px;
`;

const SubFirstText = styled.p`
  font-size: 20px;
  margin-bottom: 12px;
`;

const SubFirstMain = styled.div`
  display: flex;
  margin-bottom: 37px;
`;

const SubFirstImage = styled.div`
  width: 236px;
  background-color: blue;
  height: 133px;
  margin: auto;
  margin-bottom: 50px;
`;

const SubFirstMainText = styled.div`
  margin-left: 9px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.GRAY_600};
`;

const SubSecondText = styled.p`
  font-size: 20px;
  margin-bottom: 38px;
`;

const SubSecondStory = styled.p`
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 59px;
`;

const SubSecondImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 40px;
  width: 287px;
`;

const SubSecondImage = styled.div`
  background-color: blue;
  width: 88px;
  margin-right: 16px;
  height: 89px;
`;

const SubThirdText = styled.p`
  font-size: 20px;
  margin-bottom: 51px;
`;

const AroundContainer = styled.div``;

const AroundSolo = styled.div`
  border-radius: 28px;
  height: 110px;
  background-color: blue;
  margin-bottom: 15px;
`;

const FitFriendContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 35px;
  justify-content: space-between;
`;

const FriendContainer = styled.div`
  width: 48%;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
`;

const FitFriendImage = styled.div`
  border-radius: 28px;
  background-color: blue;
  height: 115px;
  width: 100%;
  margin-bottom: 17px;
`;

const CopiedText = styled.div`
  color: ${({ theme }) => theme.colors.GRAY_000};
  margin-bottom: 9px;
  text-align: center;
  font-size: 15px;
`;

const ClipboardContainer = styled.button`
  width: 100%;
  border-radius: 13px;
  background-color: #e0e0e0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 21px;
`;

const ClipboardText = styled.div`
  padding: 16px 22px;
  color: ${({ theme }) => theme.colors.GRAY_700};
  text-overflow: ellipsis;
`;

const ClipboardButton = styled.button`
  border-radius: 0 13px 13px 0;
  padding: 16px 22px;
  cursor: pointer;
  color: ${props =>
    !props.copiedState
      ? props.theme.colors.MAIN_BACKGROUND
      : props.theme.colors.GRAY_000};
  background-color: ${props =>
    !props.copiedState
      ? props.theme.colors.ACTIVE_COLOR
      : props.theme.colors.GRAY_500};
`;
