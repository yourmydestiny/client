import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
import { useMutation } from 'react-query';
import { postSelectedInfo } from 'apis/apis';
import FirstQuestions from './components/FirstQuestions';
import SecondQuestions from './components/SecondQuestions';

const SelectPage = () => {
  const [isLoading, setIsLoading] = useState(false);
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

  const navigate = useNavigate();

  const timeout = data => {
    setTimeout(() => {
      navigate('/resultList', { state: data });
    }, 2000);
  };

  const fetchedSelectedInfo = useMutation(postSelectedInfo, {
    onMutate: () => {
      setIsLoading(true);
    },
    onSuccess: data => {
      data && timeout(data.data);
    },
  });

  const handleClickSelectedInfo = () => {
    fetchedSelectedInfo.mutate(selectedInfo);
  };

  const pages = [
    <FirstQuestions
      selectedInfo={selectedInfo}
      setSelectedInfo={setSelectedInfo}
      setPageIdx={setPageIdx}
    />,
    <SecondQuestions
      selectedInfo={selectedInfo}
      setSelectedInfo={setSelectedInfo}
      setIsLoading={setIsLoading}
      handleClickSelectedInfo={handleClickSelectedInfo}
    />,
  ];

  if (isLoading) {
    return <div>로딩중</div>;
  } else {
    return (
      <Container>
        <>{pages[pageIdx]}</>
      </Container>
    );
  }
};

const Container = styled.div`
  padding: 20px;
  width: 100%;
  min-height: 100%;
  background: #1e2029;
`;

export default SelectPage;
