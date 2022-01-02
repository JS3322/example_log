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
  <Layout title="2022 Worket">
    <Container>
      <Title>
      데이터 저장, 분석 시스템 구현 <Badge>2022</Badge>
      </Title>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>개요</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
        수집 된 데이터 분석과 시각화디자인하고 가치가 있는 데이터 트레이드 시스템 구현
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Stack</Badge>
          <span>Go1.17 | JavascriptEC6 | python3.8 | CSS3</span>
        </ListItem>
        <ListItem>
          <Meta>ENV</Meta>
          <span>BlockChain | PostgreSQL | GKE | OCI | Docker | graphQL | REST API | gRPC | Nginx | JWT | Illustrator | Blender | MagicVoxel | Ploty | Pandas</span>
        </ListItem>
      </List>

      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
      <NextLink href="https://github.com/JS3322/project_worket">
        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
          Source Link
        </Button>
      </NextLink>
      </Box>

      <Heading as="h3" fontSize={16} my={6}>
        <Center>주요 업무</Center>
      </Heading>

      <UnorderedList my={4}>
   
        <ListItem>
          정리 중
        </ListItem>

      </UnorderedList>
      
      <WorkImage src="/images/works/2022_Worket_contents_0001.png" alt="2021_XrContentsManagement" />
      
    </Container>
  </Layout>
)

export default Work
