import React, {useEffect} from "react";
import {Container, Divider, Heading} from "@chakra-ui/react";

function Background() {
    useEffect(() => {
        // const timeout = setTimeout(() => {
        //     // 👇️ redirects to an external URL
        //     window.location.replace('https://service.cleancode.kr');
        // }, 1000);

        // return () => clearTimeout(timeout);
        return null;
    }, []);

    return (
        <Container>
            <Heading as="h2" variant="page-title">
                {/*Will redirect in 3 seconds...*/}
                감정 디자인 서비스 TEST
            </Heading>
            <Divider my={6} />
        </Container>
    );
}

const lectureOutline = () => {
  return (
      <><Background/></>
  )
}

export default lectureOutline