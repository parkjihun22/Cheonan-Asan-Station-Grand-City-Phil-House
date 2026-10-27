const reservationData = {
  eyebrow: "RESERVATION",
  title: "모델하우스 방문예약",
  description:
    "천안아산역 그랑시티 필하우스 방문예약을 남겨주시면 전문 상담원이 순차적으로 연락드려 모델하우스 위치, 방문 가능 시간과 상담 준비사항을 안내드립니다.",
  notice:
    "방문 전 전용 84㎡ 또는 103㎡ 중 관심 평형과 상담 희망 내용을 남겨주시면 84㎡ A·B·C·D 및 103㎡ A·B 타입별 평면과 분양조건을 더욱 정확하게 안내해 드릴 수 있습니다.",
  formAction: "https://formspree.io/f/mrpendpj",
  points: [
    {
      id: "address",
      label: "ADDRESS SMS",
      title: "모델하우스 주소 안내",
      text: "견본주택은 천안시 서북구 불당동 1413번지에 위치하며, 예약 상담을 통해 방문 가능 시간을 안내해 드립니다.",
    },
    {
      id: "unit",
      label: "UNIT CHECK",
      title: "관심 타입 및 평형 상담",
      text: "전용 84㎡ A·B·C·D와 103㎡ A·B 등 총 6개 타입의 평면 및 공간 구성을 안내합니다.",
    },
    {
      id: "schedule",
      label: "SALES GUIDE",
      title: "아파트 분양 안내",
      text: "입주자모집공고에 따른 분양가, 대금 납부조건, 공급 일정과 계약 절차 등 필요한 정보를 상담합니다.",
    },
  ],
  fields: [
    {
      id: "name",
      name: "name",
      label: "고객명",
      type: "text",
      placeholder: "고객명을 입력해 주세요",
      required: true,
      autoComplete: "name",
    },
    {
      id: "phone",
      name: "phone",
      label: "연락처",
      type: "tel",
      placeholder: "010-0000-0000",
      required: true,
      inputMode: "tel",
      autoComplete: "tel",
      pattern: "^01[0-9][-\\s]?[0-9]{3,4}[-\\s]?[0-9]{4}$",
      title: "예: 01012345678 또는 010-1234-5678",
    },
  ],
  messageField: {
    id: "message",
    name: "message",
    label: "문의 내용",
    placeholder:
      "관심 타입과 평형, 방문 희망일, 상담 희망 내용을 남겨주세요",
    rows: 5,
  },
  submitLabel: "방문예약 등록",
};
export default reservationData;