import { Bean, LikesBottom, LikesCircle, LikesGrid, LikesLine, LikesScript, LikesTitle, LikesTop, LikesWrapper } from "./LikesStyles";
import  useStoreHeart from "../../Store/StoreHeartBadge"
import ShareGridImg from "../../Components/Shared/GridImg/ShareGridImg";

export default function Likes() {
  const {likedItems}=useStoreHeart();
  
  return (
    <Bean>
      <LikesWrapper>
        <LikesTop>
          <LikesCircle src="/circle.svg"/>
          <LikesTitle>관심 상품</LikesTitle>
          <LikesScript>관심 상품에 담은 시점과 구매 시점의 상품 가격 및 할인 정보가 다를 수 있으니 유의해 주시기 바랍니다.</LikesScript>
          <LikesLine></LikesLine>
        </LikesTop>
        <LikesBottom>
        <LikesGrid>
            {likedItems.map((item) => {
              return(
                <ShareGridImg
                      image={item.image}
                      key={item.index}
                      index={item.index}
                      name={item.name}
                      price={item.price}
                      />
              )
            })}
          </LikesGrid>
        </LikesBottom>
      </LikesWrapper>
    </Bean>
  )
}
