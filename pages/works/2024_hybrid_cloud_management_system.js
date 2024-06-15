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
      하이브리드 클라우드 관리 시스템 : HCMS <Badge>2024</Badge>
      </Title>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>개요</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          클라우드 7만개 리소스 데이터 수집/정제/통계와 200억 비용정보 관리하는 시스템
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Stack</Badge>
          <span>Java17 | JavascriptEC6 | python3.10 | Springboot3.1 | Spring Gateway | Spring Batch </span>
        </ListItem>
        <ListItem>
          <Meta>ENV</Meta>
          <span>Kubernetes | Rancher | Jenkins | Harbor | Docker | Oracle | MongoDB | Vue3 </span>
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
          mongoDB 데이터 튜닝 검증의 정확성/효율성 이슈에 대해 aggregation 파이프라인 결과 쿼리문 비교 시스템 구축 :: json 스키마 비교 후 특정 키 값의 유사도 측정 활용(cosine similarity)
        </ListItem>
        <ListItem>
          enterprise MongoDB 성능에 맞춰 스키마 재설계 init 쿼리 작성 및 spring batch MongoTemplate 쿼리 탄력적 적용 시스템 구축 :: 메모리 사용량에 따라 데이터 가공 시 lookup과 reference(일반참조)를 string batch에서 유연하게 동작할 수 있도록 시스템 구성
        </ListItem>
        <ListItem>
          MongoDB 데이터 백업/롤백 용이성을 위해 NAS 스토리지 마운트 교환 시스템 구축 :: log 파일 모니터링하고 알람 후 자동적으로 최신 백업 데이터를 복구 스크립트 실행
        </ListItem>
        <ListItem>
          개발한 솔루션 접속 로그를 분석/관리를 용이하도록 Spring Gateway에 접속기록(id/호출API 외..) 관리 시스템 구축 :: 애플리케이션에서 구축한 exception 코드를 DB에서 관리하고 log 정보 토대로 사용자의 접속 추적 및 DB 코드로 사용 패턴 확인 시스템 구성
        </ListItem>

      </UnorderedList>

      <Heading as="h3" fontSize={16} my={6}>
        주요 업무
      </Heading>

      <UnorderedList my={4}>

        <ListItem>
          삼성DS HCMS 시스템 아키텍처 기획 및 구축 : 쿠버네티스 기반 MSA와 Batch 관리 시스템
        </ListItem>
        <ListItem>
          삼성전자 내 사용하는 Public/Private 클라우드 자원/비용 데이터 통계 시스템 구축 및 Kubernetes 시스템 관리와 Open API 기획/개발
        </ListItem>
        <ListItem>
          MongoDB/SpringBatch 기반 데이터 레이크/ 데이터 마트/ 통계 데이터 컬렉션 스키마 및 인덱스 구성 및 수집, 정제, 연산 배치 전략 구성 및 튜닝
        </ListItem>
        <ListItem>
          AWS TrustedAdvisor 외 데이터를 활용한 public/private Cloud의 리소스 활용 개선 시스템 개선 및 구현
        </ListItem>

      </UnorderedList>

    </Container>
  </Layout>
)

export default Work
