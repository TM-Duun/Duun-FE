import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top :10vh;
    height : 250vh;
    display : flex;
    flex-direction: column;
    padding-left:200px; 
    padding-right: 200px;
    box-sizing: border-box;
`;

export const Main1= styled.div`
    width: 100%;
    display : flex;
    flex-direction: column;
    justify-content: center;
`;

export const Block = styled.div`
    width : 100%;
    height : 80px;
    margin : 0;
    padding : 0;
    background-color : transparent;
`;
export const MainImgDiv = styled.div`
    position:relative;
`;

export const MainImg=styled.img`
>>>>>>> c6cede611a92721624c72ea95cc59a773b56af12
    object-fit: cover;
    border-radius: 0 0 20px 20px;
    height: 100%;
    width: 100%;
    &:hover {
        cursor : pointer;
    }
`;
export const MainImgText=styled.span`
    position: absolute;
    font-family: 'pretendard';
    font-size: 38px;
    font-weight: bold;
    width: 100%;
    top: 15%;
    left: 20%;
`;
export const MainDetailBtn=styled.button`
    position: absolute;
    top: 70%;
    left:20%;
    border: none;
    border-radius:20px;
    height: 40px;
    width: 100px;
    box-shadow : 0px 0px 20px rgba(0, 0, 0, 0.1);
    &:hover {
        cursor : pointer;
    }
`;

export const Main2 = styled.div`
    font-family: 'Poppins';
    padding-top:60px
`;

export const NewDiv=styled.div`
    display:flex;
    flex-direction: row;
`;

export const New=styled.span`
    font-weight: 700;
    font-size:60px
`;
export const NewText=styled.h5`
    font-family: 'pretendard';
    margin-top: 0px;
    margin-bottom: 30px;
    white-space: nowrap;

`;
export const Details=styled(Link)`
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 10px;
    text-decoration: none;
    color:black;
`;

export const Btns=styled.div`
    padding-top: 30px;
    display: flex;
`;
export const Btn=styled.button`
    width: 90px;
    height: 40px;
    margin-right: 10px;
    font-weight: 600;
    border: none;
    background-color: #F6F6F6;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    &:hover {
        cursor : pointer;
        color: #3D5AF1;
        background-color: #A4B9EF;
    }
 `;

export const BtnImg = styled.img `
    width : 20px;
    height : 20px;
    margin : 0;
    object-fit : contain;
`;

export const ImgRowDiv = styled.div`
    display : flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 300px;
    margin-top: 40px;
    gap: 50px;
    /* border: 1px solid black; */
`;

export const ImgDiv=styled.div`
    margin-top:30px;
    width: 250px;
    height: 300px;
    border-radius: 15px;
    background-color: #F6F6F6;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const Img=styled.img`
    width: 80%;
    height: 90%;
    &:hover {
        cursor : pointer;
    }
`;
export const HeartImg=styled.img`
    margin : 0;
    object-fit : contain;
    right: 15px;
    width: 30px;
    height: 30px;
    top:15px;
    position: absolute;
    &:hover {
        cursor : pointer;
    }
`;
export const Main3=styled.div`
    padding-top: 50px;
    display: flex;
    justify-content: space-between;
    font-family: 'Poppins';
`;
interface CategoryImgProps{
    src:string;
}
export const CategoryImg=styled.div<CategoryImgProps>`
    width: 47%;
    height: 300px;
    border-radius: 15px;
    margin-top:20px;
    background-image: url(${props=>props.src});
    background-size: cover;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    &:hover {
        cursor : pointer;
    }
`;
export const CategoryText=styled.div`
    font-weight: 600;
    letter-spacing: 10px;
`;

export const Main4=styled.div`
    padding-top: 50px;
    display: flex;
    justify-content: space-between;
    height: 400px;
`;
export const CouponImg=styled.img`
    width: 55%;
    border-radius: 20px 0 0 20px;

`;
export const Download=styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    border-radius: 0 20px 20px 0;
`;
export const Coupon=styled.div`
    width : 100%;
    height: 50%;
    display: flex;
<<<<<<< HEAD
    flex-direction: row;
=======

>>>>>>> 27313218777125add9fe653474cf022e0d71ad1f
`;
export const Coupon1=styled.div`
    width: 80%;
    background-color: #F6F6F6;
    justify-content: left;
    align-items: center;
    display: flex;
`;
export const Coupon2=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 2px dashed white;
    width: 20%;
    background-color: #F6F6F6;
    border-radius: 0 20px 20px 0 ;
    &:hover {
        cursor : pointer;
    }
`; 
export const CouponText=styled.p`
    padding-left: 40px;
    font-family: 'Pretendard';
    font-size: 24px;
    line-height: 40px;
    white-space: nowrap;
`;
export const Span1=styled.span`
    color: red;
    font-weight: 700;
`;
export const Span2=styled.span`
    font-weight: 700;
    position: relative;
`;
export const Span3=styled.span`
    font-size: 12px;
    position: absolute;
    color: #868686;
`;
export const Line=styled.span`
    display:block;
    width: 95%;
    height: 0.5px;
    background-color:#AFAFAF;
`;

export const ChatBotDiv=styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 80px; 
    bottom: 40%; 
    justify-content: center;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
`;
export const ChatBotIcon = styled.div`
    background-color: #A7BCEF;
    width: 90px;
    height: 90px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow : 0px 0px 20px rgba(0, 0, 0, 0.1);
    img{
        height: auto;
        width:90%;
    }
`;
export const ChatBotText=styled.span`
    font-family: 'Pretendard';
    font-size: 12px;
    white-space: nowrap;
`;
export const ScrollToTopBtn=styled.button`
    display: flex;
    position:fixed;
    right:80px;
    bottom:10%;
    width: 60px;
    height: 60px;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    z-index: 200;
    &:hover {
        cursor : pointer;
    }
`;