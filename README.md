# React Shoe Shop (신발 쇼핑몰)

## 📌 프로젝트 소개  
React 기반으로 제작한 신발 쇼핑몰 웹 애플리케이션입니다.  
쇼핑몰에서 요구되는 기본적인 기능들을 직접 구현하며, 프론트엔드 구조 설계 및 상태 관리에 대한 이해를 높이기 위한 개인 프로젝트입니다.

## 🚀 주요 기능
- 🔍 상품 목록 조회
- 📄 상품 상세 페이지 확인
- 🛒 장바구니 담기 및 수량 조절 및 삭제
- 🛒 장바구니 내 상품 🔺 정렬 / 🔻 역정렬 (이름 기준)
- 👀 최근 본 상품 목록 자동 저장 및 조회

## 📁 폴더 구조
# 프론트엔드 React 프로젝트
/src
  /components   # UI 컴포넌트
  /pages        # 라우팅되는 주요 페이지
  /img          # 이미지 폴더
App.js        # 메인 앱 컴포넌트
index.js      # 앱 엔트리 포인트
data.js       # 가상 데이터 파일
store.js      # 상태 관리 Redux 파일
.gitignore
README.md

## 🛠 사용 기술
-프론트엔드: React, Redux, Bootstrap
-API 호출: Fetch API, Axios

## 📝 기타

- 상태 관리는 Redux를 사용하여 장바구니, LocalStorage를 사용한 최근 본 상품 등
- React-Bootstrap을 사용해 UI 구성의 일관성 및 반응형 지원
- 간단한 정렬/필터 기능을 통해 사용자 편의성 향상
