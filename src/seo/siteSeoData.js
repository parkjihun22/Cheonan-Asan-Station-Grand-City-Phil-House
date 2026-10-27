const SITE_URL = "https://sinbiapt.co.kr";

export const siteSeo = {
  siteName: "[공식]천안아산역 그랑시티 필하우스",
  siteUrl: SITE_URL,
  phone: "1533-8848",
  ogImage: "/img/og/main.jpg",
  locale: "ko_KR",
  organizationId: `${SITE_URL}/#organization`,
  websiteId: `${SITE_URL}/#website`,
  defaultDescription:
    "천안아산역 그랑시티 필하우스 안내 홈페이지입니다. 충청남도 아산시 배방읍 휴대리 143번지 일원에 조성되는 대단지 아파트로, 최고 28층, 14개 동 총 1,534세대 중 일반분양 1,380세대의 사업정보와 모델하우스 방문예약을 안내합니다.",

  project: {
    addressCountry: "KR",
    addressRegion: "충청남도",
    addressLocality: "아산시",
    streetAddress: "배방읍 휴대리 143번지 일원",
    brands: [
      "천안아산역 그랑시티필하우스",
      "필하우스",
      "한성건설",
    ],
    navigationSchemaName: "천안아산역 그랑시티 필하우스 주요 메뉴",
  },

  keywords: [
    "천안아산역 그랑시티 필하우스",
    "천안아산역그랑시티필하우스",
    "천안아산 그랑시티필하우스",
    "천안아산역 그랑시티",
    "그랑시티 필하우스",
    "아산 그랑시티필하우스",
  ],
};

export const seoNavigation = [
  {
    name: "브랜드소개",
    path: "/Brand/intro",
    children: [
      {
        name: "브랜드소개",
        path: "/Brand/intro",
      },
    ],
  },
  {
    name: "사업안내",
    path: "/BusinessGuide/intro",
    children: [
      {
        name: "사업안내",
        path: "/BusinessGuide/intro",
      },
      {
        name: "분양일정",
        path: "/BusinessGuide/plan",
      },
    ],
  },
  {
    name: "입지환경",
    path: "/LocationEnvironment/intro",
    children: [
      {
        name: "입지안내",
        path: "/LocationEnvironment/intro",
      },
      {
        name: "프리미엄",
        path: "/LocationEnvironment/primium",
      },
    ],
  },
  {
    name: "단지안내",
    path: "/ComplexGuide/intro",
    children: [
      {
        name: "단지배치도",
        path: "/ComplexGuide/intro",
      },
      {
        name: "호수배치도",
        path: "/ComplexGuide/detailintro",
      },
      {
        name: "커뮤니티",
        path: "/ComplexGuide/community",
      },
    ],
  },
  {
    name: "타입안내",
    path: "/FloorPlan/59A",
    children: [
      {
        name: "84㎡A",
        path: "/FloorPlan/59A",
      },
      {
        name: "84㎡B",
        path: "/FloorPlan/59B",
      },
      {
        name: "84㎡C",
        path: "/FloorPlan/84A",
      },
      {
        name: "84㎡D",
        path: "/FloorPlan/84B",
      },
      {
        name: "103㎡A",
        path: "/FloorPlan/114A",
      },
      {
        name: "103㎡B",
        path: "/FloorPlan/114B",
      },
      {
        name: "E-모델하우스",
        path: "/FloorPlan/Emodel",
      },
    ],
  },
  {
    name: "홍보센터",
    path: "/Promotion/Customer",
    children: [
      {
        name: "관심고객등록",
        path: "/Promotion/Customer",
      },
    ],
  },
];

const page = ({
  path,
  title,
  description,
  menu,
  image = siteSeo.ogImage,
  priority = 0.8,
  changefreq = "weekly",
  robots = "index, follow, max-snippet:-1, max-image-preview:large",
}) => ({
  path,
  title,
  description,
  menu,
  image,
  priority,
  changefreq,
  robots,
});

export const seoPages = {
  home: page({
    path: "/",
    title: "[공식]천안아산역 그랑시티필하우스",
    description: siteSeo.defaultDescription,
    menu: "홈",
    priority: 1,
    changefreq: "daily",
  }),

  brandIntro: page({
    path: "/Brand/intro",
    title: "브랜드소개 | 천안아산역 그랑시티 필하우스",
    description:
      "천안아산역 그랑시티 필하우스 브랜드소개 페이지입니다. 한성건설 필하우스의 주거 가치와 아산 배방읍 휴대지구에 조성되는 대단지 아파트의 비전을 확인하세요.",
    menu: "브랜드소개",
  }),

  businessIntro: page({
    path: "/BusinessGuide/intro",
    title: "사업안내 | 천안아산역 그랑시티 필하우스",
    description:
      "천안아산역 그랑시티 필하우스 사업안내입니다. 충청남도 아산시 배방읍 휴대리 143번지 일원, 지하 2층부터 지상 최고 28층, 14개 동 총 1,534세대 중 일반분양 1,380세대의 사업정보를 확인하세요.",
    menu: "사업안내",
    image: "/img/og/business.jpg",
    priority: 0.9,
  }),

  businessPlan: page({
    path: "/BusinessGuide/plan",
    title: "분양일정 | 천안아산역 그랑시티 필하우스",
    description:
      "천안아산역 그랑시티 필하우스 일정 안내입니다. 입주자모집공고에 따른 특별공급과 일반공급, 당첨자 발표, 서류접수 및 계약 관련 안내사항을 확인하세요.",
    menu: "사업안내",
  }),

  locationIntro: page({
    path: "/LocationEnvironment/intro",
    title: "입지환경 | 천안아산역 그랑시티 필하우스",
    description:
      "천안아산역 그랑시티 필하우스 입지환경 안내입니다. KTX·SRT 천안아산역과 전철 1호선 아산역 이용 생활권 및 아산 배방읍 휴대지구 주변의 교통·교육·쇼핑·생활 인프라를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),

  locationPremium: page({
    path: "/LocationEnvironment/primium",
    title: "프리미엄 | 천안아산역 그랑시티 필하우스",
    description:
      "천안아산역 그랑시티 필하우스 프리미엄 안내입니다. 지상 최고 28층, 총 1,534세대 대단지 설계와 천안·아산 생활권, 조경 및 커뮤니티 계획의 주요 특징을 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
  }),

  complexIntro: page({
    path: "/ComplexGuide/intro",
    title: "단지배치도 | 천안아산역 그랑시티 필하우스",
    description:
      "천안아산역 그랑시티 필하우스 단지배치도 안내입니다. 아파트 14개 동과 부대복리시설로 계획된 총 1,534세대 대단지의 배치 및 생활 동선을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
    priority: 0.9,
  }),

  complexDetail: page({
    path: "/ComplexGuide/detailintro",
    title: "호수배치도 | 천안아산역 그랑시티 필하우스",
    description:
      "천안아산역 그랑시티 필하우스 호수배치도 안내입니다. 전용 84㎡·103㎡ 아파트의 동·호수 구성 및 타입별 배치 정보를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  complexCommunity: page({
    path: "/ComplexGuide/community",
    title: "커뮤니티 | 천안아산역 그랑시티 필하우스",
    description:
      "천안아산역 그랑시티 필하우스 커뮤니티 안내입니다. 실내수영장과 피트니스, 골프연습장, 작은도서관 및 게스트하우스 등 운동과 여가를 고려한 시설 계획을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),

  floorPlan59A: page({
    path: "/FloorPlan/59A",
    title: "아파트 84㎡A 평면도 | 천안아산역 그랑시티 필하우스",
    description:
      "천안아산역 그랑시티 필하우스 아파트 84㎡A 평면도 안내입니다. 전용면적 84.7493㎡ 타입의 실내 공간과 생활 동선, 발코니 확장 및 선택품목 관련 안내를 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan59B: page({
    path: "/FloorPlan/59B",
    title: "아파트 84㎡B 평면도 | 천안아산역 그랑시티 필하우스",
    description:
      "천안아산역 그랑시티 필하우스 아파트 84㎡B 평면도 안내입니다. 전용면적 84.9394㎡ 타입의 실내 공간과 생활 동선, 발코니 확장 및 선택품목 관련 안내를 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan75A: page({
    path: "/FloorPlan/84A",
    title: "아파트 84㎡C 평면도 | 천안아산역 그랑시티 필하우스",
    description:
      "천안아산역 그랑시티 필하우스 아파트 84㎡C 평면도 안내입니다. 전용면적 84.8936㎡ 타입의 실내 공간과 생활 동선, 발코니 확장 및 선택품목 관련 안내를 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan75B: page({
    path: "/FloorPlan/84B",
    title: "아파트 84㎡D 평면도 | 천안아산역 그랑시티 필하우스",
    description:
      "천안아산역 그랑시티 필하우스 아파트 84㎡D 평면도 안내입니다. 전용면적 84.9855㎡ 타입의 실내 공간과 생활 동선, 발코니 확장 및 선택품목 관련 안내를 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan84A: page({
    path: "/FloorPlan/114A",
    title: "아파트 103㎡A 평면도 | 천안아산역 그랑시티 필하우스",
    description:
      "천안아산역 그랑시티 필하우스 아파트 103㎡A 평면도 안내입니다. 전용면적 103.9572㎡ 타입의 실내 공간과 생활 동선, 발코니 확장 및 선택품목 관련 안내를 확인하세요.",
    menu: "타입안내",
  }),

  floorPlan84B: page({
    path: "/FloorPlan/114B",
    title: "아파트 103㎡B 평면도 | 천안아산역 그랑시티 필하우스",
    description:
      "천안아산역 그랑시티 필하우스 아파트 103㎡B 평면도 안내입니다. 전용면적 103.9213㎡ 타입의 실내 공간과 생활 동선, 발코니 확장 및 선택품목 관련 안내를 확인하세요.",
    menu: "타입안내",
  }),

  emodel: page({
    path: "/FloorPlan/Emodel",
    title: "E-모델하우스 | 천안아산역 그랑시티 필하우스",
    description:
      "천안아산역 그랑시티 필하우스 E-모델하우스입니다. 공개된 84㎡A·84㎡D 타입의 온라인 관람 자료를 통해 실내 구조와 공간 구성, 생활 동선을 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
    priority: 0.9,
  }),

  customer: page({
    path: "/Promotion/Customer",
    title: "관심고객등록 | 천안아산역 그랑시티 필하우스",
    description:
      "천안아산역 그랑시티 필하우스 관심고객등록 페이지입니다. 아파트 분양조건, 공급 일정, 전용 84㎡·103㎡ 타입 안내와 모델하우스 방문예약 정보를 받아보세요.",
    menu: "홍보센터",
    image: "/img/og/customer.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),

  notFound: page({
    path: "/404",
    title: "페이지를 찾을 수 없습니다 | 천안아산역 그랑시티 필하우스",
    description:
      "요청하신 페이지를 찾을 수 없습니다. 천안아산역 그랑시티 필하우스 홈페이지의 사업안내, 입지환경, 단지안내, 타입안내, E-모델하우스와 관심고객등록 메뉴를 이용해 주세요.",
    menu: "오류",
    priority: 0,
    changefreq: "yearly",
    robots: "noindex, follow",
  }),
};

export const seoPathMap = Object.fromEntries(
  Object.entries(seoPages).map(([key, value]) => [
    value.path.toLowerCase(),
    key,
  ])
);

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteSeo.siteUrl}${path}`;
};

export const getSeoPageByPath = (pathname = "/") => {
  const decodedPath = decodeURI(pathname).replace(/\/$/, "") || "/";
  const normalizedPath = decodedPath.toLowerCase();
  const exactKey = seoPathMap[normalizedPath];

  if (exactKey) return seoPages[exactKey];

  if (normalizedPath.endsWith("/customer")) {
    return seoPages.customer;
  }

  return seoPages.notFound;
};