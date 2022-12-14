import React, { useEffect } from 'react';
import Kakaotalk from '../../assets/svg/kakaotalk.png';

const KakaoShare = ({ title, description, image }) => {
  useEffect(() => {
    initKakao(); //
  }, []);

  //자바스크립트키로 카카오 init
  const initKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init('3c9e188a3a3f0455455544526ddab9dc');
      }
    }
  };

  //버튼을 누르면 실행되는 함수
  const shareKakao = () => {
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title,
        description,
        imageUrl: image,
        link: {
          mobileWebUrl: 'https://mytamla.netlify.app',
          webUrl: 'https://mytamla.netlify.app',
        },
      },
      buttons: [
        {
          title: '나도 테스트하러 가기',
          link: {
            mobileWebUrl: 'https://mytamla.netlify.app',
            webUrl: 'https://mytamla.netlify.app',
          },
        },
      ],
    });
  };

  return (
    <img width="100%" height="55px" src={Kakaotalk} onClick={shareKakao} />
  );
};

export default KakaoShare;
