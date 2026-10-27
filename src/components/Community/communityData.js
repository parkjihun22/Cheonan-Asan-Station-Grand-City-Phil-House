import bgImage from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import bannerImage from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";
import layoutImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

export const communityData = {
  eyebrow: "COMMUNITY",
  title: "품격 있는 일상을 완성하는 주거 설계",
  description:
    "천안아산역 그랑시티 필하우스는 지하 2층부터 지상 28층, 14개 동 총 1,534세대 규모의 대단지 아파트로 계획되어 주거와 휴식, 여가와 생활 편의가 조화롭게 이어지는 공간을 제안합니다.",
  backgroundImage: bgImage,
  banner: {
    image: bannerImage,
    alt: "천안아산역 그랑시티 필하우스 대단지 아파트 전경",
  },
  items: [
    {
      id: "complex-layout",
      label: "단지 배치도",
      title: "입주민의 생활 편의성을 고려한 단지 배치",
      description:
        "총 14개 동의 주거공간과 조경, 부대시설의 구성을 고려한 단지 배치와 생활 동선을 통해 편리하고 쾌적한 주거환경을 제안합니다.",
      image: layoutImage,
      alt: "천안아산역 그랑시티 필하우스 단지 배치도",
    },
    {
      id: "complex-design",
      label: "단지 특화설계",
      title: "최고 28층의 스카이라인을 갖춘 대단지 설계",
      description:
        "아산 배방읍 휴대지구에 들어서는 최고 28층 규모의 대단지 설계와 중앙광장, 수경시설 등 조경 계획으로 주거 편의와 일상의 여유를 함께 담았습니다.",
      image: designImage,
      alt: "천안아산역 그랑시티 필하우스 단지 특화 설계",
    },
    {
      id: "community-space",
      label: "커뮤니티",
      title: "일상에 활력을 더하는 커뮤니티 공간",
      description:
        "실내수영장과 피트니스, 골프연습장, 작은도서관과 게스트하우스 등 다양한 커뮤니티 시설을 계획하여 운동과 여가, 휴식이 어우러지는 주거생활을 제안합니다.",
      image: communityImage,
      alt: "천안아산역 그랑시티 필하우스 커뮤니티 시설",
    },
  ],
};