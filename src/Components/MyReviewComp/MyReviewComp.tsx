import { SharedCircle, SharedContainer, SharedScript, SharedTitle } from "../Shared/PagesComp/PagesComp";

export default function MyReviewComp() {
  return (
    <SharedContainer>
        <SharedCircle src="/circle.svg"/>
        <SharedTitle>내가 쓴 리뷰</SharedTitle>
        <SharedScript>상품 리뷰를 작성하면 포인트를 지급합니다.<br/>
        <b>(일반 리뷰 500P / 포토 리뷰 1,000P / 스타일 리뷰 2,000P)</b></SharedScript>
    </SharedContainer>
  )
}
