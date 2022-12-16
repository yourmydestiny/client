import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DisTriBtn } from '../../../assets/svg/disTriBtn.svg';
import { ReactComponent as ActTriBtn } from '../../../assets/svg/actTriBtn.svg';

const FirstQuestions = ({ selectedInfo, setSelectedInfo, setPageIdx }) => {
  return (
    <Container>
      <HeaderText>가장 나다운 말을 선택해주세요.</HeaderText>
      <ContentsBox>
        <SubText>다른 사람들은 제가 이렇다고 말해요.</SubText>
        <SelectBox>
          {FIRST.map(({ id, text }) =>
            selectedInfo.first === id ? (
              <ActiveSelectItem
                key={id}
                onClick={() => {
                  setSelectedInfo({ ...selectedInfo, first: id });
                }}
              >
                {text}
              </ActiveSelectItem>
            ) : (
              <SelectItem
                key={id}
                onClick={() => {
                  setSelectedInfo({ ...selectedInfo, first: id });
                }}
              >
                {text}
              </SelectItem>
            )
          )}
        </SelectBox>
      </ContentsBox>
      {selectedInfo.first && (
        <ContentsBox>
          <SubText>쉬는 시간에 저는 이걸 할래요.</SubText>
          <SelectBox>
            {SECOND.map(({ id, text }) =>
              selectedInfo.second === id ? (
                <ActiveSelectItem
                  key={id}
                  onClick={() => {
                    setSelectedInfo({ ...selectedInfo, second: id });
                  }}
                >
                  {text}
                </ActiveSelectItem>
              ) : (
                <SelectItem
                  key={id}
                  onClick={() => {
                    setSelectedInfo({ ...selectedInfo, second: id });
                  }}
                >
                  {text}
                </SelectItem>
              )
            )}
          </SelectBox>
        </ContentsBox>
      )}
      {selectedInfo.second && (
        <ContentsBox>
          <SubText>당장 이걸 가고 싶어요.</SubText>
          <SelectBox>
            {THIRD.map(({ id, text }) =>
              selectedInfo.third === id ? (
                <ActiveSelectItem
                  key={id}
                  onClick={() => {
                    setSelectedInfo({ ...selectedInfo, third: id });
                  }}
                >
                  {text}
                </ActiveSelectItem>
              ) : (
                <SelectItem
                  key={id}
                  onClick={() => {
                    setSelectedInfo({ ...selectedInfo, third: id });
                  }}
                >
                  {text}
                </SelectItem>
              )
            )}
          </SelectBox>
        </ContentsBox>
      )}
      {selectedInfo.third && (
        <>
          <ContentsBox>
            <SubText>세상이 망한다면 마지막으로 이걸 먹겠어요.</SubText>
            <SelectBox>
              {FOURTH.map(({ id, text }) =>
                selectedInfo.fourth === id ? (
                  <ActiveSelectItem
                    key={id}
                    onClick={() => {
                      setSelectedInfo({ ...selectedInfo, fourth: id });
                    }}
                  >
                    {text}
                  </ActiveSelectItem>
                ) : (
                  <SelectItem
                    key={id}
                    onClick={() => {
                      setSelectedInfo({ ...selectedInfo, fourth: id });
                    }}
                  >
                    {text}
                  </SelectItem>
                )
              )}
            </SelectBox>
          </ContentsBox>
          {selectedInfo.first &&
          selectedInfo.second &&
          selectedInfo.third &&
          selectedInfo.fourth ? (
            <ButtonBox>
              <ActTriBtn
                onClick={() => {
                  setPageIdx(1);
                }}
              />
            </ButtonBox>
          ) : (
            <ButtonBox>
              <DisTriBtn />
            </ButtonBox>
          )}
        </>
      )}
    </Container>
  );
};
const FIRST = [
  { id: 1, text: '재미있는' },
  { id: 2, text: '평화로운' },
  { id: 3, text: '진지한' },
  { id: 4, text: '낭만적인' },
  { id: 5, text: '신비로운' },
  { id: 6, text: '깔끔한' },
];
const SECOND = [
  { id: 1, text: '산책' },
  { id: 2, text: '승마' },
  { id: 3, text: '수영' },
  { id: 4, text: '캠핑' },
  { id: 5, text: '휴식' },
  { id: 6, text: '스노클링' },
];
const THIRD = [
  { id: 1, text: '단풍구경' },
  { id: 2, text: '쇼핑' },
  { id: 3, text: '해외여행' },
  { id: 4, text: '꽃구경' },
  { id: 5, text: '드라이브' },
  { id: 6, text: '등산' },
];
const FOURTH = [
  { id: 1, text: '해물라면' },
  { id: 2, text: '흑돼지' },
  { id: 3, text: '돌돔' },
  { id: 4, text: '아이스크림' },
  { id: 5, text: '고기국수' },
  { id: 6, text: '뿔소라' },
];

const Container = styled.div`
  width: 100%;
  background: #1e2029;
`;

const HeaderText = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  color: #858899;
  font-size: 16px;
`;

const ContentsBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 174px;
`;

const SubText = styled.p`
  margin: 8px 0;
  color: white;
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default FirstQuestions;
