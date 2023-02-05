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
  <Layout title="2021 My HomePage">
    <Container>
      <Title>
        MyHomePage <Badge>2021</Badge>
      </Title>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>개요</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
        나의 사고, 디자인이 녹아든 마이홈 프로젝트. Post 유지보수가 간단명료한 로직구현
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Stack</Badge>
          <span>JavaScriptES6 | React17 | Next.js12 | Three.js | chakra-ui1.7 </span>
        </ListItem>
        <ListItem>
          <Meta>ENV</Meta>
          <span>PostgreSQL | Nest.js | REST API | GKE | Nginx | Docker | MagicVoxel | Blender | Substance 3D Painter </span>
        </ListItem>
      </List>

      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
      <NextLink href="https://log.cleancode.kr">
        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
          Service Link
        </Button>
      </NextLink>
      </Box>

      <Heading as="h3" fontSize={16} my={6}>
        <Center>주요 업무</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          프로젝트 디자인하기. 간단명료한 Post관리 앱을 만들 때 업무라는 느낌과 포스트잇, 사진첩이라는 컨셉을 갖고 UI 디자인. Substance 3D Painter과 color로 History라는 테마에 맞는 색감 구성. static page를 기준으로 미들웨어를 만들고, 데이터 처리 및 송수신 구조에 개발 집중할 수 있도록 개발계획 작성.
        </ListItem>

        <ListItem>
          리소스 정리 작업. 이미지, 비디오 해상도와 튜닝을 하기 위해 vector이미지로 한 차례 거친 뒤 export하여 용량 압축. 데이터 크기에 따른 CSR 우선 순위 튜닝.
        </ListItem>

        <ListItem>
          백업 구조 기획. Git과 클라우드 씽크 하드링크를 통해 2중 백업 구조와 간단한 작업 동선 구현. 
        </ListItem>

        <ListItem>
        프론트엔드 랜더링 보안과 간결화 구조. Dynamic Routes의 로직, SSR으로 파일서버에서 소스 읽어오는 구조를 Vercel로 migration하면서 static server 이슈로써 클라이언트에서 파일서버 방화벽 대신 API secret key와 next.config, .env 환경 변수로 리소스 주소 접근보안 방식로 변경.
        </ListItem>

        <ListItem>
          k8s 세팅. GKE와 OCI EC2를 복합으로 다중 pod구성 및 문서 스크랩과 자동 git 쉘스크립트를 통해 DB백업 이중 구성으로 데이터 정리.
        </ListItem>

        

      </UnorderedList>
      
      <WorkImage src="/images/works/2021_MyHomePage_contents_0001.png" alt="2021_MyHomePage" />
      
    </Container>
  </Layout>
)

export default Work
