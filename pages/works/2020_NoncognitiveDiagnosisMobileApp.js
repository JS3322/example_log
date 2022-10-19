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
  <Layout title="2020 비인지진단 모바일앱">
    <Container>
      <Title>
        모바일 진단시스템 컨설팅과 프로토타입 <Badge>2020</Badge>
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
          Prototype UI Source Link
        </Button>
      </NextLink>
      </Box>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>주요 업무</Center>
      </Heading>

      <UnorderedList my={4}>

      <ListItem>
        모바일 진단 서비스 및 통계 매칭 시스템 기획과 구현.
        비인지진단 레거시 시스템의 진단 데이터를 정리하여, 추천시스템과 기준이 되는 요인을 추출하여 프로젝트 기획하여 컨설팅 진행. Flutter 기반 앱 서비스 기획하고 프로토타입 개발.
      </ListItem>

        <ListItem>
          컴소시엄 기획서 작성.
          청소년 진단 시스템구축 컨소시엄 사업에 참여하여 기획서 작성. 머신러닝으로 진단 유형을 분류하고, 매칭 시스템을 기획. 앙상블 기법 기준으로 사이킷런 사용하여 유형 분류 프로토타입 개발.
        </ListItem>

        <ListItem>
          머신러닝 모델 튜닝 진행.
          계약기간 이후 분류시스템에 용역으로 참여하여 모델 튜닝 진행. 하이퍼파라미터 찾으며 지속적 피드백으로 프로젝트 보고서 작성 진행.
        </ListItem>


      </UnorderedList>

      <WorkImage src="/images/works/2020_NoncognitiveDiagnosisMobileApp_contents_0001.png" alt="2021_NoncognitiveDiagnosisMobileApp" />
      <WorkImage src="/images/works/2020_NoncognitiveDiagnosisMobileApp_contents_0002.png" alt="2021_NoncognitiveDiagnosisMobileApp" />
      
      
    </Container>
  </Layout>
)

export default Work
