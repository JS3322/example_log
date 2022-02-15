import { Container, Heading, Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import thumbInstagramCook from '../public/images/links/instagramCook.png'
import thumbGithubCode from '../public/images/links/githubCode.png'

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
        PM 업무 이후 개발자로 부족한 면을 많이 느끼고, IT지식, 서비스 디자인의 근본적인 부분부터 공부하고 있습니다!
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
        <SimpleGrid columns={[2, 4, 5]} gap={6}>

          <GridItem
            href="https://www.instagram.com/cleancode_js/"
            title="Cooking Instagram"
            thumbnail={thumbInstagramCook}
          >
          </GridItem>
          <GridItem
            href="https://github.com/js3322"
            title="Develop Github"
            thumbnail={thumbGithubCode}
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
              GRIT 개발파트 팀장
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
              옵티마이즈컨설팅 대표이사
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
              에이아이네트웍스 책임연구원
          </BioSection>
      </Section>

            <Section delay={0.8}>
                <Heading as='h3' variant="section-title">
                    hobby
                </Heading>
                <Paragraph>
                  Develop, HomeGarbageCollection, Travel
                </Paragraph>
            </Section>

        </Container>
        </Layout>
    )

export default Home