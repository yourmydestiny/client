import React from 'react';
import { useNavigate } from '../../../../node_modules/react-router-dom/dist/index';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import { postSelectedInfo } from 'apis/apis';

const SecondQuestions = ({
  selectedInfo,
  setSelectedInfo,
  handleClickSelectedInfo,
}) => {
  const navigate = useNavigate();

  return (
    <Container>
      <ContentsBox>
        <SubText>내일 난 이걸 꼭 보고싶어</SubText>
        <SelectBox>
          {FIRST.map(({ id, text }) =>
            selectedInfo.fifth === id ? (
              <ActiveSelectItem
                key={id}
                onClick={() => {
                  setSelectedInfo({ ...selectedInfo, fifth: id });
                }}
              >
                {text}
              </ActiveSelectItem>
            ) : (
              <SelectItem
                key={id}
                onClick={() => {
                  setSelectedInfo({ ...selectedInfo, fifth: id });
                }}
              >
                {text}
              </SelectItem>
            )
          )}
        </SelectBox>
      </ContentsBox>
      {selectedInfo.fifth && (
        <ContentsBox>
          <SubText>내일 난 이걸 꼭 보고싶어</SubText>
          <FlexBox>
            {SECOND.map(({ id, text }) =>
              selectedInfo.sixth === id ? (
                <ActiveFlexItem
                  key={id}
                  onClick={() => {
                    setSelectedInfo({ ...selectedInfo, sixth: id });
                  }}
                >
                  {text}
                </ActiveFlexItem>
              ) : (
                <FlexItem
                  key={id}
                  onClick={() => {
                    setSelectedInfo({ ...selectedInfo, sixth: id });
                  }}
                >
                  {text}
                </FlexItem>
              )
            )}
          </FlexBox>
        </ContentsBox>
      )}
      {selectedInfo.sixth && (
        <>
          <ContentsBox>
            <SubText>내일 난 이걸 꼭 보고싶어</SubText>
            <SelectBox>
              {THIRD.map(({ id, text }) =>
                selectedInfo.seventh === id ? (
                  <ActiveSelectItem
                    key={id}
                    onClick={() => {
                      setSelectedInfo({ ...selectedInfo, seventh: id });
                    }}
                  >
                    {text}
                  </ActiveSelectItem>
                ) : (
                  <SelectItem
                    key={id}
                    onClick={() => {
                      setSelectedInfo({ ...selectedInfo, seventh: id });
                    }}
                  >
                    {text}
                  </SelectItem>
                )
              )}
            </SelectBox>
          </ContentsBox>
          {selectedInfo.fifth && selectedInfo.sixth && selectedInfo.seventh ? (
            <ButtonBox>
              <ActiveBtn
                onClick={() => {
                  handleClickSelectedInfo();
                }}
              >
                결과보기
              </ActiveBtn>
            </ButtonBox>
          ) : (
            <ButtonBox>
              <DisabledBtn>결과보기</DisabledBtn>
            </ButtonBox>
          )}
        </>
      )}
    </Container>
  );
};

const FIRST = [
  { id: 1, text: '해 뜨는 거' },
  { id: 2, text: '야경' },
  { id: 3, text: '비 오는 거리' },
  { id: 4, text: '노을' },
  { id: 5, text: '영화/드라마' },
  { id: 6, text: '전시회' },
];
const SECOND = [
  { id: 1, text: '유람선타기' },
  { id: 2, text: '오토바이 운전' },
  { id: 3, text: '폭포 아래서 명상하기' },
  { id: 4, text: '고래보기' },
];
const THIRD = [
  { id: 1, text: '친절한' },
  { id: 2, text: '소박한' },
  { id: 3, text: '트렌디한' },
  { id: 4, text: '화려한' },
  { id: 5, text: '느긋한' },
  { id: 6, text: '마이웨이' },
];

const Container = styled.div`
  width: 100%;
  padding-top: 60px;
`;

const ContentsBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 174px;
`;

const SubText = styled.p`
  color: white;
  margin: 8px 0;
  font-size: 19px;
  font-weight: 600;
`;

const SelectBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 0 10px;
  margin-bottom: 26px;
  width: 100%;
  height: 96px;
`;

const FlexBox = styled.div`
  display: flex;
  padding: 0 10px;
  margin-bottom: 26px;
  width: 100%;
  height: 96px;
  flex-wrap: wrap;
  -webkit-box-pack: center;
`;

const FlexItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 93.6px;
  height: 40px;
  margin-bottom: 16px;
  margin-right: 16px;
  padding: 0 20px;
  border-radius: 11px;
  border: 1px solid #abc2a7;
  color: #abc2a7;
  font-size: 14px;
  cursor: pointer;
`;

const ActiveFlexItem = styled(FlexItem)`
  background: #84f5b8;
  color: #1e2029;
  border: none;
  cursor: pointer;
`;

const SelectItem = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 11px;
  border: 1px solid #abc2a7;
  color: #abc2a7;
  cursor: pointer;
`;

const ActiveSelectItem = styled(SelectItem)`
  background: #84f5b8;
  color: #1e2029;
  border: none;
  cursor: pointer;
`;

const ButtonBox = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActiveBtn = styled.button`
  width: 271px;
  height: 60px;
  background: #84f5b8;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  color: #1e2029;
  cursor: pointer;
`;

const DisabledBtn = styled(ActiveBtn)`
  background: #8a8b91;
`;
export default SecondQuestions;
