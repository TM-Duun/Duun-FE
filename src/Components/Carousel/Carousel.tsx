import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styled from "styled-components";
import { MainDetailBtn,Span1,Span2 } from "./CarouselStyles";

const CarouselContainer = styled.div`
  /* .carousel .slide {
    border-radius: 0 0 20px 20px;
  } */
  border-radius: 0 0 20px 20px;
  overflow: hidden; 
`;


const ImgText=styled.span`
    position: absolute;
    font-family: 'pretendard';
    font-size: 38px;
    font-weight: bold;
    width: 80%;
    text-align: left;
    line-height: 50px;
    top: 15%;
    left: 20%;
`;
export default function MyCarousel(){

  return (
    <CarouselContainer>
        <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            useKeyboardArrows={true}
            dynamicHeight={false}
        >
        <div>
            <img src="/homedata/main.png" alt="Banner 1" />
            <ImgText>
                스타일까지 챙긴<br/>
                <Span1>트랜디한 셋업 23/24 FW</Span1><br/>
                <Span2>무료 배송 + ~20% 쿠폰</Span2><br/>
            </ImgText>
            <MainDetailBtn>자세히 보기</MainDetailBtn>
        </div>
        <div>
            <img src="/homedata/main2.png" alt="Banner 2" />
        </div>
        <div>
            <img src="/homedata/main3.png" alt="Banner 2" />
        </div>
        </Carousel>
    </CarouselContainer>
  );
}


