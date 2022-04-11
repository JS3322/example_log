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
  <Layout title="2018 비인지 진단 웹서비스 모듈">
    <Container>
      <Title>
      비인지 진단 웹서비스 모듈 개발<Badge>2018</Badge>
      </Title>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>개요</Center>
      </Heading>
      
      <UnorderedList my={4}>
        <ListItem>
        진단 웹서비스 홈페이지 운영 및 결제, 쿠폰 등 모듈 개발
        </ListItem>
      </UnorderedList>
      

      <List ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Stack</Badge>
          <span>Java6 | JavaScriptES5  </span>
        </ListItem>
        <ListItem>
          <Meta>ENV</Meta>
          <span>Oracle DB 11g | Ojdbc6 | ajax3 | Tomcat7.5 | centOS7 | JSP | Junit4 | SVN | VScode</span>
        </ListItem>
      </List>

      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
      <NextLink href="http://www.gritt.co.kr/">
        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
          Service Link
        </Button>
      </NextLink>
      </Box>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>주요 업무</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
        리포팅 PDF 출력 모듈 개발. DB View로 연산에 필요한 데이터 출력관리 및 계산에 필요한 데이터인 기존 BufferedReader에서 StringTokenizer를 통해 문자열 교체방식으로 문서 데이터 출력 및 비동기와 chart.js를 통해 리소스를 고려하여 그래프 출력.
        </ListItem>

        <ListItem>
        결제, 쿠폰, SMS, EMAIL 안내 모듈 개발. 기존 솔루션을 유지하도록 인터페이스 구성하고 추상 팩토리 기법으로 쿠폰 및 결제사양을 적용하여 여러 시스템 구현.
        </ListItem>

        <ListItem>
        트래픽 분산. 동시 접속에 대해 대처를 위해 RR으로 tomcat worker에 로드밸런싱 튜닝으로 서버 죽는 현상, 데이터 트레픽 이슈 대응.
        </ListItem>

      </UnorderedList>

      <WorkImage src="/images/works/2018_NoncognitiveDiagnosisModule_contents_0001.png" alt="2018_NoncognitiveDiagnosisModule" />
      <WorkImage src="/images/works/2018_NoncognitiveDiagnosisModule_contents_0002.png" alt="2018_NoncognitiveDiagnosisModule" />
      
    </Container>
  </Layout>
)

export default Work
