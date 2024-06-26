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
  <Layout title="2018 토이프로젝트">
    <Container>
      <Title>
      토이프로젝트 <Badge>2018</Badge>
      </Title>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>개요</Center>
      </Heading>
      
      <UnorderedList my={4}>
        <ListItem>
        네트워크 중점 채팅프로그램과 회피 알고리즘 구성을 하며 최적 복잡도를 구성하고 스크래핑, CI 등 기본적인 수집과 배포 인프라 구현
        </ListItem>
      </UnorderedList>
      

      <List ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Stack</Badge>
          <span>C++14 | Java8 | JavascriptEC6 | Python3 | HTML5 | CSS3 </span>
        </ListItem>
        <ListItem>
          <Meta>ENV</Meta>
          <span>Github Pages | Action</span>
        </ListItem>
      </List>

      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">   
          No link as closed service
        </Button>
      </Box>

      <Heading as="h4" fontSize={16} my={6}>
        주요 업무
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
        JAVA채팅/C++ 응용프로그램 개발. Publish and Subscribe 패턴 기반으로 다수 전송 로직 구성, singleton/factory패턴으로 메모리상주/색깔변환 알고리즘 작성.
        </ListItem>

        <ListItem>
        Javascript 추적/회피알고리즘 작성. 상황인지를 효율적으로 구성하기 위해 구역별 가중치를 합산하고 적은 비용 회피 알고리즘을 구성하여 최적경로를 구현
        </ListItem>

        <ListItem>
          자동배포 개발 환경 구성 작업. 영상 파일서버를 구글드라이브/어도비에서 DNS이 변동되는 문제에 대해 주소 실시간 스크래핑으로 도메인 추적.
        </ListItem>

      </UnorderedList>

      <WorkImage src="/images/works/2018_ToyProject_contents_0001.png" alt="2018_ToyProject" />
      
    </Container>
  </Layout>
)

export default Work
