import styled from "styled-components";
import { Block, CartContainer, CartGrid, CartHeader, Counter, HeaderText, Name, Image,Option, Price, Discount, Count, Btn, BtnDiv, Total, InvisibleSpace, DeleteBtn } from "./CartStyles";
import React, { useEffect, useState } from "react";
import useStoreCart from "../../Store/StoreCart";
import useStore from "../../Store/StoreCartBadge";

const CartWrapper=styled.div`
    display : flex;
    flex-direction: column;
    width : 100%;
    padding : 0px 200px;
    font-family: 'pretendard';
`;

export default function Cart() {
  const {cartItems,removeCart}=useStoreCart();
  const {removeItem}=useStore();

  // 모든 항목을 처음에는 체크된 상태로 초기화
  const [checkedItems, setCheckedItems] = useState(new Array(cartItems.length).fill(true)); 
  const [totalPrice, setTotalPrice] = useState(0);

  //checkItems에 따라 가격 변화
  useEffect(() => {
    const total=cartItems.reduce((acc, item,index) =>{
      const price=parseFloat(item.price); 
      return acc + (checkedItems[index] ? price : 0);
    },0);
    const formattedTotal = parseFloat(total.toFixed(2));
    setTotalPrice(formattedTotal);
  },[checkedItems,cartItems])

  const totalCount=cartItems.length;

  //맨위 체크박스 눌렀을 때를 감지하는 useState
  const [selectAll,setSelectAll]=useState(true);

  //맨 위 체크박스 변경 함수
  const handleCheckboxAll=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const isChecked = e.target.checked;
    setSelectAll(isChecked);
    setCheckedItems(checkedItems.map(() => isChecked));
  }

  //체크박스 변경 함수
  const handleCheckboxChange = (index:number)=>(e:React.ChangeEvent<HTMLInputElement>) => {
   const updatedCheckedItems = [...checkedItems];
   updatedCheckedItems[index] = e.target.checked;
   setCheckedItems(updatedCheckedItems);
   // 전체 체크박스가 true일 때 true 반환
   setSelectAll(updatedCheckedItems.every(Boolean));
  };

    return (

      <CartWrapper>
        <Block/>
        <CartHeader>
          <img src="/cartdata/circle.svg"/>
          <HeaderText>장바구니</HeaderText>
          <Counter>{totalCount}</Counter>
        </CartHeader>
        <CartContainer>
          <CartGrid>
              <input type="checkbox" checked={selectAll} onChange={handleCheckboxAll}/>
            <span>상품 내용</span>
            <span>판매가</span>
            <span>회원 할인</span>
            <span>수량</span>
          </CartGrid>
          {cartItems.map((item,index)=>
            <CartGrid key={index} style={{fontFamily:'Poppins'}}>
              <div>
                <input type="checkbox" checked={checkedItems[index]} onChange={ (e)=>handleCheckboxChange(index)(e)} />
              </div>
              <div style={{display:'flex'}}>
                  <Image src={item.image}></Image>
                <Name>
                  {item.title}<br/>
                  <Option>
                    옵션: {item.id}
                  </Option>
                </Name>
              </div>
              <Price>{item.price}</Price>
              <Discount>{item.price}</Discount>
              <Count>{item.price}</Count>
              <DeleteBtn onClick={() => {removeCart(item.id); removeItem();}}>X</DeleteBtn>
            </CartGrid>
          )}
        </CartContainer>
        <BtnDiv>
          <InvisibleSpace/>
          <Btn>주문 하기</Btn>
          <InvisibleSpace>
            <Total>
              {`$`+totalPrice}원
            </Total>
          </InvisibleSpace>
        </BtnDiv>
      </CartWrapper>
    )
  }
  