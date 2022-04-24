import {
  Container,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import { WorkImage } from '../components/work'

const lectureOutline = () => {
  return (
    <Container>
      <UnorderedList my={4}>
        <WorkImage src="/images/5tudy/sampleCurriculumOverview.png" alt="sampleCurriculumOverview" />
   
        <ListItem>
          C++, Python, Java, Javascript, Go 언어와 코딩에 필요한 지식 개요도 
        </ListItem>

      </UnorderedList>
 
    </Container>
  )
}

export default lectureOutline