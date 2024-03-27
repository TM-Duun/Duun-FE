import { useState,useEffect } from "react";
import{ GlobalStyle} from'../../Components/Login/InputFocus';
import { Wrapper,Title,Signin,Idpw,Input,Eye,Signup,Question,Signupbtn,Signinbtn,Loginbtn,Kakaobtn,Kakaoicon } from "./LoginStyles";
import kakaoicon from '/kakaoicon.svg';
import { useNavigate } from 'react-router-dom';
import  useScrollToTop  from '../../Hooks/Scroll/useScrollToTop';

const REACT_APP_KAKAO_KEY='7c36cadb741b7df9fa562525463eb78c';


// 카카오 객체에 대한 타입 정의 확장
declare global {
  interface Window { Kakao: any; }
}

// 로그인 성공 및 실패에 대한 인터페이스 정의 
interface AuthSuccessResponse {
  access_token: string;
}
interface AuthFailResponse {
  error: string;
  error_description: string;
}

// 로그인 페이지
export default function Login() {
  useScrollToTop();
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  // SDK 로드 상태 관리
  const [sdkReady, setSdkReady] = useState(false);
  const navigate = useNavigate(); // useNavigate 훅 사용

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

 useEffect(() => {
  // 카카오 SDK 로드 및 초기화 함수
  
  function loadKakaoSDK() {
    if (window.Kakao && window.Kakao.isInitialized()) {
      // 이미 초기화되었다면 추가 로드 없이 준비 완료
      console.log('Kakao SDK already initialized.');
      setSdkReady(true);
    } else {
      const kakaoScript = document.createElement('script');
      kakaoScript.src = 'https://developers.kakao.com/sdk/js/kakao.js';
      document.head.appendChild(kakaoScript);

      kakaoScript.onload = () => {
        window.Kakao.init(REACT_APP_KAKAO_KEY); 
        setSdkReady(true);
      };
    }
  }

  loadKakaoSDK();
}, []);

// 카카오 로그인 처리 함수
function handleLogin() {
  if (!sdkReady) {
    console.log('Kakao SDK is not ready yet.');
    return;
  }

  window.Kakao.Auth.login({
    success: (response: AuthSuccessResponse) => {
      console.log('로그인 성공', response);
      navigate('/LoginComplete'); // 로그인 성공 후 로그인 성공 페이지로 리다이렉트

      // 사용자 정보 가져오기
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (res: any) => { 
          console.log('사용자 정보', res);
        },
        fail: (error: AuthFailResponse) => {
          console.error('사용자 정보 요청 실패', error);
        },
      });
    },
    fail: (err: AuthFailResponse) => {
      console.error(err);
    },
  });
}

 
return (
<Wrapper>
<GlobalStyle /> 
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
    <Loginbtn to="/LoginComplete"> 로그인 </Loginbtn>
    <Kakaobtn onClick={handleLogin} disabled={!sdkReady}> 카카오 로그인 </Kakaobtn>
    <Kakaoicon src={kakaoicon}/>
  </Signinbtn>
  </Wrapper>
)
}
