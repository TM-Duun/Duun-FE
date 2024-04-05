import { useState,useEffect } from "react";
import Carousel from "../../Components/Carousel/Carousel"
import React from "react";
import {Main1,New,NewText,Main2,Btns,Btn,Main3,CategoryImg,
  CategoryText,Main4, CouponImg, Download, Coupon, Coupon1, Coupon2, CouponText, Block,Span1,Span2,Span3,Line, BtnImg, NewDiv, Details, MainImgDiv, 
  ImgRowDiv, ChatBotIcon, ChatBotDiv, ChatBotText, ScrollToTopBtn} from "./HomeStyles"

import HomeImg from "../../Components/Shared/HomeImg/HomeImg";
import styled from "styled-components";
import ChatBot from "../Chatbot/Chatbot";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
}

const btnItems = [
  {name:"HOME", endpoint: ["women's clothing"]},
  {name:"NEW", endpoint: ["jewelery"]},
  {name:"COATS",endpoint: ["electronics"]},
  {name:"PANTS",endpoint: ["jewelery"]},
  {name:"SWEAT",endpoint: ["men's clothing"]},
];
const btnSrc=[
  "/homedata/home.svg",
  "/homedata/new.svg",
  "/homedata/coats.svg",
  "/homedata/pants.svg",
  "/homedata/sweat.svg",
]

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
const Maintext=[
  [''],
  ['이달의 신상'],
  ['오늘의 코트'],
  ['오늘의 팬츠'],
  ['오늘의 스웨터']
]

// 처음 main 화면 페이지
export default function Home() {

  const [selectedCategory, setSelectedCategory] = useState<string>('NEW');
  // const { selectedImageSet, setSelectedImageSet } = useStoreHome();
  const [isChatbotOpen,setIsChatbotOpen]=useState(false);
  const [ScrollBtn,setScrollBtn]=useState(false);
  // const {likedItems}=useStoreHeart();
  const [selectedButton, setSelectedButton] = useState<number>(1);
  const [selectedName, setSelectedName] = useState('NEW');
  const [products, setProducts] = useState<Product[]>([]); // 상품 데이터를 저장할 상태

  useEffect(() => {
    // 상품 데이터를 가져오는 함수
    const fetchProducts = async () => {

      try {

        const selectedEndpoints = btnItems.find(item => item.name === selectedCategory)?.endpoint || [];
        const requests = selectedEndpoints.map(endpoint =>
          axios.get<Product[]>(`https://fakestoreapi.com/products/category/${encodeURIComponent(endpoint)}`)
        );

        const responses = await Promise.all(requests);
        const fetchedProducts = responses.flatMap(response => response.data.slice(0,4));
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryClick = (index: number) => {
    const category =btnItems[index];
    setSelectedCategory(category.name);
    setSelectedName(category.name);
  };

  useEffect(()=>{
    // scroll Y 좌표를 통한 맨 위로 보내는 버튼
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

  const handleOpenChatbot=()=>setIsChatbotOpen(true);

  const scrollToTop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  };

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
            <New>{selectedName}</New>
            <NewText>{Maintext[selectedButton]}</NewText>
          </div>
          <Details to="/category">
            자세히 보기
            <img style={{width:"30px",height:"30px",marginLeft:"-5px"}} src="/homedata/small_arrow.svg"/>
          </Details>
        </NewDiv>
        <Btns>
          {btnItems.map((item,index) =>{
            return(
            <Btn 
              key={index} 
              style={selectedButton ===index ?{backgroundColor:'#A4B9EF',color:'#3D5AF1'}:{}}
              onClick={() =>{ 
                handleCategoryClick(index)
                setSelectedButton(index);
                setSelectedName(item.name);
              }}
            >
              {item.name}
              <BtnImg URL={btnSrc[index]} 
                style={selectedButton ===index ?{
                  backgroundColor:'#3D5AF1'}:{}}
              />
            </Btn>
            )}
          )}
          <Btn style={{marginLeft:"auto", width:"40px",backgroundColor:"#DBE3F8"}}><img src="/homedata/down_arrow.svg"/></Btn>
        </Btns>
        <ImgRowDiv>
          {products.map((item,index) =>{
              return(
                <HomeImg
                  key={index}
                  index={item.id}
                  image={item.image}
                  name={item.title}
                  price={item.price}
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
                  <Coupon2><img style={{width:"25px",height:"25px"}} src="/homedata/download.svg"/></Coupon2>
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