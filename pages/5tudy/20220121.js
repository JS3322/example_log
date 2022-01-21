import {
  Container,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title5tudy, WorkImage } from '../../components/work'

const S5tudy = () => (
  <Layout title="20220121">
    <Container>
      <Title5tudy>
      트랜잭션
      </Title5tudy>
      <WorkImage src="/images/5tudy/20220121.png" alt="5tudy" />

      

      <UnorderedList my={4}>
   
        <ListItem>
        데이터베이스 시스템에서 하나의 논리적 기능을 정상적으로 수행하기 위한 작업의 기본단위.
        </ListItem>

        <ListItem>
        Atomicity 원자성 : 부분 완료가 아닌 모두 성공적으로 완료되거나 롤백.
        </ListItem>

        <ListItem>
        Consistency 일관성 : 트랜잭션 시작과 완료 시점 모두가 일관성 있고 손상이 없어야 함.
        </ListItem>

        <ListItem>
        Isolaction 격리성 : 개별 트랜잭션 결과는 트랜잭션이 성공, commit하기 전까지 열려있는 다른 트랜잭션에서 볼 수 없어야 함.
        </ListItem>

        <ListItem>
        Durability 지속성 : 트랜잭션 commit은 영구적.
        </ListItem>

        <ListItem>
        트랜잭션 동시성 기법으로는 모든 트랜잭션을 Lock과 Unlock로 나누어 직렬성을 보장하는 2 Phase Locking, 데이터베이스에서 부여되는 식별자인 Timestamp를 이용하여 시간대 별로 직렬화를 시켜 동시성을 제어하는 Timestamp Ordering, 트랜잭션을 수행하는 동안 어떠한 검증도 수행하지 않고 트랜잭션 종료 시 동시성 검증을 수행하는 낙관적 검증기법이 있음.
        </ListItem>

      </UnorderedList>

    </Container>
  </Layout>
)

export default S5tudy
