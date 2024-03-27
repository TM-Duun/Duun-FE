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

margin:0;
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
export const BlueCircle= styled.p`
border-radius: 50%;
width: 40px;
height: 40px; 
background: #7c9def;
box-shadow: 0px 0px 15px 0px rgba(31, 31, 31, 0.2);
position: absolute;
margin:0 0px 0 0px;
 
`;

export const Numone= styled.p`
position: relative;
color: #FFFFFF;
text-align: center;
font-family: "Pretendard-Regular", sans-serif;
font-size: 24px;
font-weight: 400;
border-radius: 50%;
margin: 5px 0px 15px 0;
`;
export const Stepname = styled.span`
color: #7c9def;
text-align: center;
font-family: "Pretendard-Medium", sans-serif;
font-size: 12px;
font-weight: 500;
white-space:nowrap;



`;
export const Two = styled.div`
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
margin-left:12px;
`;

export const Numtwo= styled.p`
position: relative;

color: #484545;
text-align: center;
font-family: "Pretendard-Regular", sans-serif;
font-size: 24px;
font-weight: 400;

border-radius: 50%;
margin: 0px 15px 30px 26px;
`;

export const Thr = styled.div`
margin-right:10px;
 
`;


export const Numthr= styled.p`
position: relative;

color: #484545;
text-align: center;
font-family: "Pretendard-Regular", sans-serif;
font-size: 24px;
font-weight: 400;

border-radius: 50%;
margin: 0px 0px 30px 25px;
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

width:500px;
`;
export const MainTitle= styled.h3`
color: #000000;

  font-family: "Pretendard-Bold", sans-serif;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  margin:0px 0px 18px 0px; 
  padding-left:5px;

`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  margin:0px;
box-sizing: border-box;
border: solid #D9D9D9;
border-radius: 10px ;
width:500px;
`;

export const CheckboxLabel = styled.div`
  display: flex;
  cursor: pointer;
  margin-bottom: 20px;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width:450px;
  padding: 12px 0; // 상하 패딩 조정, 필요에 따라 변경 가능
  margin-bottom:0px;
`;
export const AllCheckbox = styled.span`
  padding-left: 25px;
  color: #000000;
  text-align: left;
  font-family: "Pretendard-SemiBold", sans-serif;
  font-size: 15px;
  font-weight: 600;
  margin-left:5px;
`;
export const RequiredCheckbox = styled.span`
 
  padding-left: 25px;
  color: #484545;
  text-align: left;
  font-family: "Pretendard-Medium", sans-serif;
  font-size: 15px;
  font-weight: 500;
  margin-left:5px;

`;


export const OptionalCheckbox = styled.span`
  padding-left: 25px;
  color: #484545;
  text-align: left;
  font-family: "Pretendard-Medium", sans-serif;
  font-size: 15px;
  font-weight: 500;
  margin-left:5px;

`;



export const Termbtn = styled(Link)`
 
  background: #ffffff;
  border-radius: 10px;
  border-style: solid;
  border-color: #678ef2;
  border-width: 2px;
  width: 80px;
  height: 33px;
  color: #678ef2;
  text-align: center;
  font-family: "Pretendard-SemiBold", sans-serif;
  font-size: 13px;
  font-weight: 600;
  margin:-3px 0 0 0px;

  text-decoration : none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0 10px;
  
  cursor: pointer; // 마우스 오버 시 커서 변경

  transition: background-color 0.2s ease, border-color 0.2s ease; /* 배경색과 테두리 색상 동시에 전환 */
  &:hover {
    background-color: #678ef2; // 호버 시 배경색 변경
    border-color: #ffffff;
    color:#ffffff;
    opacity:0.2;
  }

`;

export const CheckboxInput = styled.input`

    content: '';
    display: inline-block;
    width: 20px;
    height:20px;
    border-radius: 50%; 
    position: absolute;
    border: 2px solid black;
    background-color: blue;
  }

`;

export const Caution = styled.span`
color: #555555;
text-align: left;
font-family: "Pretendard-SemiBold", sans-serif;
font-size: 11px;
font-weight: 600;
margin:2px 0px 6px 0px; 
padding-left:5px;

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
  margin:0px 0 0 0px;

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
    border-color: #678ef2;
    color:#678ef2;
  }

`;