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
  <Layout title="2024 artificial intelligence semiconductor simulation">
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
          <span>python3.9 | fast API | airflow | ray </span>
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
          반도체 공정 중 optimize 후처리 파인튜닝 알고리즘 개발
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
          fast api 기반 반도체 deck 분석 및 HPC 연산 상태정보 조회 서비스 구축
        </ListItem>
        <ListItem>
          반도체 공정 메타데이터 기반 웨이퍼 불량률 검증 및 반도체 공정 불확실성 검증 모델 개발
        </ListItem>
        <ListItem>
          airflow 및 greenplum 기반 queue 서버 구성 후 mlops기능 다중 노드 서버 분산작업 개발
        </ListItem>
        <ListItem>
          wfmap deck 데이터 기반으로 학습에 필요한 데이터 생성(DOE) 시스템 설계 및 인공지능 시뮬레이션에 사용되는 각종 변수 데이터를 작은 데이터 타입으로 변환하여 simd 연산처리로 처리량 증가
        </ListItem>
        <ListItem>
          tensorflow 기반 반도체 공정 예측 인공지능 모델 프로토타입 개발 (전처리, 스케일링, 학습, 테스트, 추론, 최적화 단위별 모듈)
        </ListItem>
        <ListItem>
          fast api와 lay 기반으로 prediction/ optimizer serving 시스템 구축
        </ListItem>
        <ListItem>
          free treading 및 lay로 pytorch 기반 logic/ dram 반도체 공정 prediction/ optimizer 기능 코드 재설계 및 고도화
        </ListItem>

      </UnorderedList>

    </Container>
  </Layout>
)

export default Work
