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
  <Layout title="2021 XR Contents Management">
    <Container>
      <Title>
        비디오 모션 컨트롤러 <Badge>2021</Badge>
      </Title>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>개요</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          VR/AR 비디오 모션 컨트롤러 웹서비스로 하드웨어 동작 움직임 세팅을 할 수 있는 웹서비스
        </ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Badge mr={2}>Stack</Badge>
          <span>Java11 | JavascriptEC6 | Jquey | SpringBoot</span>
        </ListItem>
        <ListItem>
          <Meta>ENV</Meta>
          <span>정리 중</span>
        </ListItem>
      </List>

      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
      <NextLink href="https://github.com/JS3322/project_xr_dashboard">
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
          View 컴포넌트를 모듈화하여 유지보수에 초점. Embed 구조를 활용하며, Redirect와 자식 데이터처리 컴포넌트 기획.
        </ListItem>

        <ListItem>
        정리 중
        </ListItem>

      </UnorderedList>
      
      <WorkImage src="/images/works/2021_XrContentsManagement_contents_0001.png" alt="2021_XrContentsManagement" />
      <WorkImage src="/images/works/2021_XrContentsManagement_contents_0002.png" alt="2021_XrContentsManagement" />
      <WorkImage src="/images/works/2021_XrContentsManagement_contents_0003.png" alt="2021_XrContentsManagement" />
      
    </Container>
  </Layout>
)

export default Work
