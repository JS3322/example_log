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
        현대자동차 <Badge>2019</Badge>
      </Title>
      
      
      <UnorderedList my={4}>
        <ListItem>
        fultter UI 개발
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

      <WorkImage src="/images/works/2021_NoncognitiveDiagnosisMobileApp_contents.png" alt="2019_HyundaiMotorsMindTravelBook" />
      
      
    </Container>
  </Layout>
)

export default Work
