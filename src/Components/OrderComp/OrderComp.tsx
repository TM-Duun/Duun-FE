import { SharedCircle, SharedContainer, SharedScript, SharedTitle } from "../Shared/PagesComp/PagesComp";
import OrderList from "./OrderList/OrderList";
import OrderListTop from "./OrderListTop/OrderListTop";

export default function OrderComp() {
  return (
    <>
      <SharedContainer>
          <SharedCircle src="/circle.svg"/>
          <SharedTitle>주문 / 배송 조회</SharedTitle>
          <SharedScript>주문 내역을 클릭하면 상세 내역을 확인 하실 수 있으며, 주문 상태에 따라 <b>취소/반품 신청이 가능</b>합니다.
          <br/>신청하신 취소/반품 내역은 <a href="/refund">'취소/반품 내역'</a> 메뉴에서 확인 가능합니다.</SharedScript>
      </SharedContainer>
      <OrderListTop />
      <OrderList />
    </>
  )
}
