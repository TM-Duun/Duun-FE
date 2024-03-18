import { SharedCircle, SharedContainer, SharedLine, SharedScript, SharedTitle } from "../Shared/PagesComp/PagesComp";
import FaqList from "./FaqList/FaqList";

export default function FaqComp() {
  return (
    <>
      <SharedContainer>
          <SharedCircle src="/circle.svg"/>
          <SharedTitle>FAQ</SharedTitle>
          <SharedScript><b>가장 많이 들어오는 질문 리스트들</b>입니다.<br/>참고해보시고, 자세한 문의는 <a href="/counsel">1:1 문의</a> 이용하시기 바랍니다.</SharedScript>
      </SharedContainer>
      <SharedLine />
      <FaqList />
    </>
  )
}
