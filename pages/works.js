import {Container, Heading, SimpleGrid, Divider, UnorderedList, Badge} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumb2018Toy from '../public/images/works/2018_ToyProject_contents_0001.png'
import thumb2018Noncognitive from '../public/images/works/2018_NoncognitiveDiagnosisModule_contents_0001.png'
import thumb2019Hyundai from '../public/images/works/2019_HyundaiMotorsMindTravelBook_contents_0001.png'
import thumb2020School from '../public/images/works/2020_SeoulVirtualSchool_contents_0001.png'
import thumb2020Noncognitive from '../public/images/works/2020_NoncognitiveDiagnosisMobileApp_contents_0001.png'
import thumb2021MyHomePage from '../public/images/works/2021_MyHomePage_contents_0001.png'
import thumb2022Worket from '../public/images/works/2022_Worket_contents_0001.png'
import thumb2022Xr from '../public/images/works/2021_XrContentsManagement_contents_0001.png'
import React from "react";

const Works = () => (
  <Layout title="Works">
    <Container>

      <Heading as="h3" fontSize={20} mb={4}>
        Skill Stack
      </Heading>


      <SimpleGrid columns={[1, 1, 1]} gap={6}>

      <Section delay={0.2}>
        <UnorderedList>

          <Badge colorScheme="telegram" fontSize={18} mr={2}>
            페이지 디자인
          </Badge>
          <br/>
          <span><b>대표 프로젝트</b> : 비인지진단 케어프로그램</span>
          <br/>
          <span>- 정신건강 케어프로그램 컨텐츠 디자인 기획과 구현 (used Flutter)</span>
          <br/>
          <span>- 결과 리포트 디자인 및 pdf 대량 자동인쇄 시스템 개발 (used Spring, JSP)</span>
          <br/>
          <span>- 컨텐츠 3D디자인 외 홍보페이지 다수 작성 (used React.js, Three.js)</span>
          <br/>
          <span>- 보고 데이터 시각화 모듈 개발 (used Dash)</span>
          <br/>
          <span>- 비공기압 타이어 인공지능 디자인 연구개발계획서, 서울대학교 모바일 가상학교 보고서 외 다수 인공지능관련 문서 작성 및 PM 업무 진행</span>
          <br/>
          <br/>

          <Badge colorScheme="telegram" fontSize={18} mr={2}>
            솔루션 백엔드
          </Badge>
          <br/>
          <span><b>대표 프로젝트</b> : 서울대학교 청소년 가상학교 | 현대자동차 신입사원 웹 진단 시스템 | 인공지능 비드봇</span>
          <br/>
          <span>- 의료, VR, 모바일 데이터 통합관리 클라우드 인프라 구축 및 운용 (used Django, Spring boot)</span>
          <br/>
          <span>- 트래픽 bastion서버 로드밸런싱, 스케일아웃 시스템 구성 및 쿠버네티스 트레이싱 모듈 개발 (used AWS, GKE, OCI)</span>
          <br/>
          <span>- 연세세브란스병원의 정신건강의학 실시간 가중치 연산 알고리즘 및 머신러닝 기반 비인지진단 카테고리화 모듈 개발 (used PyTorch, Logstash)</span>
          <br/>
          <span>- 입찰정보 크롤링 및 데이터 전처리와 비드봇 알고리즘 튜닝 (used selenium, MSSQL)</span>
          <br/>
          <span>- 영상출력 모듈 레이턴시 동기화 관리 API 개발 (used Spring)</span>

        </UnorderedList>
        </Section>

      

      </SimpleGrid>

      <Section delay={0.5}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Project History
        </Heading>
        
      </Section>

      <SimpleGrid columns={[1, 3, 3]} gap={6}>

        <Section delay={0.4}>
          <WorkGridItem id="2022_Worket" thumbnail={thumb2022Worket} title="분석 모듈 구현">
            [진행] 분석 모듈 개발
          </WorkGridItem>
        </Section>

      <Section delay={0.6}>
          <WorkGridItem id="2021_XrContentsManagement" thumbnail={thumb2022Xr} title="영상 동기화 컨텐츠 관리">
            XR 컨텐츠 웹관리 솔루션
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
          <WorkGridItem id="2021_MyHomePage" thumbnail={thumb2021MyHomePage} title="홈페이지 만들기">
            마이홈 프로젝트
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
          <WorkGridItem id="2020_NoncognitiveDiagnosisMobileApp" thumbnail={thumb2020Noncognitive} title="모바일 진단시스템 컨설팅">
            비인지 진단 모바일 UX과 머신러닝 튜닝
          </WorkGridItem>
        </Section>

        <Section delay={0.7}>
          <WorkGridItem id="2020_SeoulVirtualSchool" thumbnail={thumb2020School} title="모바일가상학교">
          서울대학교 모바일가상학교의 데이터 진단 후 케어시스템 추천하는 통합관리 웹시스템 개발
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
          <WorkGridItem id="2018_ToyProject" thumbnail={thumb2018Toy} title="토이프로젝트">
            웹 채팅프로그램과 알고리즘, 배포환경과 같은 개발 기본 구성
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
