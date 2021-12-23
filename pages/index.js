import NextLink from 'next/link'
import { Link, Container, Heading, Box, Image, SimpleGrid, Button, List, ListItem, Icon, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
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
        PM 업무 이후 개발자로 부족한 면을 많이 느끼고, IT지식, 알고리즘, 디자인의 근본적인 부분부터 공부하고 있습니다!
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
                <NextLink href="https://cleancode.kr/history">
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  구직 포트폴리오
                </Button>
                </NextLink>
            </Box>
      </Box>

      <Section delay={0.6}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <SimpleGrid columns={[1, 4, 5]} gap={6}>

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

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Career
        </Heading>
          <BioSection>
            <BioYear>2018</BioYear>
              GritIT 회사 웹개발 업무 담당
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
              천안에서 거주하면서 공부
          </BioSection>
      </Section>

            <Section delay={0.4}>
                <Heading as='h3' variant="section-title">
                    hobby
                </Heading>
                <Paragraph>
                  Coding, Design, Home GarbageCollection, Travel
                </Paragraph>
            </Section>

            

        </Container>
        </Layout>
    )

export default Home