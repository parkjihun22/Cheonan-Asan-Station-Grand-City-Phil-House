// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect, useRef } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>천안아산역 그랑시티 필하우스 1BL</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>충청남도 아산시 배방읍 휴대리 143번지 일원</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>지하 2층~지상 최고 28층, 아파트 14개 동</span>
        </li>
        <li>
          <strong>공급규모</strong>
          <span>총 1,534세대 (이번 일반분양 1,380세대)</span>
        </li>
        <li>
          <strong>주택정보</strong>
          <span>
            전용 84㎡A·84㎡B·84㎡C·84㎡D <br/>전용
            103㎡A·103㎡B
          </span>
        </li>
        <li>
          <strong>공급형태</strong>
          <span>민영 아파트 일반분양</span>
        </li>
        <li>
          <strong>입지환경</strong>
          <span>KTX·SRT 천안아산역 및 전철 1호선 아산역 이용 생활권</span>
        </li>
        <li>
          <strong>용도</strong>
          <span>공동주택(아파트) 및 부대복리시설</span>
        </li>
        <li>
          <strong>시공사</strong>
          <span>한성건설</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="천안아산역 그랑시티 필하우스 입지환경 지도"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="천안아산역 그랑시티 필하우스 생활권 지도"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
{/* 프리미엄 섹션 상단 문단 */}
<div className={styles.premiumIntro}>
  <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
  <p className={styles.premiumSubtitle}>
    천안아산역과 천안·아산 생활권의 다양한 인프라를 누리는
    <br />
    천안아산역 그랑시티 필하우스 프리미엄 라이프
  </p>
</div>

{/* 슬라이더 */}
<PremiumSlider />
</>
),
},
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "아산 배방읍 휴대지구 입지",
      desc:
        "아산시 배방읍 휴대지구 공동주택 1블럭<br/>천안·아산 생활권의 다양한 생활 인프라<br/>도시개발과 함께 새로운 일상을 준비하는 주거환경",
    },
    {
      img: slide2,
      title: "전용 84㎡·103㎡ 타입 구성",
      desc:
        "전용 84㎡ A·B·C·D의 4개 타입 구성<br/>전용 103㎡ A·B를 더한 총 6개 타입<br/>다양한 생활방식을 고려한 실용적인 주거공간",
    },
    {
      img: slide3,
      title: "총 1,534세대 대단지 아파트",
      desc:
        "총 1,534세대 중 이번 일반분양 1,380세대<br/>지하 2층부터 지상 최고 28층, 14개 동 구성<br/>중앙광장과 수경시설 등 조경을 계획한 대단지",
    },
    {
      img: slide4,
      title: "교통·생활 인프라를 함께 누리다",
      desc:
        "KTX·SRT 천안아산역과 전철 1호선 아산역 이용<br/>광역복합환승센터 등 교통개발사업 추진 중<br/>갤러리아·트레이더스 등 쇼핑시설 이용 생활권",
    },
    {
      img: slide5,
      title: "한성건설 필하우스 브랜드",
      desc:
        "한성건설의 필하우스 브랜드가 적용되는 주거단지<br/>입주민의 생활 편의를 고려한 단지 설계<br/>품격과 실용성을 함께 담은 주거공간",
    },
    {
      img: slide6,
      title: "일상을 채우는 다양한 커뮤니티",
      desc:
        "실내수영장·피트니스·골프연습장 등 계획<br/>작은도서관과 게스트하우스로 더하는 생활의 여유<br/>세부 시설 구성과 제공 범위는 공식 안내자료 기준",
    },
  ];

  
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const itemRefs = useRef({});

  const toggle = (key) => {
    setOpenKey((prevKey) => (prevKey === key ? null : key));

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const targetItem = itemRefs.current[key];
        if (!targetItem) return;

        const fixedHeaderOffset = 96;
        const targetTop =
          window.scrollY + targetItem.getBoundingClientRect().top - fixedHeaderOffset;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "auto",
        });
      });
    });
  };

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>CHEONGJU HANYANG LIPS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      <img src={heroImage} className={styles.heroImage} alt="천안아산역 그랑시티필하우스 히어로 메인사진" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div
          key={key}
          className={styles.accordionItem}
          ref={(node) => {
            itemRefs.current[key] = node;
          }}
        >
          <button
            type="button"
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
            aria-expanded={openKey === key}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
