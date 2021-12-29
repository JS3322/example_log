import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="2019 현대자동차 마음여행책">
    <Container>
      <Title>
      현대자동차 마음여행책 <Badge>2019</Badge>
      </Title>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>개요</Center>
      </Heading>
      
      <UnorderedList my={4}>
        <ListItem>
        현대자동차 임직원 대상 웹비인지진단 시스템 개발 및 데이터통계 리포트 인쇄시스템, 네트워크 분산시스템 구현
        </ListItem>
      </UnorderedList>
      

      <List ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Stack</Badge>
          <span>Java6 | JavaScriptES5 | JSP | runnable | collection | Python3 | async | generator | lock | mvc | command | master-slave pattern</span>
        </ListItem>
        <ListItem>
          <Meta>ENV</Meta>
          <span>Spring | Oracle DB 11g | Ojdbc6 | Tomcat7.5 | html5 | scss | JSP | React | centOS7 | Nginx1.14 | Wsgi | Illustrator | Wireshark</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>주요 업무</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
        계정발급/계정관리 업무. 계정에 필요한 데이터를 객체상속하여 DB의 계정번호를 synchronzation화 하여 데이터 매핑 hash함수를 기반으로 클러스터링하여 색인속도 튜닝. 로그인, 세션, 트래픽 분산 관련 네트워크 작업 관리 및 Spring cloud도입하여 레이턴시 관리와 API Gateway 서버 개발 경험.
        </ListItem>

        <ListItem>
        진단사이트 셧아웃이슈 문제. 네트워크 문제로 튕김, 답안 임의변경 등 문제에 대해 서버가 실시간으로 답안을 받아야 한다고 판단되어 rsa암호화하여 일정시간/문제를 풀 때마다 서버에 전송하여 안정성 높임 작업과 동시접속에 대해 nginx튜닝 및 로드밸런싱 작업과 와이어샤크로 데이터 전송패킷 검증 및 트래픽 체크.
        </ListItem>

        <ListItem>
        리포팅(pdf) 대량출력 솔루션 개발. 계정당 데이터를 취합하여 수치 통계를 내는 시스템에서 비동기 속도를 빠르게 하기 위해 리포트 문구별 수치 범위 테이블을 만들고 범위에 대한 내용을 클라이언트에 먼저 전달, 서버에서 연산 완료 후 클라이언트에 전달하여 pdf작성 중 딜레이 타임을 줄임. 또한 기존 문구 작성하는 pdf출력 연산로직을 CSR으로 서버 부하 줄이는 포팅 작업. PDF 대량 출력 솔루션을 개발하여 B2B 50%이상 매출 증가 성과.
        </ListItem>

        <ListItem>
        연산시 사용되는 리소스 줄이는 작업. 연산 모듈 사용시 공통 문구 및 공통 통계 데이터를 미리 통계를 구하고 singleton으로 메모리에 미리 할당 사용 및 모듈 종료시 해지 및 쿠키 저장 구현으로 메모리 부족에 대해 고육지책.
        </ListItem>

        <ListItem>
        일러스트 디자인 및 svg 리소스 관리. 추상기하학을 토대로 대량 PDF디자인 작성, 로고와 페이지 디자인 및 번들 용량 줄이기 위해 svg파일을 object로 사용하여 색상변경, 백터 가장자리에 필요없는 로직 검토 및 삭제.
        </ListItem>

        <ListItem>
        수집된 데이터 기반으로 카테고리 유형에 맞도록 제안서 작성과 타 솔루션과 비교하여 차별된 자동유형 설정 시스템 기획.
        </ListItem>
        
      </UnorderedList>

      <WorkImage src="/images/works/2019_HyundaiMotorsMindTravelBook_0001.png" alt="2019_HyundaiMotorsMindTravelBook" />
      <WorkImage src="/images/works/2019_HyundaiMotorsMindTravelBook_0002.png" alt="2019_HyundaiMotorsMindTravelBook" />
      <WorkImage src="/images/works/2019_HyundaiMotorsMindTravelBook_0003.png" alt="2019_HyundaiMotorsMindTravelBook" />
      
      
    </Container>
  </Layout>
)

export default Work
