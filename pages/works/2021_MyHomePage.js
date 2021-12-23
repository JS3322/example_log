import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="2021 My HomePage">
    <Container>
      <Title>
        MyHomePage <Badge>2021</Badge>
      </Title>

      
      <UnorderedList my={4}>
        <ListItem>
        나의 사고, 디자인이 녹아든 나만의 집 구성 프로젝트 ver.2021 업로드 된 Post 유지보수가 간단명료한 보금자리 만들기.
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Stack</Badge>
          <span>JavaScriptES6 | React17 | Next12 | Three.js | chakra-ui1.7 | Go1.17 </span>
        </ListItem>
        <ListItem>
          <Meta>ENV</Meta>
          <span>PostgreSQL | JWT | GraphQL | OCI EC2 | GithubPages | gRPC | Nginx | Docker | Wireshark </span>
        </ListItem>
      </List>

      <Heading as="h3" fontSize={16} my={6}>
        <Center>주요 업무</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          프로젝트 디자인하기. 간단명료한 Post관리 앱을 만들 때 업무라는 느낌과 포스트잇, 사진첩이라는 컨셉을 갖고 UI 디자인. static page를 기준으로 미들웨어를 만들고, 데이터 처리 및 송수신 구조에 개발 집중할 수 있도록 개발계획 작성.
        </ListItem>

        <ListItem>
          리소스 정리 작업. 이미지, 비디오 해상도와 튜닝을 하기 위해 vector이미지로 한 차례 거친 뒤 export하여 용량 압축. 데이터 크기에 따른 CSR 우선 순위 튜닝.
        </ListItem>

        <ListItem>
          백업 구조 기획. Git과 클라우드 씽크 하드링크를 통해 2중 백업 구조와 간단한 작업 동선 구현. 
        </ListItem>

      </UnorderedList>
      
      <WorkImage src="/images/works/2021_MyHomePage_contents_0001.png" alt="2021_MyHomePage" />
      
    </Container>
  </Layout>
)

export default Work
