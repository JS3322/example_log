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
  <Layout title="2019 현대자동차 마음여행책">
    <Container>
      <Title>
      현대자동차 신입사원 진단시스템개발 <Badge>2019</Badge>
      </Title>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>개요</Center>
      </Heading>
      
      <UnorderedList my={4}>
        <ListItem>
          현대자동차 신입사원 직무교육 마음여행 그림책 솔루션
        </ListItem>
      </UnorderedList>
      

      <List ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Stack</Badge>
          <span>Java6 | JavaScriptES5 | JSP | runnable | collection | Python3 | async | generator | lock | mvc | command | master-slave pattern</span>
        </ListItem>
        <ListItem>
          <Meta>ENV</Meta>
          <span>Spring | Oracle DB 11g | Ojdbc6 | Tomcat7.5 | html5 | scss | JSP | React | centOS7 | Nginx1.14 | Wsgi | Illustrator</span>
        </ListItem>
      </List>

      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
      <NextLink href="http://hdbrain.gritt.co.kr/">
        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
          Service Link
        </Button>
      </NextLink>
      </Box>

      <Heading as="h4" fontSize={16} my={6}>
        주요 업무
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          웹진단사이트 관리 및 리팩토링. 네트워크 문제로 튕김, 답안 임의변경 등 문제에 대해 일정 시간동안 반복적으로 서버와 통신하여 답안받는 방식으로 변경. rsa암호화하여 일정시간/문제를 풀 때마다 서버에 전송하여 안정성 높임 작업과 동시접속에 대해 nginx튜닝 및 로드밸런싱 작업과 와이어샤크로 데이터 전송패킷 검증 및 트래픽 체크 자동화.
        </ListItem>

        <ListItem>
          대량 리포트(PDF) 출력 및 브라우저 자동인쇄 솔루션 기획과 개발. 연산에 필요한 데이터 구성을 검토하여 기준이 되는 데이터를 정리하는 기획작업부터 기존 불필요한 알고리즘을 줄이고, 카테고리 문자열 교체방식으로 문서 데이터 출력 및 비동기와 chart.js를 통해 리소스를 고려하여 그래프 출력. 계정당 데이터를 취합하여 수치 통계를 내는 시스템에서 비동기 속도를 빠르게 하기 위해 리포트 문구별 수치 범위 테이블을 만들고 범위에 대한 내용을 클라이언트에 먼저 전달, 서버에서 연산 완료 후 클라이언트에 전달하여 pdf작성 중 딜레이 타임을 줄임. 또한 기존 문구 작성하는 pdf출력 연산로직을 CSR으로 서버 부하 줄이는 포팅 작업. PDF 대량 출력 솔루션을 개발하여 B2B 50%이상 매출 증가 성과.
        </ListItem>

        <ListItem>
          실시간 카테고리화 진단서비스 기획 및 구현. 수집된 데이터 기반으로 분류모델에 맞춰 기획 제안서 작성과 타 솔루션과 비교하여 MBTI와 비슷한 비인지 자동유형 설정 시스템 기획과 구현
        </ListItem>

        <ListItem>
          일러스트 디자인 및 svg 리소스 관리. 추상기하학을 토대로 대량 PDF디자인 작성, 코드 스플릿트와 이미지 디자인 축소 및 번들 용량 줄이기 위해 object를 사용하여 색상변경, 백터 가장자리에 필요없는 픽셀 삭제 작업 시스템 기획과 구현
        </ListItem>
        
      </UnorderedList>

      <WorkImage src="/images/works/2019_HyundaiMotorsMindTravelBook_contents_0001.png" alt="2019_HyundaiMotorsMindTravelBook" />
      <WorkImage src="/images/works/2019_HyundaiMotorsMindTravelBook_contents_0002.png" alt="2019_HyundaiMotorsMindTravelBook" />
      <WorkImage src="/images/works/2019_HyundaiMotorsMindTravelBook_contents_0003.png" alt="2019_HyundaiMotorsMindTravelBook" />
      
      
    </Container>
  </Layout>
)

export default Work
