import { SharedCircle, SharedContainer, SharedScript, SharedTitle } from "../Shared/PagesComp/PagesComp";

export default function PaymentComp() {
  return (
    <SharedContainer>
        <SharedCircle src="/circle.svg"/>
        <SharedTitle>결제 내역</SharedTitle>
        <SharedScript><b>결제하신 상품 리스트 및 영수증 발급</b>가능합니다.<br/>
        상품에 대한 정보를 확인 해주시고, 서비스 이용 바랍니다.</SharedScript>
    </SharedContainer>
  )
}
