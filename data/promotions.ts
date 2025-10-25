import { Promotion } from '@/components/PromotionCard';

export const promotions: Promotion[] = [
  {
    id: '1',
    title: '보너스 마일리지 2배 적립',
    description: '국제선 탑승 시 보너스 마일리지 2배 적립 혜택',
    image: 'http://1.201.169.106:8080/dmFileImages/upload/MRHST/SKYPASS-MAIN.png',
    category: '항공',
    startDate: '2025.01.01',
    endDate: '2025.03.31',
    badge: 'HOT',
  },
  {
    id: '2',
    title: '호텔 예약 최대 30% 할인',
    description: '제휴 호텔 예약 시 마일리지 추가 적립 및 할인',
    image: 'http://1.201.169.106:8080/dmFileImages/upload/MRHST/SKYPASS-MAIN.png',
    category: '호텔',
    startDate: '2025.01.15',
    endDate: '2025.02.28',
  },
  {
    id: '3',
    title: '렌터카 10% 할인 쿠폰',
    description: '전국 렌터카 업체 이용 시 10% 할인',
    image: 'http://1.201.169.106:8080/dmFileImages/upload/MRHST/SKYPASS-MAIN.png',
    category: '렌터카',
    startDate: '2025.01.01',
    endDate: '2025.12.31',
    badge: 'NEW',
  },
  {
    id: '4',
    title: '면세점 5% 추가 할인',
    description: '인천공항 면세점 이용 시 추가 할인 혜택',
    image: 'http://1.201.169.106:8080/dmFileImages/upload/MRHST/SKYPASS-MAIN.png',
    category: '쇼핑',
    startDate: '2025.02.01',
    endDate: '2025.04.30',
  },
  {
    id: '5',
    title: '프리미엄 라운지 무료 이용',
    description: '골드 등급 이상 회원 라운지 무료 이용',
    image: 'http://1.201.169.106:8080/dmFileImages/upload/MRHST/SKYPASS-MAIN.png',
    category: '항공',
    startDate: '2025.01.01',
    endDate: '2025.12.31',
  },
  {
    id: '6',
    title: '리조트 패키지 특가',
    description: '제주도 리조트 숙박권 특별 할인',
    image: 'http://1.201.169.106:8080/dmFileImages/upload/MRHST/SKYPASS-MAIN.png',
    category: '호텔',
    startDate: '2025.03.01',
    endDate: '2025.05.31',
    badge: 'HOT',
  },
];

// 상세 정보 (실제로는 API에서 가져올 내용)
export const promotionDetails: Record<string, {
  detailedDescription: string;
  terms: string[];
  benefits: string[];
}> = {
  '1': {
    detailedDescription: '대한항공 국제선 탑승 시 기본 마일리지에 더해 보너스 마일리지를 2배로 적립해 드립니다. 이코노미석부터 일등석까지 모든 좌석 등급에 적용되며, SKYPASS 회원이라면 누구나 혜택을 받으실 수 있습니다.',
    terms: [
      '대한항공 운항 국제선에만 적용됩니다.',
      '코드쉐어 항공편은 제외됩니다.',
      '마일리지는 탑승일로부터 7일 이내 적립됩니다.',
      '다른 프로모션과 중복 적용 불가합니다.',
    ],
    benefits: [
      '기본 마일리지 + 보너스 마일리지 2배',
      '모든 좌석 등급 적용',
      '회원 등급 상관없이 모두 적용',
      '가족 마일리지 합산 가능',
    ],
  },
  '2': {
    detailedDescription: '전 세계 제휴 호텔 예약 시 최대 30%까지 할인받으실 수 있으며, 추가로 1박당 500마일리지를 적립해 드립니다. 5성급 호텔부터 비즈니스 호텔까지 다양한 숙박시설을 할인된 가격으로 이용하세요.',
    terms: [
      'SKYPASS 웹사이트 또는 앱을 통한 예약만 해당됩니다.',
      '할인율은 호텔과 시즌에 따라 다릅니다.',
      '취소 시 호텔별 취소 정책이 적용됩니다.',
      '마일리지 적립은 체크아웃 후 14일 이내 완료됩니다.',
    ],
    benefits: [
      '최대 30% 할인',
      '1박당 500 마일리지 추가 적립',
      '전 세계 1,000개 이상 제휴 호텔',
      '무료 취소 가능한 호텔 다수',
    ],
  },
  '3': {
    detailedDescription: '전국 주요 렌터카 업체와 제휴하여 10% 할인 쿠폰을 제공합니다. 국내 여행이나 출장 시 편리하게 차량을 렌트하고 할인 혜택까지 누리세요.',
    terms: [
      '제휴 렌터카 업체: 롯데렌터카, AJ렌터카, SK렌터카',
      '최소 24시간 이상 대여 시 적용',
      '성수기(7~8월, 12월~1월)에는 할인율이 조정될 수 있습니다.',
      '쿠폰은 1회 사용 후 소멸됩니다.',
    ],
    benefits: [
      '렌터카 요금 10% 할인',
      '제주도 포함 전국 이용 가능',
      '보험료 별도 할인 제공',
      '공항 픽업/반납 가능',
    ],
  },
  '4': {
    detailedDescription: '인천국제공항 면세점에서 SKYPASS 카드 제시 시 추가 5% 할인 혜택을 받으실 수 있습니다. 화장품, 향수, 주류, 담배, 패션 등 모든 품목에 적용됩니다.',
    terms: [
      '인천국제공항 면세점 전 매장 적용',
      '현장 할인은 출국 당일에만 가능',
      '온라인 사전 면세점 주문 시에도 적용',
      '일부 명품 브랜드는 제외될 수 있습니다.',
    ],
    benefits: [
      '전 품목 5% 추가 할인',
      '온라인/오프라인 모두 적용',
      '마일리지 적립 동시 가능',
      '프리미엄 라운지 이용권 증정 (30만원 이상 구매 시)',
    ],
  },
  '5': {
    detailedDescription: '골드 등급 이상 SKYPASS 회원이라면 국내외 공항 프리미엄 라운지를 무료로 이용하실 수 있습니다. 편안한 좌석, 무료 음료 및 식사, 샤워 시설 등 다양한 편의시설을 제공합니다.',
    terms: [
      '골드, 플래티넘, 다이아몬드 등급 회원만 해당',
      '본인 탑승권과 SKYPASS 카드 제시 필수',
      '동반 1인까지 무료 (다이아몬드 등급은 2인)',
      '라운지 이용은 출발 3시간 전부터 가능',
    ],
    benefits: [
      '국내 주요 공항 라운지 무료 이용',
      '해외 500개 이상 제휴 라운지 이용',
      '무료 식음료 및 샤워 시설',
      '비즈니스 센터 이용 가능',
    ],
  },
  '6': {
    detailedDescription: '제주도의 프리미엄 리조트 숙박권을 특별 가격에 제공합니다. 오션뷰 객실과 다양한 부대시설을 마음껏 이용하며 여유로운 휴가를 보내세요.',
    terms: [
      '제주 신라호텔, 롯데호텔, 해비치호텔 중 선택',
      '주중/주말 요금 차이 있음',
      '예약 후 취소 시 수수료 발생',
      '성수기(7~8월) 제외',
    ],
    benefits: [
      '정상가 대비 최대 40% 할인',
      '조식 2인 무료 제공',
      '수영장, 사우나 무료 이용',
      '객실 업그레이드 (선착순)',
    ],
  },
};
