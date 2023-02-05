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
  <Layout title="2021 Analysis system Proposal">
    <Container>
      <Title>
        Analysis system Proposal <Badge>2021</Badge>
      </Title>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>개요</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          은행 금융 대출 모델 자동분석 시스템 기획 작성
        </ListItem>
      </UnorderedList>

      <Heading as="h3" fontSize={16} my={6}>
        <Center>주요 업무</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
         작성 중..
        </ListItem>

        <ListItem>
          작성 중..
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/2021_analysis_system_proposal_main.png" alt="2021 Analysis system Proposal" />
      <WorkImage src="/images/works/2021_analysis_system_proposal_ir.png" alt="2021 Analysis system Proposal" />
      <WorkImage src="/images/works/2021_analysis_system_proposal_flow_chart.png" alt="2021 Analysis system Proposal" />

    </Container>
  </Layout>
)

export default Work
