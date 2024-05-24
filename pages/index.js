import { Container, Heading, Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import thumbInstagramCook from '../public/images/links/instagramCook.png'
import thumbGithubCode from '../public/images/links/githubCode.png'
import thumbYoutubeLogo from '../public/images/links/youtubeLogo.png'
import thumbStudyLogo from '../public/images/links/studySiteFavicon.png'
import React from "react";

const Home = () => (
    <Layout>
      <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >  
        탐구와 공감하는 삶의 방향에서 생각하는 시간을 즐기고 있습니다
      </Box>

        <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                    Developer JS
                    </Heading>

                </Box>

                <Box
                  flexShrink={0}
                  mt={{ base: 4, md: 0 }}
                  ml={{ md: 6 }}
                  textAlign="center"
                >
                </Box>
        </Box>

        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
            On the web
        </Heading>
        <SimpleGrid columns={[4, 6, 6]} gap={6}>
            <GridItem
                href="https://www.youtube.com/channel/UCWMhQtVmjXSyCKJ1SG5VjOA"
                title="Lecture Youtube"
                thumbnail={thumbYoutubeLogo}
            >
            </GridItem>
            <GridItem
                href="https://github.com/js3322"
                title="Develop Github"
                thumbnail={thumbGithubCode}
            >
            </GridItem>
            <GridItem
                href="https://www.instagram.com/cleancode_js/"
                title="Cooking Instagram"
                thumbnail={thumbInstagramCook}
            >
            </GridItem>
            <GridItem
                href="https://study.cleancode.kr"
                title="Study Log"
                thumbnail={thumbStudyLogo}
            >
            </GridItem>

        </SimpleGrid>

      </Section>

      <Section delay={0.6}>
        <Heading as="h3" variant="section-title">
          Career
        </Heading>
          <BioSection>
            <BioYear>2018</BioYear>
              GRIT 개발팀장 :: 데이터통계
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
              옵티마이즈컨설팅 대표이사 :: 데이터 기반 컨설팅
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
              프리랜서 :: 백엔드 & 데이터 사이언티스트
          </BioSection>
          <BioSection>
              <BioYear>2024</BioYear>
              클린코드 대표 :: 데이터 사이언티스트
          </BioSection>
      </Section>

        </Container>
        </Layout>
    )

export default Home