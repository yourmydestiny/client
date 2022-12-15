import React, { useEffect } from 'react';
import Kakaotalk from '../../assets/svg/kakaotalk.png';

const KakaoShare = () => {
  useEffect(() => {
    initKakao(); //
  }, []);

  //자바스크립트키로 카카오 init
  const initKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init('91622bf40223d7cd1d4a9c0a998992d2');
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
        title: '타이틀',
        description: '임시',
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYdCi6lknx1YFl88O8UGHwX-WB2dsYTAzdF-iFCVvJ1kGb_KyRmvHn_les47-MUv4exw&usqp=CAU',
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

  return <img width="100%" src={Kakaotalk} onClick={shareKakao} />;
};

export default KakaoShare;
