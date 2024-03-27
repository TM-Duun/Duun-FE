import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Wrapper= styled. div`
width: 100%;
height: 100vh; /* 전체 뷰포트 높이를 차지하도록 변경 */
display: flex;
flex-direction: column; /* 자식 요소들이 세로 방향으로 정렬되도록 변경 */
justify-content: center; /* 세로 방향 가운데 정렬 */
align-items: center; /* 가로 방향 가운데 정렬 */

`; 
export const Signin = styled.div`
display: flex;
flex-direction: column;
margin-bottom:50px;

`;


export const Title =styled.h1`
color: #7c9def;
font-family: "Poppins-Black", sans-serif;
font-size: 52px;
font-weight: 800;
display: flex;
justify-content: center;
margin:0px;

`;

export const Idpw =styled.h2`
color: #000000;
font-family: "Pretendard-Medium", sans-serif;
align-items: left;
font-size: 16px;
font-weight: 500;
margin:15px 0 5px 5px;

`;

export const Input= styled.input`
background: #ffffff;
border-radius: 11px;
border-style: solid;
border-color: #b4b4b4;
border-width: 1px;
width: 400px;
height: 40px;

color: #bbbbbb;
text-align: left;
font-family: "Pretendard-Light", sans-serif;
font-size: 12px;
font-weight: 300;
padding-left:10px;
`;



export const Signup = styled.div`
display: flex;
margin-bottom:30px;

`;


export const Question = styled.span`
display: flex;

color: #7d7d7d;
font-family: "Pretendard-Medium", sans-serif;
font-size: 12px;
font-weight: 500;
margin-right:30px;
`;

export const Signupbtn = styled(Link)`
display: flex;

color: #7c9def;
font-family: "Pretendard-Medium", sans-serif;
font-size: 12px;
font-weight: 500;
margin-right:10px;


&:hover {
    cursor : pointer;
}
`;

export const Signinbtn = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
margin-bottom:80px;
`;

export const Loginbtn = styled(Link)`
background: #7c9def;
color: #ffffff;
width: 400px;
height: 50px;
border-radius: 11px;
display: flex;
justify-content: center;
align-items: center;
padding:0 10px;
margin-bottom:10px;

font-family: "Pretendard-Medium", sans-serif;
font-size: 20px;
font-weight: 500;

border: none;
text-decoration : none;

`;

export const Kakaobtn= styled.button`
color: #000000;
background: #fee500;
width: 420px;
height: 50px;
border-radius: 11px;
padding:0 10px;

display: flex;
justify-content: center;
align-items: center;
font-family: "Pretendard-Medium", sans-serif;
font-size: 20px;
font-weight: 500;

border: none;
text-decoration : none;

`;

export const Eye = styled.img`
display: flex;

width: 25px;
  height: 20px;
  fill: #000000;
  margin-top:-32px;
  margin-left:360px;
  `;

export const Kakaoicon= styled.img`
display: flex;

width: 25px;
  height:25px;
  fill: #000000;
  margin-top:-37px;
  margin-left:120px; 
`;

export const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;
