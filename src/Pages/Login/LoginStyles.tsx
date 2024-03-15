import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Wrapper= styled. div`
width: 100%;
height: 440px;
position: relative;
display: flex;
justify-content: center;
align-items: center;


`; 
export const Signin = styled.div`
display: flex;
flex-direction: column;
position: absolute;
margin-top:-50px ;


`;


export const Title =styled.h1`
color: #7c9def;
font-family: "Poppins-Black", sans-serif;
font-size: 52px;
font-weight: 800;
display: flex;
justify-content: center;

margin:10px 0;

`;

export const Idpw =styled.h2`
color: #000000;
font-family: "Pretendard-Medium", sans-serif;
position: relative;
align-items: left;
font-size: 16px;
font-weight: 500;
margin:25px 0 5px 5px;

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

position: relative;
margin-top:310px;

`;


export const Question = styled.span`
display: flex;

color: #7d7d7d;
font-family: "Pretendard-Medium", sans-serif;
font-size: 12px;
font-weight: 500;
margin-right:40px;
`;

export const Signupbtn = styled(Link)`
display: flex;

color: #7c9def;
font-family: "Pretendard-Medium", sans-serif;
font-size: 12px;
font-weight: 500;


&:hover {
    cursor : pointer;
}
`;

export const Signinbtn = styled.div`
display: flex;
justify-content: center;

flex-direction: column;
position: absolute;
margin-top :480px;

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

export const Kakaobtn= styled(Link)`
color: #000000;
background: #fee500;
width: 400px;
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
