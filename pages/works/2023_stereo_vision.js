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
        스테레오 비전 CCTV 딥러닝 영상분석 기반 ITS 시스템 개발
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Stack</Badge>
          <span>Java17 | JavascriptEC6 | python3.9 | Springboot3.1 | CSS3 | Unity2022</span>
        </ListItem>
        <ListItem>
          <Meta>ENV</Meta>
          <span>PostgreSQL14.2 | Ubuntu18.04 | Docker | REST API | YOLOv8 | Illustrator | Pandas | Kafka Streams</span>
        </ListItem>
      </List>

      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
      <NextLink href="https://youtu.be/IFyTUxe2Yek">
        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
          Youtube Link
        </Button>
      </NextLink>
      </Box>

      <Heading as="h3" fontSize={16} my={6}>
        주요 문제 해결 목록
      </Heading>

      <UnorderedList my={4}>

        <ListItem>
          gis 전처리 3차원 좌표 통일화 및 차원축소로 필요 파라미터 선별 후 전송 테스트 :: 주성분 분석으로 파라미터의 기여도를 확인하고 데이터 전송 시스템 구성
        </ListItem>

        <ListItem>
          영상 이미지 분석 3차원 필요 좌표정보를 그룹네트워크로 실시간 공유 및 레이턴시 최소화 테스트 :: 그룹 네트워크 내에서 레이턴시가 적고, 대역폭 최적화와 안정성이 보장되며, 타 그룹 네트워크 간에 분산처리, 통합을 통해 토폴로지와 효율성 증대 구성
        </ListItem>

        <ListItem>
          좌표 누락 데이터 복구를 위한 방안 제시 및 방어코드 구현(예외처리) 및 관리 :: optical flow로 물체 움직임 추적하고 누락 프레임 생성과 비디오 인페인팅 모델 복합 사용으로 교통 추적 보완 시스템 구성
        </ListItem>

      </UnorderedList>

      <Heading as="h3" fontSize={16} my={6}>
        주요 업무
      </Heading>

      <UnorderedList my={4}>

        <ListItem>
          인프라 구축 : 라벨 스튜디오 기반 웹 기반 라벨링 시스템 및 통계데이터 클라우드 서비스 구축
        </ListItem>

        <ListItem>
          kafka stream/ mqtt mosquitto 외 메세지 미들웨어 개발(다수 교차로 분석 데이터 순차관리)과 자원(프로세스 쓰레드 관리) 및 메모리 핀 튜닝
        </ListItem>

        <ListItem>
          버스 객체 탐지 및 좌회전/우회전/직진 카운팅 프로그램 개발 및 좌표 보정 시스템 구축 :: YOLOv8, SAM 기반 CCTV 화각, 각도에 따른 트래커 좌표 변동에 편차/중앙값 기반 보정
        </ListItem>

        <ListItem>
          평택 ITS 2차사업 인공지능 기반 교통 자동신호 시스템(Auto TOD) 알고리즘 구축 및 설계 제안서 작성
        </ListItem>

        <ListItem>
          도로 기반 스테레오 비전 객체탐지 / 선식별 후학습 / 교차로 독립 교통신호시스템 / 방향지시등 좌회전 감응신호 특허 제안서 작성 : 스테레오 비전 카메라 기반 도로중심 자율주행 특허 외 4 출원
        </ListItem>

        <ListItem>
          스테레오 비전 기반 자동차 객체 탐지 무선 네트워크 테스트 개발 :: 무선 Group Network과 스테레오 비전 기반 예측 알고리즘 LSTM을 보정치로 활용
        </ListItem>

        <ListItem>
          카메라 촬영 정보 기반 지도 프론트엔드 개발 및 객체 위치 통일화 알고리즘 개발 :: 삼각비, 위도경도 위치지정으로 좌표 통일화
        </ListItem>

        <ListItem>
          고덕 삼성전자 스마트교차로 / 디지털트윈 개발 PM 및 조달우수 / 우수성능(판매실적) 아이템 개발관리 :: 제품 기획 및 영업문서 작성과 공사/외주/프로젝트 관리
        </ListItem>

      </UnorderedList>
      
      <WorkImage src="/images/works/2023_Stereo_vision_with_ITS_System_PM.png" alt="2023_Stereo_vision_with_ITS_System" />
      <WorkImage src="/images/works/2023_Stereo_vision_with_ITS_System_WEB.png" alt="2023_Stereo_vision_with_ITS_System" />
      <WorkImage src="/images/works/2023_Stereo_vision_with_ITS_System_GS.png" alt="2023_Stereo_vision_with_ITS_System" />
      <WorkImage src="/images/works/2023_Stereo_vision_with_ITS_System_Position.png" alt="2023_Stereo_vision_with_ITS_System" />
    </Container>
  </Layout>
)

export default Work
