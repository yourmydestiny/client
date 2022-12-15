import React from 'react';
import styled from 'styled-components';
import SpinnerImg from '../assets/jpeg/SpinnerImg.gif';

const Spinner = () => {
  return (
    <Container>
      <SpinnerBox>
        <Img src={SpinnerImg} alt="스피너" />
        <Text>나의 제주 모습을</Text>
        <Text>만들고 있어요</Text>
      </SpinnerBox>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 20px;
  width: 100%;
  min-height: 100%;
  background: #1e2029;
`;

const SpinnerBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 228px;
`;

const Img = styled.img`
  display: block;
  margin-bottom: 15px;
  width: 183px;
  height: 145px;
`;

const Text = styled.p`
  margin-top: 5px;
  font-size: 21px;
  color: white;
`;

export default Spinner;
