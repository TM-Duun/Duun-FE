import { useState,useEffect } from "react";
import Carousel from "../../Components/Carousel/Carousel"
import React from "react";
import {Main1,New,NewText,Main2,Btns,Btn,Main3,CategoryImg,
  CategoryText,Main4, CouponImg, Download, Coupon, Coupon1, Coupon2, CouponText, Block,Span1,Span2,Span3,Line, BtnImg, NewDiv, Details, MainImgDiv, 
  ImgRowDiv, ChatBotIcon, ChatBotDiv, ChatBotText, ScrollToTopBtn} from "./HomeStyles"
  //????물어보기 
import HomeImg from "../../Components/Shared/HomeImg/HomeImg";
import styled from "styled-components";
import ChatBot from "../Chatbot/Chatbot";
import useStoreHeart from "../../Store/StoreHeartBadge";
import useStoreHome from "../../Store/StoreHome";

const btnItems = [
  {name:"HOME",src:"/homedata/home.svg"},
  {name:"NEW",src:"/homedata/new.svg"},
  {name:"COATS",src:"/homedata/coats.svg"},
  {name:"PANTS",src:"/homedata/pants.svg"},
  {name:"SWEAT",src:"/homedata/sweat.svg"},
];

const HWrapper = styled.div`
    min-height : 250vh;
    display : flex;
    flex-direction: column;
    width: 100%;
    padding : 0px 200px;
`;

const categoryItems =[
  {src:"/homedata/category.png",name:"BEAUTY"},
  {src:"/homedata/category.png",name:"ACCESSORIES"},
]

const coupon=[
  {name:"코트 카테고리", money:"10%", text:"할인!", duedate:"~2024. 12. 31"},
  {name:"팬츠 카테고리", money:"1000P", text:"할인!", duedate:"~2024. 09. 31"}
]

// 처음 main 화면 페이지
export default function Home() {
  const { selectedImageSet, setSelectedImageSet } = useStoreHome();
  const [isChatbotOpen,setIsChatbotOpen]=useState(false);
  const handleOpenChatbot=()=>setIsChatbotOpen(true);

  const [ScrollBtn,setScrollBtn]=useState(false);

  // scroll Y 좌표를 통한 맨 위로 보내는 버튼
  useEffect(()=>{
    const checkScroll=()=>{
      if(!ScrollBtn && window.scrollY > window.outerHeight* 2 / 3) {
        setScrollBtn(true);
    }else if(ScrollBtn && window.scrollY <= window.outerHeight* 2 / 3){
      setScrollBtn(false);
    }
    };

    window.addEventListener("scroll",checkScroll);
    return ()=>{
      window.removeEventListener("scroll",checkScroll);
    }
  },[ScrollBtn]);

  const scrollToTop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  };
  const {likedItems}=useStoreHeart();

  return (

    <HWrapper>
      <Block></Block>
      <Main1>
        <MainImgDiv>
          <Carousel/>
        </MainImgDiv>
      </Main1>
      <Main2>
        <NewDiv>
          <div>
            <New>New</New>
            <NewText>이번 달 신상품입니다.</NewText>
          </div>
          <Details to="/category">
            자세히 보기
            <BtnImg style={{width:"30px",height:"30px",marginLeft:"-5px"}} src="/homedata/small_arrow.svg"/>
          </Details>
        </NewDiv>
        <Btns>
          {btnItems.map((item,index) =>{
            return(
            <Btn key={index} onClick={() => setSelectedImageSet(index)}>
              {item.name}
              <BtnImg src={item.src}/>
            </Btn>
          )}
          )}
          <Btn style={{marginLeft:"auto", width:"40px",backgroundColor:"#DBE3F8"}}><BtnImg src="/homedata/down_arrow.svg"/></Btn>
        </Btns>
        <ImgRowDiv>
          {selectedImageSet.map((src,index) =>{
              const isLiked = likedItems.includes(index);
              return(
                <HomeImg
                  key={index}
                  index={index}
                  isLiked={isLiked}
                  Image={src}
                  />
              )
          })}
        </ImgRowDiv>
      </Main2>
      <Main3>
        {categoryItems.map((item,index) =>{
          return(
            <CategoryImg key={index} src={item.src}>
              <CategoryText>{item.name}</CategoryText>
            </CategoryImg>
          )
        })}
      </Main3>
      <Main4>
        <CouponImg src="/homedata/coupon.png"/>
        <Download>
          {coupon.map((item,index) =>{
            return(
              <React.Fragment key={index}>
                <Coupon>
                  <Coupon1>
                    <CouponText>{item.name}<br/>
                      <Span1>{item.money}</Span1>
                      <Span2>{item.text}</Span2><br/>
                      <Span3>{item.duedate}</Span3>
                    </CouponText>
                  </Coupon1>
                  <Coupon2><BtnImg style={{width:"25px",height:"25px"}} src="/homedata/download.svg"/></Coupon2>
                </Coupon>
                {index < coupon.length-1 && <Line/>}
              </React.Fragment>
            );
          })}
        </Download>
      </Main4>
    <ChatBotDiv onClick={handleOpenChatbot}>
      <ChatBotIcon>
        <img src="/homedata/chatbot.png"/>
      </ChatBotIcon>
      <ChatBotText>드우니 챗봇</ChatBotText>
    </ChatBotDiv>
    <ChatBot isOpen={isChatbotOpen} onClose={()=>setIsChatbotOpen(false)}/>
    {ScrollBtn &&(
      <ScrollToTopBtn onClick={scrollToTop}>
        <img src="/homedata/up_arrow.svg"/>
      </ScrollToTopBtn>
    )}
  </HWrapper>
  )
}