import React, { useEffect } from 'react'
import KakaoShareButton from './KakaoShareButton'
import {Box} from "@chakra-ui/react";

const KakaoChat = () => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        script.async = true
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
            console.log("checkKakao remove")
        }
    }, [])
    return (
        <Box flex={1} align="right">
            <KakaoShareButton />
        </Box>
    )
}
export default KakaoChat