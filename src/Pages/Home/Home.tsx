import { useState,useEffect } from "react";
import {Main1,MainImg,MainImgText,New,NewText,Main2,Btns,Btn,ImgDiv,Img,Main3,CategoryImg,
  CategoryText,Main4, CouponImg, Download, Coupon, Coupon1, Coupon2, CouponText, Block,Span1,Span2,Span3,Line, BtnImg, NewDiv, Details, MainImgDiv, 
  MainDetailBtn, ImgRowDiv, HeartImg, ChatBotIcon, ChatBotDiv, ChatBotText, ScrollToTopBtn} from "./HomeStyles"
  //????물어보기 
import styled from "styled-components";
import ChatBot from "../Chatbot/Chatbot";

const btnItems = [
  {name:"HOME",src:"/homedata/home.svg"},
  {name:"NEW",src:"/homedata/new.svg"},
  {name:"COATS",src:"/homedata/coats.svg"},
  {name:"PANTS",src:"/homedata/pants.svg"},
  {name:"SWEAT",src:"/homedata/sweat.svg"},
];

const imgItems=[
  {src:"/homedata/small_Img.png"},
  {src:"/homedata/small_Img.png"},
  {src:"/homedata/small_Img.png"},
  {src:"/homedata/small_Img.png"},
];
const HWrapper = styled.div`
    min-height : 250vh;
    display : flex;
    flex-direction: column;
    padding : 0px 200px;
    box-sizing: border-box;
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
  const [isChatbotOpen,setIsChatbotOpen]=useState(false);
  const handleOpenChatbot=()=>setIsChatbotOpen(true);

  const [ScrollBtn,setScrollBtn]=useState(false);

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


  return (
    <div>
    <HWrapper>
      <Block></Block>
      <Main1>
        <MainImgDiv>
          <MainImg src="/homedata/main.png"/>
          <MainImgText>
            스타일까지 챙긴<br/>
            <Span3 style={{color:"black", fontSize:"30px",fontWeight:"600"}}>트랜디한 셋업 23/24 FW</Span3><br/>
            <Span3 style={{color:"black", fontSize:"17px",fontWeight:"500",marginTop:"20px"}}>무료 배송 + ~20% 쿠폰</Span3><br/>
          </MainImgText>
          <MainDetailBtn>자세히 보기</MainDetailBtn>
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
          {btnItems.map((item,index) =>
            <Btn key={index}>
              {item.name}
              <BtnImg src={item.src}/>
            </Btn>
          )}
          <Btn style={{marginLeft:"auto", width:"40px",backgroundColor:"#DBE3F8"}}><BtnImg src="/homedata/down_arrow.svg"/></Btn>
        </Btns>
        <ImgRowDiv>
          {imgItems.map((item,index) =>{
            return(
              <ImgDiv key={index}>
                <HeartImg src="/heart.svg"/>
                <Img src={item.src}/>
              </ImgDiv>
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
              <>
                <Coupon key={index}>
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
              </>
            );
          })}
        </Download>
      </Main4>
    </HWrapper>
    <ChatBotDiv>
      <ChatBotIcon onClick={handleOpenChatbot}>
        <img src="/homedata/chatbot.png"/>
      </ChatBotIcon>
      <ChatBot isOpen={isChatbotOpen} onClose={()=>setIsChatbotOpen(false)}></ChatBot>
      <ChatBotText>드우니 챗봇</ChatBotText>
    </ChatBotDiv>
    {ScrollBtn &&(
      <ScrollToTopBtn onClick={scrollToTop}>
        <img src="/homedata/up_arrow.svg"/>
      </ScrollToTopBtn>
    )}
    </div>
  )
}
