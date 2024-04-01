import { Bean, Dash, OdBottom, OdBtn, OdCircle, OdDateInput, OdLine, OdListHeader, OdMenu, OdMiddle, OdPickerContainer, OdScript, OdSelect, OdSubmitInput, OdTitle, OdTop, OrderWrapper } from "./OrderStyles";



export default function Order() {
  return (
    <Bean>
      <OrderWrapper>
        <OdTop>
          <OdCircle src="/circle.svg"/>
          <OdTitle>주문 / 배송 조회</OdTitle>
          <OdScript>주문 내역을 클릭하면 상세 내역을 확인 하실 수 있으며, 주문 상태에 따라 <b>취소/반품 신청이 가능</b>합니다.
            <br/>신청하신 취소/반품 내역은 <a href="/refund">'취소/반품 내역'</a> 메뉴에서 확인 가능합니다.</OdScript>
          <OdLine></OdLine>
        </OdTop>
        <OdMiddle>
          <OdMenu>
            <OdSelect>
                <OdBtn>1년</OdBtn>
                <OdBtn>6개월</OdBtn>
                <OdBtn>3개월</OdBtn>
                <OdBtn>1개월</OdBtn>
            </OdSelect>
          </OdMenu>
          <OdPickerContainer>
            <OdDateInput defaultValue="2024-01-25"/>
            <Dash>~</Dash>
            <OdDateInput defaultValue="2024-02-26"/>
            <OdSubmitInput
                type="submit"
                value="조회"/>
          </OdPickerContainer>
        </OdMiddle>
        <OdBottom>
          <OdListHeader>
              <p>상품 정보</p>
              <p>주문 번호</p>
              <p>주문 금액<br/>(수량)</p>
              <p>주문 일시</p>
              <p>결제 방법</p>
              <p>배송 상태</p>
          </OdListHeader>
        </OdBottom>
      </OrderWrapper>
    </Bean>
  )
}
