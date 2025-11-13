# GitHub Copilot Instructions

## 프로젝트 개요

- Next.js 15 App Router 기반 프로젝트
- TypeScript 사용
- Tailwind CSS 사용안함
- Skypass 프로모션 서비스

## 코딩 스타일

- 명확하고 짧은 문장으로 코드 설명
- 최신 Next.js 및 React 트렌드 반영
- TypeScript strict mode 준수
- 함수형 컴포넌트 및 Hooks 우선 사용
- CSS는 SASS형태

## 파일 구조 규칙

- `/app` - 페이지 라우팅 및 레이아웃
- `/components` - 재사용 가능한 React 컴포넌트
- `/data` - 정적 데이터 및 타입 정의
- `/util` - 유틸리티 함수

## 명명 규칙

- 컴포넌트: PascalCase (예: `PromotionCard.tsx`)
- 파일: kebab-case 또는 PascalCase
- CSS Modules: `*.module.css`

## 최적화 원칙

- Client Components 우선 사용
- 이미지 최적화: next/image 사용
- 코드 스플리팅 및 lazy loading 적극 활용

## 응답 스타일

- 간결하고 명확한 설명
- 최신 기술 동향 반영
- 're' 입력 시 코드 최적화 제안
