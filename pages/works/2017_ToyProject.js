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
  <Layout title="2017 토이프로젝트">
    <Container>
      <Title>
      토이프로젝트 <Badge>2017</Badge>
      </Title>

      <WorkImage src="/images/works/2019_HyundaiMotorsMindTravelBook_0001.png" alt="2017_ToyProject" />
      <UnorderedList my={4}>
        <ListItem>
        데이터 연산 추천서비스 API 개발 및 VR, AR 통합 웹시스템 기획 및 구현과 AWS 마이그레이션 작업
        </ListItem>
      </UnorderedList>
      

      <List ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Stack</Badge>
          <span>Java8 | JavaScriptES6 | Django2.2 </span>
        </ListItem>
        <ListItem>
          <Meta>ENV</Meta>
          <span>Oracle DB 19c | ORM | Tomcat8.5 | Nginx1.14 | Spring Cloud | batch | JPA | Hibernate | AWS EC2 | AWS route 53 | Oracle ADW | centOS7 | ELK | Nest | Storybook6 | babel7 | gulp4 | react16 | node-sass4 | tailwind</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>주요 업무</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
        데이터 수집과 통계분석/그래프/리포트 작성. ELK 환경 제공 및 Logstash로 회원접속 로그와 추천서비스 알고리즘 테스트 케이스를 위한 데이터 수집 시스템 개발과 일정기간 동안 사용할 통계 데이터는 oracle view table사용하여 연산작업 줄이며, 중복 문구 및 교환문구를 한 문단으로 저장하고, 교환문구의 포인터를 저장하여 교환작업으로 검색, 트래픽을 고려한 로직 재구현.
        </ListItem>

        <ListItem>
        진단 문항 관리 시스템 기획, 구현 및 최적화 작업. 문항관련 테이블의 update 기록을 수치화하여 테이블 관계성과 조인의 편의성을 고려한 db 모델링 기획 및 shutdownhook 활용 및 lazy generator 활용하여 데이터 늦은 연산작업으로 비동기 체감이 늦는 이슈, 예외처리 고려.
        </ListItem>

        <ListItem>
        자동 카테고리화 시스템 개발. 가중치 변화 적용 시스템 개발하여 데이터 카테고리화 실시간 적용하고 데이터를 각 유형으로 나누기 위해 유클리디 기반 통계 모델링 개발.
        </ListItem>

        <ListItem>
        밀도기반 클러스터링 업데이트. 수시로 바뀌는 클라이언트의 요구사항에 맞춰 실시간 통계 알고리즘을 구현하여 hash값으로 기존 클러스트링 추천 데이터값을 통합 실시간 업데이트 모듈 서비스를 개발하여 솔루션 추천 및 효과예정을 시뮬레이션하여 가중치 서비스 개발.
        </ListItem>

        <ListItem>
        AWS CLOUD 데이터 마이그레이션 작업. centos6 컨테이너를 제공 않는 문제와 cost와 이식성을 고려하여 레거시 앱을 vm 마이그레이션을 적용하였고, bastion 호스트를 구현하여 보안 관리와 스프링 클라우드를 통한 MSA구조로 앱서비스 제공.
        </ListItem>

        <ListItem>
        통합관리 시스템 웹개발 PM 업무. 5억 연구비의 프로젝트에 통합관리 시스템 웹개발 파트 PM으로 참여하여 5개의 기업에 패키지 솔루션 납품 및 추천 시스템 기획, 개발하여 매출액 40% 증가 성과이력.
        </ListItem>
      </UnorderedList>

      
      
    </Container>
  </Layout>
)

export default Work
