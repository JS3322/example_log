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
import { Title, Meta } from '../../components/work'

const Work = () => (
  <Layout title="2024 Hybrid Cloud Management System">
    <Container>
      <Title>
        인공지능 반도체 공정 시뮬레이션 <Badge>2024</Badge>
      </Title>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>개요</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          삼성DS HPC 기반 반도체 공정 인공지능 시뮬레이션 설계 및 구축
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Stack</Badge>
          <span>python3.* | fast API | airflow </span>
        </ListItem>
        <ListItem>
          <Meta>ENV</Meta>
          <span>HPC | Postgresql | MongoDB </span>
        </ListItem>
      </List>

      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
          No links to internal services
        </Button>
      </Box>

      <Heading as="h3" fontSize={16} my={6}>
        주요 문제 해결 목록
      </Heading>

      <UnorderedList my={4}>

        <ListItem>
          deck 데이터 생성(DOE) 관리 및 생성 벡터 연산 개발
        </ListItem>
        <ListItem>
          반도체 공정 optimize 후처리 파인튜닝 알고리즘 개발
        </ListItem>
        <ListItem>
          HPC 활용 MLOps 자원 효율 관리 방안 구축
        </ListItem>

      </UnorderedList>

      <Heading as="h3" fontSize={16} my={6}>
        주요 업무
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          인공지능 시뮬레이션 솔루션 개발 기획 및 설계
        </ListItem>
        <ListItem>
          인공지능 모델 관리 설계 및 MLOps 시스템 기획 및 구축
        </ListItem>
        <ListItem>
          HPC 내 인공지능 학습 모니터링 시스템 구축
        </ListItem>

      </UnorderedList>

    </Container>
  </Layout>
)

export default Work
