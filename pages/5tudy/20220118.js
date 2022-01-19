import {
  Container,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title5tudy, WorkImage } from '../../components/work'

const S5tudy = () => (
  <Layout title="20220118">
    <Container>
      <Title5tudy>
      네트워크 OSI 구성
      </Title5tudy>
      <WorkImage src="/images/5tudy/20220118.png" alt="5tudy" />

      

      <UnorderedList my={4}>
   
        <ListItem>
        네트워크에서 데이터가 전달되는 원리. 
        </ListItem>

        <ListItem>
        전송 시 7 계층에서 1계층으로 각각의 층마다 인식할 수 있는 헤더를 붙이고 캡슐화하여 수신 시에는 디슐화하여 레이어끼리 송수신하는 방법. 
        </ListItem>

        <ListItem>
        터널링은 캡슐화한 다음 그 패킷을 다시 터널링 프로토콜에 캡슐화 하는 방법인데, PPTP과 L2TP / IPSec과 OpenVPN로 크게 3가지가 있다.
        </ListItem>
        
      </UnorderedList>

    </Container>
  </Layout>
)

export default S5tudy
