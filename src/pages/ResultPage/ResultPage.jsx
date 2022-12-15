import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ResultList from './ResultList';

const ResultPage = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <Container>
      <ResultList state={state} />
    </Container>
  );
};

export default ResultPage;

const Container = styled.div`
  padding-top: 46px;
  padding: 20px;
  height: 100%;
  overflow: auto;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.GRAY_000};
  background-color: ${({ theme }) => theme.colors.MAIN_BACKGROUND};
`;
