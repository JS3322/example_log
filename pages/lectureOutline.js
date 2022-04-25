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

      <ListItem>
          C++, Python, Java, Javascript, Go 언어와 코딩에 필요한 지식 개요도 
        </ListItem>
        <WorkImage src="/images/5tudy/sampleCurriculumOverview.png" alt="sampleCurriculumOverview" />
   

        <ListItem>
          C++ 커리큘럼 다형성 중 다이나믹 캐스트에 관한 강의자료
        </ListItem>
        <WorkImage src="/images/5tudy/sampleCurriculum_cpp_dynamicCast.png" alt="sampleCurriculumOverview" />
   
        
        <ListItem>
          Java 커리큘럼 중 리플렉션에 관한 강의자료
        </ListItem>
        <WorkImage src="/images/5tudy/sampleCurriculum_java_reflection.png" alt="sampleCurriculumOverview" />
   
        
        <ListItem>
          Python 커리큘럼 중 numpy
        </ListItem>
        <WorkImage src="/images/5tudy/sampleCurriculumOverview.png" alt="sampleCurriculumOverview" />
   
        

      </UnorderedList>
 
    </Container>
  )
}

export default lectureOutline