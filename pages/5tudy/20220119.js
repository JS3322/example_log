import {
  Container,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title5tudy, WorkImage } from '../../components/work'

const S5tudy = () => (
  <Layout title="20220119">
    <Container>
      <Title5tudy>
      분산트랜잭션 TCC (Try-confirm / Cancle)
      </Title5tudy>
      <WorkImage src="/images/5tudy/20220119.png" alt="5tudy" />

      

      <UnorderedList my={4}>
   
        <ListItem>
        분산 트랙잭션을 HTTP와 REST 원칙으로 해결. 
        </ListItem>

        <ListItem>
        관계형 DB 트랜잭션을 제어하는 방법과 유사하며, 본 예제는 DB SoftDelete 참조하여 작성.
        </ListItem>

      </UnorderedList>

    </Container>
  </Layout>
)

export default S5tudy
