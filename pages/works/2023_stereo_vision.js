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
  <Layout title="2023 Stereo vision with ITS System">
    <Container>
      <Title>
      도로기반 자율주행 시스템 : 스테레오 비전 <Badge>2023</Badge>
      </Title>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>개요</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
        수집 된 데이터 분석 기반 관리시스템 구현
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Stack</Badge>
          <span>Go1.19 | JavascriptEC6 | python3.9 | Springboot3.0 | CSS3 | Next.js</span>
        </ListItem>
        <ListItem>
          <Meta>ENV</Meta>
          <span>Xpand | MariaDB | OCI | Docker-Swarm | REST API | Traefik | Illustrator | Pandas | Kafka</span>
        </ListItem>
      </List>

      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
      <NextLink href="https://github.com/JS3322/monitoring_in_action.git">
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
          인프라 구축 : 웹 기반 라벨링 시스템 및 통계데이터 클라우드 서비스 구축 : use Label Studio, GCP 하이브리드
        </ListItem>

        <ListItem>
          메세지 미들웨어 개발 및 튜닝(다수 교차로 분석 데이터 순차관리) : use KAFKA Streams, mqtt mosquitto
        </ListItem>

        <ListItem>
          버스 객체 탐지 및 좌회전/우회전/직진 카운팅 프로그램 개발 및 좌표 보정 시스템 구축 : use YOLOv8, SAM, 표준편차/중앙값 기반 보정 모듈
        </ListItem>

        <ListItem>
          평택 ITS 2차사업 인공지능 기반 교통 자동신호 시스템(Auto TOD) 알고리즘 구축 및 설계 제안서 작성
        </ListItem>

        <ListItem>
          도로 기반 스테레오 비전 객체탐지 / 선식별 후학습 / 교차로 독립 교통신호시스템 / 방향지시등 좌회전 감응신호 특허 제안서 작성 : 스테레오 비전 카메라 기반 도로중심 자율주행 특허 외 4 출원
        </ListItem>

        <ListItem>
          스테레오 비전 기반 자동차 객체 탐지 무선 네트워크 테스트 개발 : use 무선 Group Network과 스테레오 비전 기반 예측 알고리즘 혼합 활용
        </ListItem>

        <ListItem>
          카메라 촬영 정보 기반 지도 프론트엔드 개발 및 객체 위치 통일화 알고리즘 개발 : use 삼각비, 위도경도 위치지정
        </ListItem>

        <ListItem>
          고덕 삼성전자 스마트교차로 / 디지털트윈 개발 PM 및 GS인증 / 조달우수 / 우수성능(판매실적) 아이템 개발관리 : 제품 기획 및 영업문서 작성과 공사/외주/프로젝트 관리
        </ListItem>

      </UnorderedList>
      
      <WorkImage src="/images/works/2023_Stereo_vision_with_ITS_System_PM.png" alt="2023_Stereo_vision_with_ITS_System" />
    </Container>
  </Layout>
)

export default Work
