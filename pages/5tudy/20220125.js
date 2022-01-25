import {
  Container,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title5tudy, WorkImage } from '../../components/work'

const S5tudy = () => (
  <Layout title="20220125">
    <Container>
      <Title5tudy>
      Kuberenetes Multi Master cluster
      </Title5tudy>
      <WorkImage src="/images/5tudy/20220125.png" alt="5tudy" />

      

      <UnorderedList my={4}>
   
        <ListItem>
        Worker Node를 제어하는 Master Node를 여러 대를 두어 컨트롤타워가 셧다운 되는 상황 대비.
        </ListItem>

        <ListItem>
        Highly Available cluster 운영으로, 로드밸런서를 통해 worker node에 노출.
        </ListItem>

        <ListItem>
        Worker node를 Load balancer를 통해 master Node와 연결.
        </ListItem>

        <ListItem>
        CNI 컨트롤 네트워크 인터페이스를 통해 노드 제어.
        </ListItem>

        <ListItem>
        etcd로 마스터의 데이터를 동기화.
        </ListItem>

      </UnorderedList>

    </Container>
  </Layout>
)

export default S5tudy
