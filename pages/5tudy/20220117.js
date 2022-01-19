import {
  Container,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title5tudy, WorkImage } from '../../components/work'

const S5tudy = () => (
  <Layout title="20220117">
    <Container>
      <Title5tudy>
      분산 트랜잭션 SAGA 패턴
      </Title5tudy>
      <WorkImage src="/images/5tudy/20220117.png" alt="5tudy" />

      

      <UnorderedList my={4}>
   
        <ListItem>
        여러 개의 노드 또는 다른 종류의 서비스가 참여하는 하나의 트랜잭션.
        </ListItem>

        <ListItem>
        복구 방법 첫 번째로 backward recovery는 트랜잭션 실패시 롤백을 처리하는 방식. 이전에 커밋된 트랜잭션을 취소할 수 있는 보상 트랜잭션을 정의.
        </ListItem>

        <ListItem>
        복구 방법 두 번째로 forward recovery는 장애가 발생한 지점에서 중지하지 않고 계속 처리하는 방식 (트랜잭션을 다시 시작할 경우 부하가중이 심각할 경우 활용)
        </ListItem>
        
        <ListItem>
        Orchestrated Saga는 실행 순서를 정의하고 필요한 보상 작업을 트리거하기 위해 중앙 오케스트레이터.
        </ListItem>

        <ListItem>
        Choreographed Saga는 운영에 대한 책임을 마이크로서비스에 분산시키는 방식
        </ListItem>
        
      </UnorderedList>

    </Container>
  </Layout>
)

export default S5tudy
