import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import ModalImg from '../assets/jpeg/ModalImg.png';
import ExitIcon from '../assets/jpeg/exitIcon.png';

const PopUp = ({ close }) => {
  const backHandler = e => {
    e.stopPropagation();
    close();
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={close}
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 100,
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          width: '20em',
          boxSizing: 'border-box',
          border: 'none',
          background: 'white',
          borderRadius: '0.5em',
          outline: 'none',
          padding: '1.5em 1em',
          zIndex: 30,
        },
      }}
    >
      <ContentsBox onClick={backHandler}>
        <GuideImg src={ModalImg} />
        <ExitImg src={ExitIcon} />
      </ContentsBox>
    </Modal>
  );
};

const ContentsBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
`;

const GuideImg = styled.img`
  display: block;
  width: 320px;
  height: 353px;
`;

const ExitImg = styled.img`
  display: block;
  position: absolute;
  width: 15px;
  height: 15px;
  top: -5px;
  right: 0px;
`;

export default PopUp;
