import {
  Container,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title5tudy, WorkImage } from '../../components/work'

const S5tudy = () => (
  <Layout title="20220120">
    <Container>
      <Title5tudy>
      서킷브레이커 패턴 (Circuit Breaker)
      </Title5tudy>
      <WorkImage src="/images/5tudy/20220120.png" alt="5tudy" />

      

      <UnorderedList my={4}>
   
        <ListItem>
        서비스의 장애 전파 및 종속된 서버구성에 대안 패턴.
        </ListItem>

        <ListItem>
        Service 2 로의 호출을 강제로 끊어서 Service 1 의 쓰레드들이 더이상 요청에 대한 응답을 기다리지 않도록, Circuit를 열어서 메시지가 다른 서비스에 전파되지 못하도록 막고 미리 정의해 놓은 Fallback Response를 보내어 장애가 전파되는걸 방지.
        </ListItem>

      </UnorderedList>

    </Container>
  </Layout>
)

export default S5tudy
