import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Marker } from '../../assets/svg/marker.svg';
import KakaoShare from './KakaoShare';
import { getResultInfo } from 'apis/apis';
import { useQuery } from 'react-query';
import { ReactComponent as Check } from '../../assets/svg/check.svg';
import { ReactComponent as UnCheck } from '../../assets/svg/unCheck.svg';

const ResultList = ({ currentPeriod, dateType = 'beomseom' }) => {
  const { data } = useQuery('getResultInfo', () => getResultInfo(dateType), {
    refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    onSuccess: data => {
      console.log(data);
    },
    onError: e => {
      console.log(e.message);
    },
  });
  const [copiedState, setCopiedState] = useState(false);
  const periodIndex = currentPeriod === 'current' ? 0 : 1;
  const CURRENT_URL = 'https://mytamla.netlify.app/';

  const friends = [1, 2];

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

    return {
      year: day.getFullYear(),
      date: day.getDate(),
      week: WEEKDAY[day.getDay()],
      month: day.getMonth() + 1,
    };
  };

  const todayInfo = getHeaderText();
  console.log(todayInfo);
  const getPeriodText = () => {
    const year = currentPeriod === 'current' ? todayInfo.year : 2060;

    return `${year}년 ${todayInfo.month}월 ${todayInfo.date}일`;
  };

  const PERIOD_TEXT = getPeriodText();

  const handleCopy = () => {
    setCopiedState(true);
    const result = async () => {
      await navigator.clipboard.writeText(CURRENT_URL); // 클립보드 복사 로직
      setTimeout(() => setCopiedState(false), 3000);
    };
    result();
  };

  return (
    <Container>
      <MainCoast>{`${
        currentPeriod === 'current'
          ? '오늘의'
          : currentPeriod === 'past'
          ? '과거의'
          : '미래의'
      } ${data?.data[periodIndex].coastalName}`}</MainCoast>
      <CurrentPeriodYear>{PERIOD_TEXT}</CurrentPeriodYear>
      <MainImage src={data?.data[periodIndex].coastalImage} />
      <MainText>{data?.data[periodIndex].coastalContent}</MainText>
      <SubFirstText>내가 있는 위치는?</SubFirstText>
      <SubFirstMain>
        <Marker />
        <SubFirstMainText>{data?.data[periodIndex].location}</SubFirstMainText>
      </SubFirstMain>
      <SubFirstImage src={data?.data[periodIndex].locationImage} />
      <SubSecondText>내가 가진 식물은?</SubSecondText>
      <SubSecondImageContainer>
        {data?.data[periodIndex].holdingCreature.map((value, index) => {
          return (
            <CreatureContent>
              <SubSecondImage key={index} src={value.image} />
              <SubSecondName>{value?.name}</SubSecondName>
              <KindContainer>
                {value.kind === '보호종' ? <Check /> : <UnCheck />}
                <SubSecondKind kind={value.kind}>{value?.kind}</SubSecondKind>
              </KindContainer>
            </CreatureContent>
          );
        })}
      </SubSecondImageContainer>
      <SubThirdText>주변에 이런 곳은 어때요?</SubThirdText>
      <AroundContainer>
        {data?.data[periodIndex].place.map((value, index) => {
          return <AroundSolo key={index} src={value.image} />;
        })}
      </AroundContainer>
      {currentPeriod === 'future' ? (
        <WhyThis>왜 이렇게 되었을까요?</WhyThis>
      ) : (
        ''
      )}
      {currentPeriod === 'future' ? (
        <WhyThisText>
          온실가스 배출이 늘어나면서 수온이 상승해
          <br />
          토종 생물들이 더 이상 살 수 없게 되었어요.
          <br /> 해수면 상승이 가속화되어 제주가 빠르게 잠겼어요.
          <br />
          해양쓰레기가 늘어나면서 생물들이 살기 어려운 환경이 되어갔어요. 우리가
          가고 싶은 제주는 이렇게 사라져가요.
        </WhyThisText>
      ) : (
        ''
      )}
      <FitFriendContainer>
        {friends.map((friend, index) => {
          return (
            <FriendContainer>
              {index === 0 ? (
                <>
                  <FitFriendImage src={data?.data[periodIndex].friend} />{' '}
                  <div>잘 맞는 친구</div>
                </>
              ) : (
                <>
                  <FitFriendImage src={data?.data[periodIndex].enemy} />{' '}
                  <div>잘 안맞는 친구</div>
                </>
              )}
            </FriendContainer>
          );
        })}
      </FitFriendContainer>
      {copiedState && <CopiedText>클립보드에 저장되었습니다.</CopiedText>}
      <ClipboardContainer>
        <ClipboardText>{CURRENT_URL}</ClipboardText>
        <ClipboardButton copiedState={copiedState} onClick={handleCopy}>
          복사
        </ClipboardButton>
      </ClipboardContainer>
      <KakaoShare
        title={data?.data[periodIndex].coastalName}
        description={data?.data[periodIndex].coastalContent}
        image={data?.data[periodIndex].coastalImage}
      />
    </Container>
  );
};

export default ResultList;

const Container = styled.div`
  width: 100%;
  padding-top: 46px;
  height: 100%;
  overflow: auto;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.GRAY_000};
  background-color: ${({ theme }) => theme.colors.MAIN_BACKGROUND};
`;

const MainCoast = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.GRAY_600};
  font-size: 17px;
  margin-bottom: 6px;
`;

const CurrentPeriodYear = styled.div`
  font-size: 23px;
  text-align: center;
  color: ${({ theme }) => theme.colors.GRAY_000};
  margin-bottom: 33px;
`;

const MainImage = styled.img`
  height: 335px;
  width: calc(100% + 40px);
  margin: 0 0 22px -20px;
`;

const MainText = styled.div`
  margin-bottom: 53px;
  font-weight: 500;
  line-height: 24px;
  font-size: 15px;
`;

const SubFirstText = styled.p`
  font-size: 20px;
  margin-bottom: 12px;
`;

const SubFirstMain = styled.div`
  display: flex;
  margin-bottom: 37px;
`;

const SubFirstImage = styled.img`
  width: 236px;
  height: 133px;
  display: block;
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

const WhyThis = styled.div`
  font-size: 20px;
  margin-bottom: 18px;
`;

const WhyThisText = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.GRAY_400};
  line-height: 24px;
  margin-bottom: 44px;
`;

const CreatureContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubSecondImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 40px;
  width: 350px;
`;

const SubSecondImage = styled.img`
  width: 88px;
  height: 89px;
`;

const SubSecondName = styled.div`
  font-size: 15px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.GRAY_500};
`;

const KindContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SubSecondKind = styled.div`
  color: ${props =>
    props.kind === '보호종' ? props.theme.colors.ACTIVE_COLOR : '#FF5858'};
  margin-left: 6px;
`;

const SubThirdText = styled.p`
  font-size: 20px;
  margin-bottom: 51px;
`;

const AroundContainer = styled.div`
  margin-bottom: 51px;
`;

const AroundSolo = styled.img`
  display: block;
  width: 100%;
  border-radius: 28px;
  height: 110px;
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

const FitFriendImage = styled.img`
  border-radius: 28px;
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
