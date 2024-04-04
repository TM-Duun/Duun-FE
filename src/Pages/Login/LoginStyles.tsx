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

export const Signin = styled.form`
  width : 400px;
  height : 200px;
  display: flex;
  flex-direction: column;
  margin-bottom : 50px;
`;

export const Title = styled.h1`
  color: #7c9def;
  font-family: "Poppins-Black", sans-serif;
  font-size: 52px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Idpw =styled.h2`
  color: black;
  font-family: "Pretendard-Medium", sans-serif;
  align-items: left;
  font-size: 16px;
  font-weight: 500;
  margin: 15px 0 10px 10px;
`;

export const SiInput= styled.input`
  border-radius: 10px;
  border : 1px solid #b4b4b4;
  width: 400px;
  height: 40px;

  color: black;
  text-align: left;
  font-family: "Pretendard-Light", sans-serif;
  font-size: 12px;
  font-weight: 300;
  padding-left:10px;
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
  font-family: "Pretendard-Medium", sans-serif;
  font-size: 12px;
  font-weight: 500;
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
  width : 400px;
  height : 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap : 10px;
`;

export const Loginbtn = styled.input`
  width: 100%;
  height: 50px;
  background: #7c9def;
  color: #ffffff;
  border-radius: 10px;
  border : none;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Pretendard-Medium", sans-serif;
  font-size: 20px;
  font-weight: 500;

  &:hover {
    cursor : pointer;
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
  font-family: "Pretendard-Medium", sans-serif;
  font-size: 20px;
  font-weight: 500;
  gap : 15px;

  border: none;
  text-decoration : none;

  &:hover {
    cursor : pointer;
  }
`;

export const KakaoName = styled.p`
  font-size : 20px;
  font-family: "Pretendard-Medium", sans-serif;
  font-weight: 500;
  color : black;
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