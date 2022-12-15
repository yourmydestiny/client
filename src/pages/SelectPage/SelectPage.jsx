import React, { useState } from 'react';
import styled from 'styled-components';
import FirstQuestions from './components/FirstQuestions';
import SecondQuestions from './components/SecondQuestions';

const SelectPage = () => {
  const [pageIdx, setPageIdx] = useState(0);
  const [selectedInfo, setSelectedInfo] = useState({
    first: null,
    second: null,
    third: null,
    fourth: null,
    fifth: null,
    sixth: null,
    seventh: null,
  });

  const pages = [
    <FirstQuestions
      selectedInfo={selectedInfo}
      setSelectedInfo={setSelectedInfo}
      setPageIdx={setPageIdx}
    />,
    <SecondQuestions
      selectedInfo={selectedInfo}
      setSelectedInfo={setSelectedInfo}
    />,
  ];

  return (
    <Container>
      <>{pages[pageIdx]}</>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  width: 100%;
  min-height: 100%;
  background: #1e2029;
`;

export default SelectPage;
