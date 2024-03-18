import { SharedListHeader, SharedListWrapper } from "../../Shared/TimeLine/TimeLineList";

export default function RefundList() {
  return (
    <SharedListWrapper>
        <SharedListHeader>
            <p>상품 정보</p>
            <p>주문 번호</p>
            <p>주문 금액<br/>(수량)</p>
            <p>주문 일시</p>
            <p>결제 방법</p>
            <p>취소 상태</p>
        </SharedListHeader>
    </SharedListWrapper>
  )
}
