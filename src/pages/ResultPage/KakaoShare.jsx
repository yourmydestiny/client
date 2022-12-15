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
    //이부분이 매우 헷갈림 여러 사이트를 참고했는데 이 sendDefault부분을 잘 봐야한다.
    // const infosForm =
    //   window.location.href.split('/')[3] === 'community'
    //     ? recipeDetail
    //     : {
    //         title: recipeDetail.recipeInfo.recipeNmKo,
    //         description: recipeDetail.recipeInfo.summary,
    //         button: '레시피 보러가기',
    //         imgUrl: recipeDetail.recipeInfo.imgUrl,
    //       };
    window.Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title,
        description,
        imageUrl: image,
        link: {
          mobileWebUrl:
            'https://upload3.inven.co.kr/upload/2021/05/11/bbs/i15045581284.jpg',
          webUrl:
            'https://upload3.inven.co.kr/upload/2021/05/11/bbs/i15045581284.jpg',
        },
      },
      buttons: [
        {
          title: '굿',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
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
