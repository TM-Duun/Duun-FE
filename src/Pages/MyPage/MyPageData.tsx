export const menuItems = [
    {
      title: "상품 내역",
      items: [
        { name: "관심 상품", link: "/likes"},
        { name: "결제 내역", link: "/payment"},
      ]
    },
    {
      title: "계정 관리",
      items: [
        { name: "회원정보 확인 / 수정", link: "/myinfo"},
        { name: "내가 쓴 리뷰", link: "/myreview"},
      ]
    },
    {
      title: "상태 관리",
      items: [
        { name: "주문 / 배송 조회", link: "/order"},
        { name: "취소 / 반품 내역", link: "/refund"},
      ]
    },
    {
      title: "Q&A",
      items: [
        { name: "FAQ", link: "/faq"},
        { name: "1:1 문의", link: "/counsel"},
      ]
    },
  ];

  export const infoData = [
    {
        title: '포인트',
        result : '30,000점'
    },
    {
        title: '주문 / 배송',
        result : '1개'
    },
    {
        title: '쿠폰',
        result : '2개'
    }
  ]