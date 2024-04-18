import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Wrapper= styled. div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin : 0;
  padding : 0;
`;

export const Signin = styled.div`
  width : 400px;
  height : 200px;
  display: flex;
  flex-direction: column;
  margin-bottom : 50px;
`;

export const Title = styled.h1`
  color: #7c9def;
  font-family: "Poppins", sans-serif;
  font-size: 52px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Idpw =styled.p`
  color: black;
  font-family: "Pretendard", sans-serif;
  align-items: left;
  font-size: 16px;
  font-weight: 500;
  margin: 15px 0 10px 0;
`;

export const SiInput= styled.input`
  border-radius: 10px;
  border : 1px solid #b4b4b4;
  width: 400px;
  height: 40px;
  color: black;
  text-align: left;
  font-family: "Pretendard", sans-serif;
  font-size: 12px;
  font-weight: 300;
  padding-left: 10px;

  &:focus {
    outline: 1.5px solid #AEC5FF;
  }
`;

export const Signup = styled.div`
  width : 400px;
  height : auto;
  display: flex;
  justify-content: center;
  margin-bottom:30px;
  gap : 30px;
`;


export const Question = styled.span`
  color: #7d7d7d;
  font-family: "Pretendard", sans-serif;
  font-size: 12px;
  font-weight: 500;
`;

export const Signupbtn = styled(Link)`
  display: flex;
  color: #7c9def;
  font-family: "Pretendard", sans-serif;
  font-size: 12px;
  font-weight: 500;
  margin-right:10px;
  text-decoration: none;

  &:hover {
      cursor : pointer;
      text-decoration: underline;
  }
`;

export const Signinbtn = styled.div`
  width : 400px;
  min-height : 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap : 20px;
`;

export const Loginbtn = styled.div`
  width: 100%;
  height: 50px;
  background: #7c9def;
  color: #ffffff;
  border-radius: 10px;
  border : none;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Pretendard", sans-serif;
  letter-spacing: 2px;
  font-size: 24px;
  font-weight: 500;

  &:hover {
    cursor : pointer;
    background-color : #7592DD;
  }
`;

export const Kakaobtn= styled.button`
  width: 100%;
  height: 50px;
  background: #fee500;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  font-size: 20px;
  font-weight: 500;
  gap : 15px;

  border: none;
  text-decoration : none;

  &:hover {
    background-color: #F0D800;
    cursor : pointer;
  }
`;

export const KakaoName = styled.p`
  font-size : 18px;
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  color : black;
  letter-spacing: 1px;
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
  width: 25px;
  height:25px;
  fill: #000000;
`;

export const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;