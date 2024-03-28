import styled from 'styled-components';
import { Link } from "react-router-dom";


export const Wrapper = styled.div`
width: 100%;
height: 100vh; /* 전체 뷰포트 높이를 차지하도록 변경 */
display: flex;
justify-content: center;
align-items: center; 
flex-direction: column;
  

`;

export const Title = styled.h1`
color: #7c9def;
font-family: "Poppins-ExtraBold", sans-serif;
font-size: 30px; 
font-weight: 800;
display: flex;
justify-content: center;

margin: 0;
`;

export const Step = styled.div`
display: flex;
justify-content: center;
width:100%;
height:100px;
align-items: center;
padding-top:10px;
margin-bottom:-10px;

`;

export const One = styled.div`
flex-direction: column;
margin-right:10px;

`;


export const CheckCircle= styled.p`
border-radius: 50%;
width: 40px;
height: 40px; 
background: #A7BCEF;
box-shadow: 0px 0px 15px 0px rgba(31, 31, 31, 0.2);
position: absolute;
margin:0px ;
 
`;

export const Check= styled.img`
position: relative;
color: #FFFFFF;
width:25px;
height:25px;
border-radius: 50%;
margin: 6px 12px 33px 7px;
padding-bottom:1px;
`;

export const Two = styled.div`
margin:0 10px;

`;

export const BlueCircle= styled.p`
border-radius: 50%;
width: 40px;
height: 40px; 
background: #7C9DEF;
box-shadow: 0px 0px 15px 0px rgba(31, 31, 31, 0.2);
position: absolute;
margin:0 0px 0 10px;
 
`;


export const Numtwo= styled.p`
position: relative;

color: #ffffff;
text-align: center;
font-family: "Pretendard-Regular", sans-serif;
font-size: 24px;
font-weight: 400;

border-radius: 50%;
margin:4px 16px 17px 23px;
`;

export const Stepname = styled.span`
color: #7c9def;
text-align: center;
font-family: "Pretendard-Medium", sans-serif;
font-size: 12px;
font-weight: 500;
white-space:nowrap;
margin-left:9.5px;



`;

export const Thr = styled.div`
margin-right:10px;
 
`;

export const WhiteCircle= styled.p`

background: #ffffff;
border-radius: 50%;
width: 40px;
height: 40px;
box-shadow: 0px 0px 15px 0px rgba(31, 31, 31, 0.2);
position: absolute;
margin-top:-5px;
margin-left:13px;
`;

export const Numthr= styled.p`
position: relative;

color: #484545;
text-align: center;
font-family: "Pretendard-Regular", sans-serif;
font-size: 24px;
font-weight: 400;

border-radius: 50%;
margin: 0px 0px 30px 26px;
`;

export const Blue = styled.h3`
background: #7C9DEF;
border-radius: 50%;
width: 4px;
height: 4px;
box-shadow: 0px 0px 15px 0px rgba(31, 31, 31, 0.2);
margin: 0  3px 30px 2px;

`;
export const Gray = styled.h3`
background: #D9D9D9;
border-radius: 50%;
width: 4px;
height: 4px;
box-shadow: 0px 0px 15px 0px rgba(31, 31, 31, 0.2);
margin: 0  3px 30px 2px;

`;

export const Main= styled.div`
display: flex;
justify-content: center;
flex-direction: column;
height: 400px;
align-items: left;

width:420px;
`;
export const MainTitle= styled.h3`
color: #000000;

  font-family: "Pretendard-Bold", sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  margin: 10px 0 0 0; 
 display:flex;
 justify-content: left;
align-items: left;
 padding-left:10px; 

`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin:0px;
box-sizing: border-box;
width:600px;

`;



export const IdLabel =styled.div`
display: flex;
justify-content: space-between;
width:400px;
`;


export const Label =styled.div`
display: flex;
justify-content:left;
width:400px;
`;
export const GetLabel =styled.h2`
color: #000000;
font-family: "Pretendard-Medium", sans-serif;
align-items: left;
font-size: 16px;
font-weight: 500;
margin:18px 0 5px 5px;

`;

export const Required =styled.h2`
color: #3D5AF1;
font-family: "Pretendard-Medium", sans-serif;
align-items: left;
font-size: 16px;
font-weight: 500;
margin:10px 0px 0px 2px;

`;
export const IdInput= styled.input`
background: #ffffff;
border-radius: 11px;
border-style: solid;
border-color: #b4b4b4;
border-width: 1px;
width: 250px;
height: 35px;

color: #bbbbbb;
text-align: left;
font-family: "Pretendard-Light", sans-serif;
font-size: 12px;
font-weight: 300;
padding-left:10px;
margin-right:10px;
`;

export const Input= styled.input`
background: #ffffff;
border-radius: 11px;
border-style: solid;
border-color: #C2C2C2;
border-width: 1px;
width: 390px;
height: 35px;

color: #bbbbbb;
text-align: left;
font-family: "Pretendard-Light", sans-serif;
font-size: 12px;
font-weight: 300;
padding-left:10px;
`;



export const Checkbtn = styled.button`
 
background-color: #678ef2;
border-color: #678ef2;
color:#ffffff;

  border-width: 2px;
  border-radius: 10px;
  border-style: solid;
  width: 150px;
  height: 38px;

  text-align: center;
  font-family: "Pretendard-SemiBold", sans-serif;
  font-size: 13px;
  font-weight: 600;
  margin:0px 0 0 0px;

  text-decoration : none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0 10px;
  
  cursor: pointer; // 마우스 오버 시 커서 변경

  transition: background-color 0.2s ease, border-color 0.2s ease; /* 배경색과 테두리 색상 동시에 전환 */
  &:hover {

  background: #ffffff; // 호버 시 배경색 변경
  color: #678ef2;
border-color: #678ef2;
opacity:0.5;

  }

`;


export const Nextbtn = styled(Link)`
 
background-color: #678ef2;
  border-radius: 10px;
 border:none;
 border-style: solid;
 border-color: #678ef2;
 border-width: 2px;
  width: 200px;
  height: 40px;
  color: #ffffff;
  text-align: center;
  font-family: "Pretendard-SemiBold", sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin:10px 0 0 0px;

  text-decoration : none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0 10px;
  
  cursor: pointer; // 마우스 오버 시 커서 변경

  transition: background-color 0.5s ease, border-color 0.5s ease; /* 배경색과 테두리 색상 동시에 전환 */
  &:hover {
    background-color: #ffffff;
 // 호버 시 배경색 변경
 border-style: solid;
  border-width: 2px;
    border-color: #7C9DEF;
    color:#678ef2;
  }

`;