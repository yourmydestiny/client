import React from 'react';
import styled from 'styled-components';
import MainImg from '../../assets/jpeg/mainImg.jpeg';
import MainLogo from '../../assets/jpeg/MainLogo.png';
import StartLogo from '../../assets/jpeg/StartLogo.png';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
import Snowfall from 'react-snowfall';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => {
        navigate(`/selectpage`);
      }}
    >
      <Logo />
      <Text />
      <Snowfall snowflakeCount={60} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${MainImg});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const Logo = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 329px;
  height: 158px;
  background-image: url(${MainLogo});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Text = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 202px;
  height: 25px;
  background-image: url(${StartLogo});
  background-size: cover;
  background-repeat: no-repeat;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; */
`;

export default MainPage;
