import { SharedCircle, SharedContainer, SharedScript, SharedTitle } from "../Shared/PagesComp/PagesComp";

export default function LikesComp() {
  return (
    <SharedContainer>
        <SharedCircle src="/circle.svg"/>
        <SharedTitle>관심 상품</SharedTitle>
        <SharedScript>관심 상품에 담은 시점과 구매 시점의 상품 가격 및 할인 정보가 다를 수 있으니 유의해 주시기 바랍니다.</SharedScript>
    </SharedContainer>
  )
}
