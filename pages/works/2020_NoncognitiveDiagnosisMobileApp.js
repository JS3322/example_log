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
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../../components/layouts/article'
import { Title, Meta, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="2020 비인지진단 모바일앱">
    <Container>
      <Title>
        비인지진단 모바일앱 <Badge>2020</Badge>
      </Title>
      
      <Heading as="h4" fontSize={16} my={6}>
        <Center>개요</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
        비인지 진단 fultter UI 개발과 API 구조 기획과 개발 및 환경구성
        </ListItem>
      </UnorderedList>
      

      <List ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Stack</Badge>
          <span>flutter2.0 | Url_launcher | Bloc | Shell Script</span>
        </ListItem>
        <ListItem>
          <Meta>ENV</Meta>
          <span>SVN | Sqflite | Kubernetes | GCP | Adobe XD | Docker | Yona | Github | Illustrator</span>
        </ListItem>
      </List>

      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
      <NextLink href="https://github.com/JS3322/gritv2_app">
        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
          Prototype Source Link
        </Button>
      </NextLink>
      </Box>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>주요 업무</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          재정과 인력부족에 맞춘 인프라 구축작업. 클라이언트 테스트와 데이터 송수신 암호화 이슈와 인프라 부족으로 OCI 클라우드 1컴퓨팅 개발환경을 구성과 접속 테스트 환경 구축 및 프록시와 접근IP, PORT 관리 할 수 있는 Public 컴퓨터 구성에 대한 아이디어로 웹접속 클라우드 컴퓨터 구축.
        </ListItem>

        <ListItem>
        카카오봇을 통한 API 테스트 환경 구축. 클라이언트 분들이 늘 접속해 있는 카카오톡을 사용하여 API 테스트 상황공유를 접근성을 고려하여 구현하였고 솔루션 배포 및 인계/관리 시스템을 위해 Kubernetes 구축.
        </ListItem>

        <ListItem>
        앱 사진이 서버 업로드가 안되는 이슈와 함께 BLoC 구조에서 Steams 비동기적 구성 되는 UI 이슈에 image 라이브러리 활용하여 임시 디렉토리 주소로 저장 후 서버에 업로드하는 단계적 스위치 구성으로 개발. 
        </ListItem>

        <ListItem>
        Illustrator로 UI 디자인과 XD를 활용하여 템플릿구성. 한 페이지에 솔루션 선택기능을 최대한 살리는 UI템플릿 기획. 
        </ListItem>

      </UnorderedList>

      <WorkImage src="/images/works/2020_NoncognitiveDiagnosisMobileApp_contents_0001.png" alt="2021_NoncognitiveDiagnosisMobileApp" />
      <WorkImage src="/images/works/2020_NoncognitiveDiagnosisMobileApp_contents_0002.png" alt="2021_NoncognitiveDiagnosisMobileApp" />
      
      
    </Container>
  </Layout>
)

export default Work
