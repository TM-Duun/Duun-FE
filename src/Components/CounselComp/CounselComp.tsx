import { SharedCircle, SharedContainer, SharedScript, SharedTitle } from "../Shared/PagesComp/PagesComp";

export default function CounselComp() {
  return (
    <SharedContainer>
        <SharedCircle src="/circle.svg"/>
        <SharedTitle>1:1 문의</SharedTitle>
        <SharedScript>1:1 문의는 <b>회원에게만 제공</b>되며, 비회원에게는 제공하지 않습니다.
        <br/>게시글은 <b>비밀글</b>로 모두 저장되어 등록자와 운영자만 게시글 확인이 가능합니다.</SharedScript>
    </SharedContainer>
  )
}
