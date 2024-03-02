import {Container, Heading, SimpleGrid, Divider, UnorderedList, Badge} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumb2018Toy from '../public/images/works/2018_ToyProject_contents_0001.png'
import thumb2018Noncognitive from '../public/images/works/2018_NoncognitiveDiagnosisModule_contents_0001.png'
import thumb2019Hyundai from '../public/images/works/2019_HyundaiMotorsMindTravelBook_contents_0001.png'
import thumb2020School from '../public/images/works/2020_SeoulVirtualSchool_contents_0001.png'
import thumb2020Noncognitive from '../public/images/works/2020_NoncognitiveDiagnosisMobileApp_plan_0001.png'
import thumb2021MyHomePage from '../public/images/works/2021_MyHomePage_contents_0001.png'
import thumb2021_analysis_system from '../public/images/works/2021_analysis_system_proposal_main.png'
import thumb2023Monitorin from '../public/images/works/2023_monitoring_in_action_diagram_20230131.png'
import thumb2022Xr from '../public/images/works/2021_XrContentsManagement_contents_0001.png'
import thumb2023Stereo from '../public/images/works/2023_Stereo_vision_with_ITS_System_GS.png'
import thumb2024HCMS from '../public/images/works/2024_hybrid_cloud_management_system_thumb.png'

import React from "react";

const Works = () => (
  <Layout title="Works">
    <Container>

      <Heading as="h3" fontSize={20} mb={4}>
        Skill Stack
      </Heading>
      <Section delay={0.2}>
        <Badge colorScheme="blue" fontSize={15} mr={2}>
          데이터 분석
        </Badge>
        <Badge colorScheme="blue" fontSize={15} mr={2}>
          DB 튜닝
        </Badge>
        <Badge colorScheme="blue" fontSize={15} mr={2}>
          웹 백엔드
        </Badge>
        <Badge colorScheme="blue" fontSize={15} mr={2}>
          인공 지능
        </Badge>
        <Badge colorScheme="blue" fontSize={15} mr={2}>
          쿠버네티스
        </Badge>
      </Section>

      <Heading as="h3" fontSize={20} mb={4}>
        Work Experience
      </Heading>


      <SimpleGrid columns={[1, 1, 1]} gap={6}>

      <Section delay={0.2}>
        <UnorderedList>

          <Badge colorScheme="telegram" fontSize={18} mr={2}>
            백엔드
          </Badge>
          <br/>
          <span><b>대표 프로젝트</b> : 삼성DS 하이브리드 클라우드 | 서울대학교 청소년 가상학교 | 비인지진단 케어프로그램</span>
          <br/>
          <span>- 의료, VR, 모바일 데이터 통합관리 클라우드 인프라 구축 및 운용 (used Django, Spring boot, GCP 하이브리드, Kafka Streams)</span>
          <br/>
          <span>- 정신건강 케어프로그램 컨텐츠 기획과 구현 (used Spring)</span>
          <br/>
          <span>- 통계결과 리포트 디자인 및 pdf 대량 자동인쇄 시스템 개발 (used Spring, JSP)</span>
          <br/>
          <span>- 컨텐츠 3D모델링 외 영업 홍보페이지 다수 작성 (used React.js, Three.js, Unity)</span>
          <br/>
          <span>- 트래픽 bastion서버 로드밸런싱, 스케일아웃 시스템 구성 및 쿠버네티스 트레이싱 모듈 개발 (used AWS, GKE, OCI, Go)</span>
          <br/>
          <span>- 영상출력 모듈 레이턴시 동기화 관리 API 개발 (used Spring)</span>
          <br/>
          <span>- MongoDB/SpringBatch 기반 데이터 레이크/ 데이터 마트/ 통계 데이터 컬렉션 스키마 및 인덱스 구성 및 수집, 정제, 연산 배치 전략 구성 및 튜닝</span>
          <br/>
          <span>- 삼성전자 클라우드 및 서버 비용 데이터 Open API 기획 및 개발</span>
          <br/>
          <br/>

          <Badge colorScheme="telegram" fontSize={18} mr={2}>
            데이터
          </Badge>
          <br/>
          <span><b>대표 프로젝트</b> : 현대자동차 신입사원 웹 진단 시스템 | 인공지능 비드봇 | 삼성전자 스마트교차로</span>
          <br/>
          <span>- 연세세브란스병원의 정신건강의학 실시간 가중치 연산 알고리즘과 통계출력 sql튜닝 및 머신러닝 기반 비인지진단 카테고리화 모듈 개발 (used PyTorch, Logstash)</span>
          <br/>
          <span>- 입찰정보 크롤링 및 데이터 자동 전처리 시스템과 비드봇 알고리즘 튜닝 (used selenium, MSSQL)</span>
          <br/>
          <span>- 보고서용 통계데이터 시각화 모듈 개발 (used Dash, React.js, flask)</span>
          <br/>
          <span>- 고덕 삼성전자 인공지능 스마트교차로 구축 및 관련 특허 출원 (도로기반 스테레오 비전 객체 탐지 기술)</span>
          <br/>
          <span>- 비공기압 타이어 인공지능 디자인 연구개발계획서, 서울대학교 모바일 가상학교 보고서, 조달청 우수제품 관련 특허 외 다수 인공지능관련 문서 작성 및 PM 업무 진행</span>
          <br/>

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
          <WorkGridItem id="2024_hybrid_cloud_management_system" thumbnail={thumb2024HCMS} title="Hybrid Cloud 관리 시스템">
            Hybrid Cloud 관리 시스템 개발
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem id="2023_monitoring_in_action" thumbnail={thumb2023Monitorin} title="분석 모듈 구현">
            분석 모듈 개발
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem id="2023_stereo_vision" thumbnail={thumb2023Stereo} title="도로기반 자율주행">
            스테레오 비전 시스템
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
            <WorkGridItem id="2022_XrContentsManagement" thumbnail={thumb2022Xr} title="영상 동기화 관리">
              XR 컨텐츠 웹관리 솔루션
            </WorkGridItem>
          </Section>

        <Section delay={0.6}>
          <WorkGridItem id="2021_analysis_system_proposal" thumbnail={thumb2021_analysis_system} title="금융모델 분석 기획">
            소셜네트워크 데이터 기반 금융모델 온라인 분석시스템 기획
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
          <WorkGridItem id="2021_MyHomePage" thumbnail={thumb2021MyHomePage} title="홈페이지 만들기">
            마이홈 프로젝트
          </WorkGridItem>
        </Section>

        <Section delay={0.6}>
          <WorkGridItem id="2020_NoncognitiveDiagnosisMobileApp" thumbnail={thumb2020Noncognitive} title="모바일 진단시스템">
            비인지 진단 모바일 UX과 머신러닝 튜닝
          </WorkGridItem>
        </Section>

        <Section delay={0.7}>
          <WorkGridItem id="2020_SeoulVirtualSchool" thumbnail={thumb2020School} title="모바일 가상학교">
          서울대학교 모바일가상학교의 데이터 진단 후 케어시스템 추천하는 통합관리 웹시스템 개발
          </WorkGridItem>
        </Section>

        <Section delay={0.8}>
          <WorkGridItem id="2019_HyundaiMotorsMindTravelBook" thumbnail={thumb2019Hyundai} title="마음여행책">
            현대자동차 임직원 비인지 웹진단과 개인 맞춤 책 발간 시스템 개발
          </WorkGridItem>
        </Section>

        <Section delay={0.9}>
          <WorkGridItem id="2018_NoncognitiveDiagnosisModule" thumbnail={thumb2018Noncognitive} title="온라인 진단 서비스">
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
