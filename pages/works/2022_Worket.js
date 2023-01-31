import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Button,
  Box
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import { Title, Meta, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="2022 Worket">
    <Container>
      <Title>
      [진행] 모니터링 데이터기반 분석 시스템 Open Source <Badge>2023</Badge>
      </Title>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>개요</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
        수집 된 데이터 분석 기반 관리시스템 구현
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Stack</Badge>
          <span>Go1.19 | JavascriptEC6 | python3.9 | Springboot3.0 | CSS3 | Next.js</span>
        </ListItem>
        <ListItem>
          <Meta>ENV</Meta>
          <span>Xpand | MariaDB | OCI | Docker-Swarm | REST API | Traefik | Illustrator | Pandas | Kafka</span>
        </ListItem>
      </List>

      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
      <NextLink href="https://github.com/JS3322/monitoring_in_action.git">
        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
          Source Link
        </Button>
      </NextLink>
      </Box>

      <Heading as="h3" fontSize={16} my={6}>
        <Center>주요 업무</Center>
      </Heading>

      <UnorderedList my={4}>

        <ListItem>
          데이터 수집 및 분석 API 시스템 구축. 네이티브 자동 파이프라인 세팅으로 Cloud Build API 사용하여 CI/CD 구축.
        </ListItem>

        <ListItem>
          데이터 통계 모델링 구축. Log데이터 기반으로 Docker-Swarm 및 DB서버 샤딩 로드밸런싱 구축.
        </ListItem>

      </UnorderedList>
      
      <WorkImage src="/images/works/2022_Worket_contents_0001.png" alt="2022_Worket" />
      <WorkImage src="/images/works/2022_Worket_contents_0002.png" alt="2022_Worket" />
      
    </Container>
  </Layout>
)

export default Work
