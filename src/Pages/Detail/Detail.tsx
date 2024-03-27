import styled from "styled-components"
import { Back, Block, BtnTotalDiv, DeatailHeader, InfoTextDiv, ItemDiv, ItemInfo, PriceInfo, ProductsInfo, PurchaseBtn, RecommendedItemDiv, Total } from "./DetailStyles";

const DWrapper=styled.div`
  display : flex;
  flex-direction: column;
  padding : 0px 200px;
  box-sizing: border-box;
`;

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
    total:"3,9000"
  },
]
// 마이페이지
export default function MyPage() {
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
            Product Info
            {productsInfo.map((item,index)=>
            <InfoTextDiv key={index}>
              <ProductsInfo style={{width:'100%',fontSize:'32px',marginBottom:'15px'}}>{item.name}</ProductsInfo>
              <div style={{display:"flex"}}>
                <ProductsInfo>
                  Color <br/>
                  Size <br/>
                  Gender <br/>
                  Likes
                </ProductsInfo>
                <ProductsInfo style={{textAlign:"center"}}>
                  {item.color}<br/>
                  {item.size}<br/>
                  {item.gender}<br/>
                  {item.likes}
                </ProductsInfo>
              </div>
            </InfoTextDiv>
            )}
            <PriceInfo>
            Price Info
          </PriceInfo>
          {productsPrice.map((item,index)=>
            <InfoTextDiv key={index} style={{height:'40%',border:'none'}}>
              <div style={{display:"flex"}}>
                <ProductsInfo >
                  Discount <br/>
                  Coupon <br/>
                  Event
                </ProductsInfo>
                <ProductsInfo>
                  {item.discount}<br/>
                  {item.coupon}<br/>
                  {item.event}
                </ProductsInfo>
              </div>
              <BtnTotalDiv>
                <PurchaseBtn>구매 하기</PurchaseBtn>    
                <Total>
                  <ProductsInfo style={{fontSize:'16px',margin:0,color:'#626262'}}>Total</ProductsInfo>
                    {item.total}
                </Total>
              </BtnTotalDiv>
            </InfoTextDiv>
            )}
          </ItemInfo>
        </ItemDiv>
        <RecommendedItemDiv>
          여기 추천상품
        </RecommendedItemDiv>
      </DWrapper>
    )
  }
  