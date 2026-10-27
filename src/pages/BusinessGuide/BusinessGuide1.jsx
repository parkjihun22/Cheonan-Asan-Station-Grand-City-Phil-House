import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";



const projectData = [
  {
    label: "현장명",
    value: "천안아산역 그랑시티 필하우스",
  },

  {
    label: "사업명",
    value: "천안아산역 그랑시티 필하우스 1BL",
  },

  {
    label: "대지위치",
    value: "충청남도 아산시 배방읍 휴대리 143번지 일원",
  },

  {
    label: "규모",
    value: "지하 2층~지상 최고 28층, 아파트 14개 동",
  },

  {
    label: "공급규모",
    value: "총 1,534세대 (이번 일반분양 1,380세대)",
  },

  {
    label: "주택형",
    value:
      "전용 84㎡A·84㎡B·84㎡C·84㎡D / 전용 103㎡A·103㎡B",
  },

  {
    label: "공급형태",
    value: "민영 아파트 일반분양",
  },

  {
    label: "용도",
    value: "공동주택(아파트) 및 부대복리시설",
  },

  {
    label: "시공사",
    value: "한성건설",
  },
];


const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    { title: "분양일정", url: "/BusinessGuide/plan" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />
<div className={styles.textBox}>
  <div>아산시 배방읍 휴대지구에 계획된 총 1,534세대 대단지 아파트</div>
  <div>천안아산역 그랑시티 필하우스, 새로운 주거 가치를 완성합니다.</div>
</div>

<img className={styles.img3} src={page1} alt="천안아산역 그랑시티필하우스 사업개요 이미지"/>

			<div className={styles.tableContainer}>
				{!isMobile && (
					<img
						className={styles.tableImg}
						src={tableImage}
						alt="천안아산역 그랑시티필하우스 사업개요 표 이미지"
					/>
				)}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
