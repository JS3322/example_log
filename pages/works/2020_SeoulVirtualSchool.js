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
import { Title, Meta, WorkVideo } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="2019 현대자동차 마음여행책">
    <Container>
      <Title>
        현대자동차 <Badge>2019</Badge>
      </Title>

      <WorkVideo src="/video/project_2020_s.mp4" alt="2019_HyundaiMotorsMindTravelBook" />
      <P>
      contents
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java</span>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Hacker News</Badge>
          <span>test</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>트러블 슈팅</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          가나다라
        </ListItem>

        <ListItem>
          두 번째 가나다라
        </ListItem>
      </UnorderedList>

      
      
    </Container>
  </Layout>
)

export default Work
