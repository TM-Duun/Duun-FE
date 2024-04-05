import styled from "styled-components"
import { Back, Block, BtnTotalDiv, DeatailHeader, InfoTextDiv, ItemDiv, ItemInfo, Info, ProductDiv, ProductsInfo, PurchaseBtn, RecommendedItemDiv, Total } from "./DetailStyles";
import { useNavigate } from "react-router-dom";

const DWrapper=styled.div`
  display : flex;
  flex-direction: column;
  padding : 0px 200px;
  box-sizing: border-box;
  min-height: 250vh;
  margin : 30px 0 0 0;
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
    total:"39,000"
  },
]

// 마이페이지
export default function MyPage() {

  const navigate = useNavigate();

  const toHandleBack = () => {
    navigate(-1);
  };

    return (
      <DWrapper>
        <Block></Block>
        <DeatailHeader onClick={toHandleBack}>
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
  