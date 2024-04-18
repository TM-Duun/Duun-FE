import { Wrapper,Container,IdLabel,IdInput,Label,Required,GetLabel,Input,Checkbtn,Nextbtn, SignUpFormBox, PwdCheck} from "./SignUp2Styles";
import { useEffect, useState } from "react";
import  useScrollToTop  from '../../Hooks/Scroll/useScrollToTop';
import { Bean } from "../Counsel/CounselStyles";
import SignUpHeader from "../../Components/SignUp/SignUpHeader/SignUpHeader";
import { MainTitle } from "./SignUp1Styles";
import { useNavigate } from "react-router-dom";
import useStoreSignupInfo from '../../Store/userInfo';
import { useDebounce } from "../../Hooks/Debounce/useDebounce";

// 회원가입 페이지
export default function SignUp2() {
  useScrollToTop();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkpassword, setCheckPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const setUserInfo = useStoreSignupInfo((state) => state.setUserInfo);
  const [passwordCheck, setPasswordCheck] = useState<boolean>();
  const debouncedValue = useDebounce(checkpassword, 500);

  useEffect(() => {
    setPasswordCheck(password === checkpassword);
  }, [password, checkpassword]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //변경을 받아들인다.
    const { target: { name, value }, } = e;
    if (name === "id") {
       setId(value);
    } else if (name === "password") {
       setPassword(value);
    } else if (name === "checkpassword") {
       setCheckPassword(value);
    } else if (name === "username") {
       setUsername(value);
    }
  };

  const toHandleNext = () => {
    setUserInfo({ userId: id, username: username, password: password });
    navigate("/signup/3");
  }

return (
  <Bean>
    <Wrapper>
      <SignUpHeader />
      <SignUpFormBox>
        <MainTitle>회원 정보를 입력해주세요</MainTitle>
        <Container>
          <Label>
            <GetLabel>아이디</GetLabel>
            <Required>*</Required>
          </Label>
          <IdLabel> 
            <IdInput
              onChange={onChange}
              name="id" 
              value={id}
              placeholder="아이디를 입력하세요"       
              type="text"
              required/>
            <Checkbtn> 중복확인 </Checkbtn>
          </IdLabel> 
          <Label>
            <GetLabel>비밀번호</GetLabel>   
            <Required>*</Required>
          </Label>
          <Input
            onChange={onChange}
            name="password" 
            value={password}
            placeholder="비밀번호를 입력하세요"       
            type="text"
            required/>
          <Label>
            <GetLabel>비밀번호 확인</GetLabel>
            <Required>*</Required>
          </Label>
          <Input
            onChange={onChange}
            name="checkpassword" 
            value={checkpassword}
            placeholder="비밀번호를 다시 입력하세요"       
            type="text"
            required/>
          {passwordCheck ? null : <PwdCheck>비밀번호가 일치하지 않습니다.</PwdCheck>}
          <Label>
            <GetLabel>이름</GetLabel>
            <Required>*</Required>
          </Label>
          <Input
            onChange={onChange}
            name="username" 
            value={username}
            placeholder="이름을 입력하세요"       
            type="text"
            required/>
        </Container>
      </SignUpFormBox>
      <Nextbtn onClick={toHandleNext} > 다음 </Nextbtn>
    </Wrapper>
  </Bean>
  )
}
