import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem, StudyGridItem } from '../components/grid-item'
import issueSoftwareArchitecture from '../public/images/5tudy/issue_SoftwareArchitecture.png'
import issueManagement from '../public/images/5tudy/issue_Management.png'
import issueDevelop from '../public/images/5tudy/issue_Develop.png'

import thumb20220117 from '../public/images/5tudy/20220117.png'
import thumb20220118 from '../public/images/5tudy/20220118.png'
import thumb20220119 from '../public/images/5tudy/20220119.png'
import thumb20220120 from '../public/images/5tudy/20220120.png'

const S5tudy = () => (
  <Layout title="5tudy">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        5tudy
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 3, 3]} gap={6}>

        <StudyGridItem id="20220120" thumbnail={thumb20220120} title="Circuit Breaker Pattern" />

          <StudyGridItem id="20220119" thumbnail={thumb20220119} title="Distributed transaction TCC" />

          <StudyGridItem id="20220118" thumbnail={thumb20220118} title="Network Communication" />
    
          <StudyGridItem id="20220117" thumbnail={thumb20220117} title="Distributed transaction SAGA" />

          <GridItem
            title="Issue SoftwareArchitecture"
            thumbnail={issueSoftwareArchitecture}
            href="https://cleancode.shop/troubleshooting-software-architecture"
          />
          <GridItem
            title="Issue Management"
            thumbnail={issueManagement}
            href="https://cleancode.shop/troubleshooting-management"
          />
          <GridItem
            title="Issue Develop"
            thumbnail={issueDevelop}
            href="https://cleancode.shop/troubleshooting-develop"
          />
          
   
        </SimpleGrid>
      </Section>
      
    </Container>
  </Layout>
)

export default S5tudy
