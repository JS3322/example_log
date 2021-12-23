import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import issueSoftwareArchitecture from '../public/images/5tudy/issue_SoftwareArchitecture.png'
import issueManagement from '../public/images/5tudy/issue_Management.png'
import issueDevelop from '../public/images/5tudy/issue_Develop.png'

const S5tudy = () => (
  <Layout title="5tudy">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        5tudy
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 3, 3]} gap={6}>
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
