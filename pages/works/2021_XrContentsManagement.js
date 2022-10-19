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
  <Layout title="2021 XR Contents Management">
    <Container>
      <Title>
        영상 동기화 컨텐츠 관리 <Badge>2021</Badge>
      </Title>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>개요</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          VR/AR 비디오 모션 컨트롤러 웹서비스로 하드웨어 동작 움직임 세팅과 웹 관리 서비스 구축.
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Stack</Badge>
          <span>Java11 | C | C++ | JavascriptEC6 | CSS3 | Jquey | SpringBoot</span>
        </ListItem>
        <ListItem>
          <Meta>ENV</Meta>
          <span>Sqlite3 | Mybatis | Maven | Tomcat8.5 | Ajax3 </span>
        </ListItem>
      </List>

      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
      <NextLink href="https://github.com/JS3322/project_xr_dashboard">
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
          View 컴포넌트를 모듈화하여 유지보수.
          Embed 구조를 활용하며, Redirect와 자식 데이터처리 컴포넌트 기획과 디자이너와 협업 관리.
        </ListItem>

        <ListItem>
          각 jar파일에 연동된 하드웨어 제어 시스템을 네트워크 관리 웹서비스 구현.
          데이터 DB저장과 별도로 스케쥴러로 여러 모듈 명령어 관리 구현. 각 모듈 동시 실행과 레이턴시 관리를 위해 API서버의 평균 리턴 시간을 계산하여 동기화 조절시스템 구성.
        </ListItem>

        <ListItem>
          크롤링 유지보수.
          SendRequest 요청내용에 따른 크롤링 데이터 수집 프로그램 보수 작업과 전처리 후 MSSQL 저장 시스템 구현.
        </ListItem>

        <ListItem>
          NCS 웹, 앱개발 강의를 진행하며 상담 시스템과 모듈단위 웹시험 시스템 구축 및 운용.
          학생의 피드백을 효율적으로 받기 위해 상담 내용을 쪽지 형식의 채팅과 카카오톡 채팅 연동 솔루션 구축과 서버 시간에 맞춰 시험지 오픈과 답안 상대적 비교 채점 도우미 시스템을 구축.
        </ListItem>

      </UnorderedList>
      
      <WorkImage src="/images/works/2021_XrContentsManagement_contents_0001.png" alt="2021_XrContentsManagement" />
      <WorkImage src="/images/works/2021_XrContentsManagement_contents_0002.png" alt="2021_XrContentsManagement" />
      <WorkImage src="/images/works/2021_XrContentsManagement_contents_0003.png" alt="2021_XrContentsManagement" />
      
    </Container>
  </Layout>
)

export default Work
