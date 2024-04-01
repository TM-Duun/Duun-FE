import styled from "styled-components"
import { Back, Block, BtnTotalDiv, DeatailHeader, InfoTextDiv, ItemDiv, ItemInfo, Info, ProductDiv, ProductsInfo, PurchaseBtn, RecommendedItemDiv, Total } from "./DetailStyles";
// import ShareGridImg from "../../Components/Shared/GridImg/ShareGridImg";
// import useStoreHeart from "../../Store/StoreHeartBadge";
// import { Carousel } from "react-responsive-carousel";

// const ItemContainer = styled.div`
//  display: grid;
//   grid-template-columns: repeat(5, 1fr); // 5개의 칼럼을 동일한 크기로 생성
//   justify-items: center; // 아이템을 가로 방향으로 중앙 정렬
//   align-items: center; // 아이템을 세로 방향으로 중앙 정렬
// `;



const DWrapper=styled.div`
  display : flex;
  flex-direction: column;
  padding : 0px 200px;
  box-sizing: border-box;
  min-height: 250vh;
`;

const gridItems = [
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
  {name:"Lounded wide Sweat Shirt", cost:"$ 36.50"},
]
const productsInfo=[
 {
  name:"[Acne] Straight Casual Jeans",
  color:"Dark Blue",
  size:"Free",
  gender:"Men",
  likes:"12"
 },
]

const productsPrice=[
  {
    discount:"none",
    coupon:"none",
    event:"none",
    total:"39,000"
  },
]

// const chunkArray = (myArray, chunk_size) => {
//   const results = [];
//   while (myArray.length) {
//     results.push(myArray.splice(0, chunk_size));
//   }
//   return results;
// };

// 캐러셀 슬라이드에 각각의 아이템을 나열할 수 있는 컨테이너
// const SlideContainer = styled.div`
//   margin-top: 40px;
//   display: flex;
//   justify-content:center;
//   width: 100%;
//   align-items: center;
// `;

// const itemGroups = chunkArray([...gridItems], 5);

// 마이페이지
export default function MyPage() {

  // const {likedItems}=useStoreHeart();

    return (
      <DWrapper>
        <Block></Block>
        <DeatailHeader to="/category">
          <img src="/detaildata/back_arrow.svg"/>
          <Back>돌아가기</Back>
        </DeatailHeader>
        <ItemDiv>
          <img src="/detaildata/Item_big.png"/>
          <ItemInfo>
            <Info style={{marginTop:0}}>Product Info</Info>
            {productsInfo.map((item,index)=>
            <InfoTextDiv key={index}>
              <ProductsInfo style={{fontSize:'32px',marginBottom:'20px'}}>{item.name}</ProductsInfo>
                <ProductsInfo>
                  <span>Color</span>
                 <ProductDiv>{item.color}</ProductDiv>
                </ProductsInfo>
                <ProductsInfo>
                  <span>Size</span>
                  <ProductDiv>{item.size}</ProductDiv>
                </ProductsInfo>
                <ProductsInfo>
                  <span>Gender</span>
                  <ProductDiv>{item.gender}</ProductDiv>
                </ProductsInfo>
                <ProductsInfo style={{marginBottom:'30px'}}>
                  <span style={{display:'flex',alignItems:'center'}}>
                    Likes 
                    <img  style={{height:'16px',width:'16px',marginLeft:'5px'}} src="/categorydata/pull_heart.svg"/>
                  </span>
                  <ProductDiv>{item.likes}</ProductDiv>
                </ProductsInfo>
            </InfoTextDiv>
            )}
          <Info>Price Info</Info>
          {productsPrice.map((item,index)=>
            <InfoTextDiv key={index} style={{border:'none'}}>
                <ProductsInfo>
                  <span>Discount</span>
                 <ProductDiv>{item.discount}</ProductDiv>
                </ProductsInfo>
                <ProductsInfo>
                  <span>Coupon</span>
                  <ProductDiv>{item.coupon}</ProductDiv>
                </ProductsInfo>
                <ProductsInfo>
                  <span>Event</span>
                  <ProductDiv>{item.event}</ProductDiv>
                </ProductsInfo>
              <BtnTotalDiv>
                <PurchaseBtn>장바구니</PurchaseBtn>    
                <Total>
                  <Info style={{fontSize:'16px',margin:0,color:'#626262'}}>Total</Info>
                    {item.total}원
                </Total>
              </BtnTotalDiv>
            </InfoTextDiv>
            )}
          </ItemInfo>
        </ItemDiv>
         <RecommendedItemDiv>
          
         </RecommendedItemDiv>
      </DWrapper>
    )
  }
  