import {
  Container,
  Badge,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage } from '../../components/work'

const Work = () => (
  <Layout title="2021 Analysis system Proposal">
    <Container>
      <Title>
        소셜 데이터 기반 금융모델 온라인 적합분석 기획<Badge>2021</Badge>
      </Title>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>개요</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          소셜네트워크 데이터 기반 은행 금융모델 온라인 적합분석 시스템 투자기획서 작성
        </ListItem>
      </UnorderedList>

      <Heading as="h3" fontSize={16} my={6}>
        <Center>주요 업무</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          카카오 소셜 로그 분석기반으로 금융모델이 추가되면 적합한 고객을 분류하는 모델 API개발. 키워드 기반과 긍정부정 문구를 기본으로 하여 고객의 성향에 대해 파악하고 현재 금융모델에 관심도를 분석하고 은행에제 추천하는 시스템 구축 제안서 작성. 변수 포인트인 금융모델을 추가, 변경이 일어날 떄마다 기존 로그 데이터를 병렬처리로 실시간 분석하여 고객에게 적합한 금융상품을 데이터 기반으로 추천하는 알고리즘 개발.
        </ListItem>

        <ListItem>
          형태소 분석을 앙상블기법 기반으로 모델 적합도를 끊임없이 추천. 패턴과 묘사적 표현을 중점으로 고객의 성향이 금융모델 방향성만 찾는데 중점을 두는 1차 알고리즘 개발. 금융모델 피처에 적합도와 유사도 벡터를 찾아 추천.
        </ListItem>

        <ListItem>
          시장 전략과 매출을 은행 한정이 아닌 접근성을 온라인으로 편리하게 구축. 제안서의 요지는 온라인으로 금융상품을 쉽게 접하여 대중적으로 금융을 이용하게 하는 전략. 자동화와 텍스트분석 알고리즘이 핵심 기술로 B2C 시장에 대한 수치적 어필을 통해 폐쇠적인 금융모델에 다른 방향성을 제시.
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/2021_analysis_system_proposal_main.png" alt="2021 Analysis system Proposal" />
      <WorkImage src="/images/works/2021_analysis_system_proposal_ir.png" alt="2021 Analysis system Proposal" />
      <WorkImage src="/images/works/2021_analysis_system_proposal_flow_chart.png" alt="2021 Analysis system Proposal" />

    </Container>
  </Layout>
)

export default Work
