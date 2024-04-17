import { useState,useEffect } from "react";
import { Wrapper,Title,Signin,Idpw,Eye,Signup,Question,Signupbtn,Signinbtn,Loginbtn,Kakaobtn,Kakaoicon, SiInput, KakaoName } from "./LoginStyles";
import kakaoicon from '/kakaoicon.svg';
import { useNavigate } from 'react-router-dom';
import  useScrollToTop  from '../../Hooks/Scroll/useScrollToTop';
import useStoreLoginInfo from '../../Store/StoreLoginInfo';
import axios from "axios";

const REACT_APP_KAKAO_KEY='7c36cadb741b7df9fa562525463eb78c';


// 카카오 객체에 대한 타입 정의 확장
declare global {
  interface Window { 
    Kakao: any;
  }
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

  // 로그인시 zustand에 id정보 저장
  const setUserId = useStoreLoginInfo(state => state.setUserId);

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

const onHandleLogin = async (e: React.MouseEvent) => {
  e.preventDefault();
  const userLogin = {
    userId: id,
    password: password,
  };

  try {
    const result = await axios.post('http://3.35.52.219:8080/users/login', userLogin);
    console.log(result.data);
    navigate("/");
    // 여기에 로그인에 대한 post 요청
    setUserId(id);
  } catch (error) {
    console.log(error);
  }
};

// 카카오 로그인 처리 함수
function kakaoHandleLogin() {
  if (!sdkReady) {
    console.log('Kakao SDK is not ready yet.');
    return;
  }

  // 카카오 로그인 팝업창
  window.Kakao.Auth.login({
    success: (response: AuthSuccessResponse) => {
      console.log('로그인 성공', response);
      navigate('/LoginComplete'); // 로그인 성공 후 로그인 성공 페이지로 리다이렉트

      // 사용자 정보 가져오기
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (res: AuthSuccessResponse) => { 
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
    <Signin>
      <Title>Duun</Title>
      <Idpw>아이디</Idpw>
      <SiInput
        onChange={onChange}
        name="id" 
        value={id}
        placeholder="아이디를 입력하세요"       
        type="text"
        required/>
      <Idpw>비밀번호</Idpw>
      <SiInput
        onChange={onChange}
        name="password" 
        value={password}
        placeholder="비밀번호를 입력하세요"       
        type="password"
        required />
      <Eye src="/eye.svg" />   
    </Signin>
    <Signup>
      <Question>계정이 없으세요?</Question>
      <Signupbtn to="/signup/1">회원가입</Signupbtn>
    </Signup>

    <Signinbtn>
      <Loginbtn onClick={(e) => onHandleLogin(e)} >로그인</Loginbtn>
      <Kakaobtn onClick={kakaoHandleLogin} disabled={!sdkReady}>
        <Kakaoicon src={kakaoicon}/>
        <KakaoName>카카오 로그인</KakaoName>
      </Kakaobtn>
    </Signinbtn>
  </Wrapper>
)
}