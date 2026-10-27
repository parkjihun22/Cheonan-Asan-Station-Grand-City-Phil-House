import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title = "천안아산역 그랑시티필하우스" }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="천안아산역 그랑시티필하우스 배너이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <h1
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </h1>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  const normalizedText = text.replace(/\s/g, "");

  const brandTitles = [
    "홍보영상",
    "브랜드소개",
    "천안아산역그랑시티필하우스",
    "아산 그랑시티필하우스",
  ];

  const businessTitles = [
    "사업개요",
    "사업안내",
    "공급일정",
    "공급안내",
    "분양안내",
    "모집안내",
    "계약서류안내",
  ];

  const locationTitles = ["입지환경", "입지안내", "프리미엄"];

  const complexTitles = [
    "단지안내",
    "단지배치도",
    "동호수배치도",
    "호수배치도",
    "커뮤니티",
  ];

  const unitTitles = [
    "세대안내",
    "세대안내영상",
    "타입안내",
    "84A㎡평면도",
    "84B㎡평면도",
    "84C㎡평면도",
    "84D㎡평면도",
    "103A㎡평면도",
    "103B㎡평면도",
    "84A타입",
    "84D타입",
    "E모델하우스",
    "E-모델하우스",
  ];

  const promotionTitles = [
    "홍보센터",
    "언론보도",
    "관심고객등록",
    "방문예약등록",
    "방문예약",
  ];

  if (brandTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          아산 배방읍 휴대지구에서 만나는 새로운 주거 가치.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          천안아산역 그랑시티 필하우스, 최고 28층 대단지 아파트.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          총 1,534세대 대단지에서 누리는 다채로운 주거생활을 만나보세요.
        </div>
      </>
    );
  } else if (
    businessTitles.includes(normalizedText) ||
    unitTitles.includes(normalizedText) ||
    normalizedText.includes("인테리어")
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          천안아산역 그랑시티 필하우스의 사업개요와 공급 안내.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          지하 2층부터 지상 28층, 14개 동 총 1,534세대 중 일반분양 1,380세대.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          전용 84㎡ A·B·C·D와 103㎡ A·B로 구성된 6가지 타입을
          확인하세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          천안아산역 그랑시티 필하우스
        </div>
      </>
    );
  } else if (locationTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          KTX·SRT 천안아산역과 수도권 전철 1호선 아산역을 이용하는
          광역교통 생활권.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          천안·아산 생활권의 교육, 쇼핑, 의료, 생활 인프라를 함께
          이용할 수 있습니다.
        </div>
      </>
    );
  } else if (complexTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          최고 28층 스카이라인과 다양한 공간 구성을 갖춘 대단지
          아파트.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          일상의 여유를 더하는 조경과 커뮤니티, 생활 편의 설계를
          확인하세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          천안아산역 그랑시티 필하우스가 휴대지구의 새로운 주거 기준을
          제안합니다.
        </div>
      </>
    );
  } else if (promotionTitles.includes(normalizedText)) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          천안아산역 그랑시티 필하우스의 분양 소식과 모델하우스 방문예약
          안내를 확인하세요.
        </div>

        <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
          관심고객등록을 통해 분양조건, 공급 일정, 평면 및 상담 정보를
          안내받으실 수 있습니다.
        </div>
      </>
    );
  }

  return (
    <div className={`${styles.text} ${isLoaded ? styles.showText : ""}`}>
      천안아산역 그랑시티 필하우스 홈페이지에서 사업개요, 입지환경, 평면도와
      방문예약 정보를 확인하세요.
    </div>
  );
};