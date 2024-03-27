import styled from "styled-components";
import { FaqBottom, FaqCircle, FaqItemBox, FaqLine, FaqScript, FaqTitle, FaqTop, FlContent, FlTitle } from "./FaqStyles";

const FaqWrapper = styled.div`
  width : 100vw;
  min-height : 100vh;
  margin : 20px 0 0 0;
  padding : 0;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
`;

export default function Faq() {

  const faqData = [
    { title: '배송 및 반품 안내', content: '배송 관련하여 본 서비스는 어떠한 책임도 묻지 않으며, 알아서 처리하시길 바랍니다'},
    { title: '배송 및 반품 안내', content: '배송 관련하여 본 서비스는 어떠한 책임도 묻지 않으며, 알아서 처리하시길 바랍니다'},
    { title: '배송 및 반품 안내', content: '배송 관련하여 본 서비스는 어떠한 책임도 묻지 않으며, 알아서 처리하시길 바랍니다'},
    { title: '배송 및 반품 안내', content: '배송 관련하여 본 서비스는 어떠한 책임도 묻지 않으며, 알아서 처리하시길 바랍니다'},
  ]

  return (
    <FaqWrapper>
      <FaqTop>
        <FaqCircle src="/circle.svg"/>
        <FaqTitle>FAQ</FaqTitle>
        <FaqScript><b>가장 많이 들어오는 질문 리스트들</b>입니다.<br/>참고해보시고, 자세한 문의는 <a href="/counsel">1:1 문의</a> 이용하시기 바랍니다.</FaqScript>
        <FaqLine></FaqLine>
      </FaqTop>
      <FaqBottom>
      {faqData.map((faq, index) => (
        <FaqItemBox key={index}>
            <FlTitle>{faq.title}</FlTitle>
            <FlContent>{faq.content}</FlContent>
        </FaqItemBox>  
      ))}
      </FaqBottom>
    </FaqWrapper>
  )
}
