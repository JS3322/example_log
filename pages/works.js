import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumb2017Toy from '../public/images/works/2017_ToyProject_thumb.png'
import thumb2018Noncognitive from '../public/images/works/2018_NoncognitiveDiagnosisModule_thumb.png'
import thumb2019Hyundai from '../public/images/works/2019_HyundaiMotorsMindTravelBook_thumb.png'
import thumb2020School from '../public/images/works/2020_SeoulVirtualSchool_thumb.png'
import thumb2021Noncognitive from '../public/images/works/2021_NoncognitiveDiagnosisMobileApp_thumb.png'
import thumb2021MyHomePage from '../public/images/works/2021_MyHomePage_thumb.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 2, 2]} gap={6}>
      <Section delay={0.3}>
          <WorkGridItem id="2021_MyHomePage" thumbnail={thumb2021MyHomePage} title="홈페이지 만들기">
            마이홈 프로젝트
          </WorkGridItem>
        </Section>

        
      </SimpleGrid>

      

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Close Project
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 3, 3]} gap={6}>

      <Section delay={0.6}>
          <WorkGridItem id="2021_NoncognitiveDiagnosisMobileApp" thumbnail={thumb2021Noncognitive} title="비인지진단 모바일">
            비인지 진단 모바일 UI와 API 개발 및 환경구성
          </WorkGridItem>
        </Section>

        <Section delay={0.7}>
          <WorkGridItem id="2020_SeoulVirtualSchool" thumbnail={thumb2020School} title="모바일가상학교">
          서울대학교 모바일가상학교의 각종 데이터 수집, 통계를 내리고 진단과 케어시스템 추천하는 통합관리 웹시스템 개발
          </WorkGridItem>
        </Section>

        <Section delay={0.8}>
          <WorkGridItem id="2019_HyundaiMotorsMindTravelBook" thumbnail={thumb2019Hyundai} title="마음여행책">
            현대자동차 임직원 비인지 웹진단과 개인 맞춤 책 발간 시스템 개발
          </WorkGridItem>
        </Section>

        <Section delay={0.9}>
          <WorkGridItem id="2018_NoncognitiveDiagnosisModule" thumbnail={thumb2018Noncognitive} title="비인지진단 웹서비스">
          진단 웹서비스 홈페이지 운영 및 모듈 개발
          </WorkGridItem>
        </Section>

        <Section delay={1.0}>
          <WorkGridItem id="2017_ToyProject" thumbnail={thumb2017Toy} title="토이프로젝트">
            웹 채팅프로그램과 알고리즘, 배포환경과 같은 개발 기본 구성
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
