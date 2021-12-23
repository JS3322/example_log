import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumb2019Hyundai from '../public/images/works/2019_HyundaiMotorsMindTravelBook_thumb.png'
import thumb2020School from '../public/images/works/2020_SeoulVirtualSchool_thumb.png'
import thumb2021Noncognitive from '../public/images/works/2021_NoncognitiveDiagnosisMobileApp_thumb.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        

        
      </SimpleGrid>

      

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Close Project
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

      <Section delay={0.5}>
          <WorkGridItem id="2021_NoncognitiveDiagnosisMobileApp" thumbnail={thumb2021Noncognitive} title="2021 비인지 진단 모바일 앱">
            비인지 진단 모바일 앱 개발
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem id="2020_SeoulVirtualSchool" thumbnail={thumb2020School} title="2020 서울대학교 모바일가상학교 통합관리시스템">
            가상현실 청소년 진단과 케어시스템 통합관리 웹시스템 개발
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
          <WorkGridItem id="2019_HyundaiMotorsMindTravelBook" thumbnail={thumb2019Hyundai} title="2019 현대자동차 마음여행책">
            현대자동차 임직원 비인지 웹진단과 개인 맞춤 책 발간 시스템 개발
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
