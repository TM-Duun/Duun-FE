import { SharedCircle, SharedContainer, SharedScript, SharedTitle } from "../Shared/PagesComp/PagesComp";
import RefundList from "./RefundList/RefundList";
import RefundListTop from "./RefundListTop/RefundListTop";

export default function RefundComp() {
  return (
    <>
      <SharedContainer>
          <SharedCircle src="/circle.svg"/>
          <SharedTitle>취소 / 반품 내역</SharedTitle>
          <SharedScript>주문 내역을 클릭하면 <b>신청 및 처리 내역</b>을 확인 할 수 있습니다.<br/>
          상품을 수령하신 날로부터 7일이 지나면 <b>구매 확정</b>이 되고, 이후에는 <b>반품이 불가</b>합니다.</SharedScript>
      </SharedContainer>
      <RefundListTop />
      <RefundList />
    </>
  )
}
