import styled from "styled-components"
import { Back, Block, BtnTotalDiv, DeatailHeader, InfoTextDiv, ItemDiv, ItemInfo, Info, ProductDiv, ProductsInfo, PurchaseBtn, RecommendedItemDiv, Total, ItemImage } from "./DetailStyles";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
import LoaderComponent from "../../Components/Loader/CircleLoader";
import useStoreCart from "../../Store/StoreCart";
import useStore from "../../Store/StoreCartBadge";
import DetailSliderComp from "../../Components/DetailSliderComp/DetailSliderComp"

const DWrapper=styled.div`
  display : flex;
  flex-direction: column;
  padding : 0px 200px;
  min-height:100vh;
  margin : 30px 0 0 0;
  width: 100%;
`;


const productsPrice=[
  {
    discount:"none",
    coupon:"none",
    event:"none",
    total:"39,000"
  },
]

interface Product {
  id:number;
  // id: string;
  title: string;
  price: string;
  category: string;
  image: string;
}

// 마이페이지
export default function Detail() {
  const { index } = useParams();
  const numericIndex = index ? Number(index) : null; 
  const [product, setProduct] = useState<Product | null>(null);
  const {cartItems,addCart}=useStoreCart();
  const addItem=useStore(state=>state.addItem);
  const isClicked=cartItems.some(item => item.id === numericIndex);


  useEffect(() => {

    if (numericIndex === null) {
      console.error("Invalid product index.");
      return; // `index`가 유효하지 않으면, 데이터를 불러오지 않고 종료
    }
    
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Product>(`https://fakestoreapi.com/products/${numericIndex}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [numericIndex]);

  if (!product) {
    return(
        <>
          <Block></Block>        
          <LoaderComponent/>
        </>
    );
  }

  const handleCartClick=()=>{
    const Item=product;
    console.log(isClicked)
    if(isClicked){
      console.log('이미 장바구니에 담겼습니다.')
    }
    else{
      addCart(Item);
      addItem();
    }
  }

  const selectedCategory=product.category;
  

    return (
      <DWrapper>
        <Block></Block>
        <DeatailHeader to="/category">
          <img src="/detaildata/back_arrow.svg"/>
          <Back>돌아가기</Back>
        </DeatailHeader>
        <ItemDiv>
          <div style={{height:'600px',width:'40%',display:'flex',justifyContent:'center'}}>
            <ItemImage src={product.image}/>
          </div>
          <ItemInfo>
            <Info style={{marginTop:0}}>Product Info</Info>
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

          <Info style={{marginTop:'30px'}}>Price Info</Info>
          {productsPrice.map((item,index)=>
            <InfoTextDiv key={index} style={{border:'none',height:'40%'}}>
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
                <PurchaseBtn onClick={handleCartClick}>장바구니</PurchaseBtn>    
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
          <DetailSliderComp categoryprops={selectedCategory}/>
         </RecommendedItemDiv>
      </DWrapper>
    )
  }
  