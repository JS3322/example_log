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
  <Layout title="2021 비인지진단 모바일앱">
    <Container>
      <Title>
        비인지진단 모바일앱 <Badge>2021</Badge>
      </Title>
      
      
      <UnorderedList my={4}>
        <ListItem>
        fultter UI 
        </ListItem>
      </UnorderedList>
      

      <List ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Stack</Badge>
          <span>flutter2.0 | Url_launcher | Bloc</span>
        </ListItem>
        <ListItem>
          <Meta>ENV</Meta>
          <span>SVN | Sqflite | Adobe XD</span>
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

      <WorkImage src="/images/works/2021_NoncognitiveDiagnosisMobileApp_contents_0001.png" alt="2021_NoncognitiveDiagnosisMobileApp" />
      
      
    </Container>
  </Layout>
)

export default Work
