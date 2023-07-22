import { useEffect } from 'react';

const useShare = ({ title, text, url, option }: shareDataType) => {
  const shareToTwitter = () => {
    const sharedLink =
      'text=' + encodeURIComponent(title + ' \n ') + encodeURIComponent(url);
    openWindow(`https://twitter.com/intent/tweet?${sharedLink}`);
  };

  const shareToFacebook = () => {
    const sharedLink = encodeURIComponent(url);
    openWindow(`http://www.facebook.com/sharer/sharer.php?u=${sharedLink}`);
  };

  const shareToKakaoTalk = () => {
    if (window.Kakao === undefined) {
      return;
    }

    const kakao = window.Kakao;

    // 인증이 안되어 있는 경우, 인증한다.
    if (!kakao.isInitialized()) {
      kakao.init(import.meta.env.VITE_KAKAO_KEY);
    }

    kakao.Share.sendDefault({
      objectType: 'text',
      text: title,
      link: {
        mobileWebUrl: url,
        webUrl: url,
      },
    });
  };

  const shareToNavigator = async () => {
    const sharedData = {
      text: text,
      url: url,
    };

    try {
      if (navigator.canShare && navigator.canShare(sharedData)) {
        navigator
          .share(sharedData)
          .then(() => {
            console.log('성공');
          })
          .catch(() => {
            console.log('취소');
          });
      }
    } catch (e) {
      console.log('실패');
    }
  };

  const openWindow = (url: string) => {
    window.open(url, option?.windowOpenTarget || '_blank');
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return {
    shareToNavigator,
    shareToFacebook,
    shareToTwitter,
    shareToKakaoTalk,
  };
};

interface shareDataType {
  title?: string;
  url: string;
  text?: string;
  option?: {
    windowOpenTarget: '_black' | '_parent' | '_self' | '_top';
  };
}

export default useShare;
