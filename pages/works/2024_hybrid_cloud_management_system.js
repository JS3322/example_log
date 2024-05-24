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
        Public/private 클라우드 데이터(자원/비용정보)를 수집(Batch)하고 관리하는 시스템
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
        <Center>주요 업무</Center>
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

      </UnorderedList>

    </Container>
  </Layout>
)

export default Work
