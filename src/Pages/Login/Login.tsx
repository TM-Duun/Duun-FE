import { useState } from "react";

import { Wrapper,Title,Signin, Idpw,Input,Eye,Signup,Question,Signupbtn,Signinbtn,Loginbtn,Kakaobtn,Kakaoicon } from "./LoginStyles";
import kakaoicon from '/kakaoicon.svg';

// 로그인 페이지
export default function Login() {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  //const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      //변경을 받아들인다.
      const {
          target: { name, value },
        } = e;
       if (name === "id") {
          setID(value);
        } else if (name === "password") {
          setPassword(value);
        }
      };
//  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
 
    //  e.preventDefault();
      //setError("");

   //   try{
      //계정을 생성하고 
      //유저의 이름 지정             
 //     }catch (e){
      //에러    
 //     }

 // };
 
return (
<Wrapper>
  <Signin>
  <Title>Duun</Title>
    <Idpw>아이디</Idpw>
      <Input
      onChange={onChange}
      name="id" 
      value={id}
      placeholder="아이디를 입력하세요"       
      type="text"
      required/>
      <Idpw>비밀번호</Idpw>
      <Input
      onChange={onChange}
      name="password" 
      value={password}
      placeholder="비밀번호를 입력하세요"       
      type="password"
      required>
       </Input>
       <Eye src="/eye.svg" />   

      </Signin>

  <Signup>
    <Question> 계정이 없으세요? </Question>
    <Signupbtn to="/SignUp1">
      회원가입
    </Signupbtn>
    </Signup>

  <Signinbtn>
    <Loginbtn to="/"> 로그인 </Loginbtn>
    <Kakaobtn to="/"> 카카오 로그인 </Kakaobtn>
    <Kakaoicon src={kakaoicon}/>
  </Signinbtn>
  </Wrapper>
)
}
