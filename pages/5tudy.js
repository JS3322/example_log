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
import thumb20220121 from '../public/images/5tudy/20220121.png'
import thumb20220125 from '../public/images/5tudy/20220125.png'
import React from "react";

const S5tudy = () => (
  <Layout title="5tudy">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        5tudy
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 3, 3]} gap={6}>

        <StudyGridItem id="20220125" thumbnail={thumb20220125} title="Kuberenetes Multi Master" />

          <StudyGridItem id="20220121" thumbnail={thumb20220121} title="Transaction" />

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

          <Section delay={1.0}>
            <a href={"https://link.coupang.com/a/8vaRG"} target={"_blank"} referrerPolicy={"unsafe-url"} rel="noreferrer">
              <img
                  src="https://image6.coupangcdn.com/image/affiliate/banner/0fc800aaa5ccf8bff8ab0190df3833b1@2x.jpg"
                  alt="제주삼다수 그린 생수, 2L, 12개" width="120" height="240"/>
            </a>
            <text>이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
            </text>
          </Section>
   
        </SimpleGrid>
      </Section>
      
    </Container>
  </Layout>
)

export default S5tudy
