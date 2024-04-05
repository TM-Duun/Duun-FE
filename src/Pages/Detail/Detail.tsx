import styled from "styled-components"
import { Back, Block, BtnTotalDiv, DeatailHeader, InfoTextDiv, ItemDiv, ItemInfo, Info, ProductDiv, ProductsInfo, PurchaseBtn, RecommendedItemDiv, Total } from "./DetailStyles";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';

const DWrapper=styled.div`
  display : flex;
  flex-direction: column;
  padding : 0px 200px;
  /* box-sizing: border-box; */
  min-height:100vh;
  margin : 30px 0 0 0;
  width: 100%;
`;

// const productsInfo=[
//  {
//   name:"[Acne] Straight Casual Jeans",
//   color:"Dark Blue",
//   size:"Free",
//   gender:"Men",
//   likes:"12"
//  },
// ]

const productsPrice=[
  {
    discount:"none",
    coupon:"none",
    event:"none",
    total:"39,000"
  },
]

interface Product {
  id: number;
  title: string;
  price: string;
  // category: string;
  image: string;
}

// 마이페이지
export default function MyPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

    return (
      <DWrapper>
        <Block></Block>
        <DeatailHeader to="/category">
          <img src="/detaildata/back_arrow.svg"/>
          <Back>돌아가기</Back>
        </DeatailHeader>
        <ItemDiv>
          <div style={{height:'100%',width:'40%'}}>
            <img src={product.image}/>
          </div>
          <ItemInfo>
            <Info style={{marginTop:0}}>Product Info</Info>
            {/* {productsInfo.map((item,index)=> */}
            <InfoTextDiv key={product.id}>
              <ProductsInfo style={{fontSize:'32px',marginBottom:'20px'}}>{product.title}</ProductsInfo>
                <ProductsInfo>
                  <span>Color</span>
                 <ProductDiv>{product.id}</ProductDiv>
                </ProductsInfo>
                <ProductsInfo>
                  <span>Size</span>
                  <ProductDiv>{product.id}</ProductDiv>
                </ProductsInfo>
                <ProductsInfo>
                  <span>Gender</span>
                  <ProductDiv>{product.id}</ProductDiv>
                </ProductsInfo>
                <ProductsInfo style={{marginBottom:'30px'}}>
                  <span style={{display:'flex',alignItems:'center'}}>
                    Likes 
                    <img  style={{height:'16px',width:'16px',marginLeft:'5px'}} src="/categorydata/pull_heart.svg"/>
                  </span>
                  <ProductDiv>{product.id}</ProductDiv>
                </ProductsInfo>
            </InfoTextDiv>
            {/* )} */}
          <Info style={{marginTop:'50px'}}>Price Info</Info>
          {productsPrice.map((item,index)=>
            <InfoTextDiv key={index} style={{height:'50%',border:'none'}}>
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
                    {product.price}원
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
  