import styled from "styled-components"
import { PtBottom, PtCircle, PtMiddle, PtScript, PtTiPte, PtTop, PtMenu, PtSelect, PtBtn, PtPickerContainer, PtDateInput, Dash, PtSubmitInput, PtListHeader, PtLine, Bean } from "./PaymentStyles";


const PaymentWrapper = styled.div`
  width : 100vw;
  min-height : 100vh;
  margin : 0;
  padding : 0;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
`;

export default function Payment() {
  return (
    <Bean>
      <PaymentWrapper>
        <PtTop>
          <PtCircle src="/circle.svg"/>
          <PtTiPte>결제 내역</PtTiPte>
          <PtScript><b>결제하신 상품 리스트 및 영수증 발급</b>가능합니다.<br/>
            상품에 대한 정보를 확인 해주시고, 서비스 이용 바랍니다.</PtScript>
          <PtLine></PtLine>
        </PtTop>
        <PtMiddle>
          <PtMenu>
            <PtSelect>
                <PtBtn>1년</PtBtn>
                <PtBtn>6개월</PtBtn>
                <PtBtn>3개월</PtBtn>
                <PtBtn>1개월</PtBtn>
            </PtSelect>
          </PtMenu>
          <PtPickerContainer>
            <PtDateInput defaultValue="2024-01-25"/>
            <Dash>~</Dash>
            <PtDateInput defaultValue="2024-02-26"/>
            <PtSubmitInput
                type="submit"
                value="조회"/>
          </PtPickerContainer>
        </PtMiddle>
        <PtBottom>
          <PtListHeader>
              <p>상품 정보</p>
              <p>주문 번호</p>
              <p>주문 금액<br/>(수량)</p>
              <p>주문 일시</p>
              <p>결제 방법</p>
              <p>영수증</p>
          </PtListHeader>
        </PtBottom>
      </PaymentWrapper>
    </Bean>
  )
}
