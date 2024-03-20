import styled from "styled-components";
import { Block, CartContainer, CartGrid, CartHeader, Counter, HeaderText, Name, Image,Option, Price, Discount, Count, Btn, BtnDiv, Total, InvisibleSpace } from "./CartStyles";

const CartWrapper=styled.div`
    display : flex;
    flex-direction: column;
    padding : 0px 200px;
    box-sizing: border-box;
    font-family: 'pretendard';
`;

const cartItems =[
  {name: "[Nike] Speed Runner rx212345j",price:"13,9000",
    discount:"0",count:"1",
    src:'/cartdata/cart_image1.png',
    option:"레드/270"
  },
  {name:"[Acne] Deep long jean hx12222",
  price:"6,9000",discount:"0",count:"1",
  src:'/cartdata/cart_image2.png',
  option:"레드/270"
}
]
// 장바구니
export default function Cart() {
    return (
      <CartWrapper>
        <Block></Block>
        <CartHeader>
          <img src="/cartdata/circle.svg"/>
          <HeaderText>장바구니</HeaderText>
          <Counter>0</Counter>
        </CartHeader>
          <CartContainer>
            <CartGrid>
              <input type="checkbox"></input>
              <span>상품 내용</span>
              <span>판매가</span>
              <span>회원 할인</span>
              <span>수량</span>
            </CartGrid>
            {cartItems.map((item,index)=>
              <CartGrid key={index} style={{fontFamily:'Poppins'}}>
                <div>
                  <input type="checkbox"></input>
                </div>
                <div style={{display:'flex'}}>
                  <Image src={item.src}></Image>
                  <Name>
                    {item.name}<br/>
                    <Option>
                      옵션: {item.option}
                    </Option>
                  </Name>
                </div>
                <Price>{item.price}</Price>
                <Discount>{item.discount}</Discount>
                <Count>{item.count}</Count>
              </CartGrid>
            )}
          </CartContainer>
          <BtnDiv>
            <InvisibleSpace/>
            <Btn>주문 하기</Btn>
            <InvisibleSpace>
              <Total>
                6,9000원
              </Total>
            </InvisibleSpace>
          </BtnDiv>
      </CartWrapper>
    )
  }
  