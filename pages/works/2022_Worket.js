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
      데이터 저장, 분석 시스템 구현 <Badge>2022</Badge>
      </Title>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>개요</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
        수집 된 데이터 분석과 시각화디자인하고 가치가 있는 데이터 트레이드 시스템 구현
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Stack</Badge>
          <span>Go1.17 | JavascriptEC6 | python3.10 | CSS3 | Next.js | Nest.js</span>
        </ListItem>
        <ListItem>
          <Meta>ENV</Meta>
          <span>BlockChain | BoltDB | GKE | OCI | Docker | graphQL | REST API | Nginx | JWT | Illustrator | Blender | MagicVoxel | Ploty | Pandas</span>
        </ListItem>
      </List>

      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
      <NextLink href="https://github.com/JS3322/project_worket">
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
        Nginx 쿠버네티스 구성 로그파일 수집과 모니터링.
        </ListItem>

        <ListItem>
        개발 된 응용프로그램 관리 CLI 개발. 네트워크 URL Response 에러코드 및 헤더를 활용하여 활성화 쿠버네티스 파드 및 마이크로서비스 체크 시스템 구성.
        </ListItem>

        <ListItem>
        데이터 수집 및 모델링 데이터 API 배포 시스템 구축. 워크로드에 자동 파이프라인 세팅으로 Cloud Build API 사용하여 CI/CD 구축.
        </ListItem>

        <ListItem>
        모델링 된 데이터 통계 출력 웹 시스템 구성. 스크랩된 데이터를 통한 dash 보드 출력 및 docker 이미지 배포.
        </ListItem>

        <ListItem>
        통계 및 데이터 모델링 교환 플랫폼 구축. PPT, 이미지, 통계를 포함한 가치 있는 데이터를 저장하고 교환 데이터를 축척하여 데이터 가치에 대해 고찰.
        </ListItem>

      </UnorderedList>
      
      <WorkImage src="/images/works/2022_Worket_contents_0001.png" alt="2021_XrContentsManagement" />
      
    </Container>
  </Layout>
)

export default Work
