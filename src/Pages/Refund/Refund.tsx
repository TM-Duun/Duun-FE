import styled from "styled-components";
import { Dash, RfBottom, RfBtn, RfCircle, RfDateInput, RfLine, RfListHeader, RfMenu, RfMiddle, RfPickerContainer, RfScript, RfSelect, RfSubmitInput, RfTitle, RfTop } from "./RefundStyles";

const RefundWrapper = styled.div`
  width : 100vw;
  min-height : 100vh;
  margin : 20px 0 0 0;
  padding : 50px 0 0 0;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
`;

export default function Refund() {
  return (
    <RefundWrapper>
      <RfTop>
        <RfCircle src="/circle.svg"/>
        <RfTitle>주문 / 배송 조회</RfTitle>
        <RfScript>주문 내역을 클릭하면 상세 내역을 확인 하실 수 있으며, 주문 상태에 따라 <b>취소/반품 신청이 가능</b>합니다.
          <br/>신청하신 취소/반품 내역은 <a href="/refund">'취소/반품 내역'</a> 메뉴에서 확인 가능합니다.</RfScript>
        <RfLine></RfLine>
      </RfTop>
      <RfMiddle>
        <RfMenu>
          <RfSelect>
              <RfBtn>1년</RfBtn>
              <RfBtn>6개월</RfBtn>
              <RfBtn>3개월</RfBtn>
              <RfBtn>1개월</RfBtn>
          </RfSelect>
        </RfMenu>
        <RfPickerContainer>
          <RfDateInput defaultValue="2024-01-25"/>
          <Dash>~</Dash>
          <RfDateInput defaultValue="2024-02-26"/>
          <RfSubmitInput
              type="submit"
              value="조회"/>
        </RfPickerContainer>
      </RfMiddle>
      <RfBottom>
        <RfListHeader>
            <p>상품 정보</p>
            <p>주문 번호</p>
            <p>주문 금액<br/>(수량)</p>
            <p>주문 일시</p>
            <p>결제 방법</p>
            <p>취소 상태</p>
        </RfListHeader>
      </RfBottom>
    </RefundWrapper>
  )
}
