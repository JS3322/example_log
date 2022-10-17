import React, { useEffect } from 'react'
const KakaoShareButton = () => {
    useEffect(() => {
        createKakaoButton()
    }, [])
    const createKakaoButton = () => {
        console.log("kakao1")
        // const key = process.env.JAVASCRIPT_KAKAO_KEY;
        const key = "59d93d7bf0d2a121ae0e3f740006f9bf";
        console.log(key)
        if (window.Kakao) {
            const kakao = window.Kakao
            console.log("kakao2")
            console.log(kakao)
            if (!kakao.isInitialized()) {
                kakao.init(key)
            }
            kakao.Channel.createChatButton({
                container: '#kakao-talk-channel-chat-button',
                channelPublicId: '_ZeUTxl',
                // imageUrl: '/images/links/youtubeLogo.png', // i.e. process.env.FETCH_URL + '/logo.png'
                // title: 'consult',
                // size: 'small',
                // color: 'yellow',
                // shape: 'pc',
                // supportMultipleDensities: true,

            });
            // document.body.appendChild(script);
            // document.body.removeChild(script);
            // kakao.Link.createDefaultButton({
            //     // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
            //     container: '#kakao-link-btn',
            //     objectType: 'feed',
            //     content: {
            //         title: '타이틀',
            //         description: '#리액트 #카카오 #공유버튼',
            //         imageUrl: 'IMAGE_URL', // i.e. process.env.FETCH_URL + '/logo.png'
            //         link: {
            //             mobileWebUrl: window.location.href,
            //             webUrl: window.location.href,
            //         },
            //     },
            //     social: {
            //         likeCount: 77,
            //         commentCount: 55,
            //         sharedCount: 333,
            //     },
            //     buttons: [
            //         {
            //             title: '웹으로 보기',
            //             link: {
            //                 mobileWebUrl: window.location.href,
            //                 webUrl: window.location.href,
            //             },
            //         },
            //         {
            //             title: '앱으로 보기',
            //             link: {
            //                 mobileWebUrl: window.location.href,
            //                 webUrl: window.location.href,
            //             },
            //         },
            //     ],
            // })
        }
    }
    return (
        <div id="kakao-talk-channel-chat-button">
        </div>
        // <div className="kakao-share-button">
        //     {/* Kakao share button */}
        //     <button id="kakao-link-btn">
        //         <img src="/images/links/youtubeLogo.png" alt="kakao-share-icon" />
        //     </button>
        // </div>
    )
}
export default KakaoShareButton