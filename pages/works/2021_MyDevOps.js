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
        MyDevOps <Badge>2021</Badge>
      </Title>

      
      <UnorderedList my={4}>
        <ListItem>
        개발환경 구성 프로젝트로 cloud vscode와 테스트 환경 구성 (여러 OCI 서버를 비롯한 API 테스트 서버와 카카오 오픈 챗), Jenkins, vercel 자동화 및 쉘스크립트 사용
        </ListItem>
      </UnorderedList>
      

      <List ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Stack</Badge>
          <span>현대자동차</span>
        </ListItem>
        <ListItem>
          <Meta>ENV</Meta>
          <span>현대자동차</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>주요 업무</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
        현대자동차
        </ListItem>

        <ListItem>
        현대자동차
        </ListItem>

        <ListItem>
        현대자동차
        </ListItem>

        <ListItem>
        현대자동차
        </ListItem>

        <ListItem>
        현대자동차
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/2021_MyDevOps_contents.png" alt="2019_HyundaiMotorsMindTravelBook" />
      
    </Container>
  </Layout>
)

export default Work
