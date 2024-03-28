import { Wrapper,Step,Title,One,CheckCircle,BlueCircle,Check,Stepname
  ,Blue,Two,Numthr,Thr
        , Main,MainTitle,Container,EmailLabel,EmailInput,Label,Required,GetLabel,
        AddressLabel,PhoneLabel,PhoneInput,Sign,AddressInput,Input,Checkbtn,Nextbtn} from "./SignUp3Styles";
import{ GlobalStyle} from'../../Components/Login/InputFocus';
import {useEffect, useState } from "react";
import  useScrollToTop  from '../../Hooks/Scroll/useScrollToTop';

  declare global {
    interface Window { daum: any; }
  }
  
// 회원가입 페이지
export default function SignUp3() {
  useScrollToTop();

  const [email, setEmail] = useState("");
  const [emailDomain, setEmailDomain] = useState(""); 
  const [phoneNum1, setPhoneNum1] = useState("");
  const [phoneNum2, setPhoneNum2] = useState("");
  const [phoneNum3, setPhoneNum3] = useState("");
  const [postcode, setPostcode] = useState("");//우편번호 state
  const [address, setAddress] = useState("");//주소 state
  const [detailAddress, setDetailAddress] = useState(""); // 상세 주소를 위한 state
  const [isScriptLoaded, setIsScriptLoaded] = useState(false); // 스크립트 로딩 state

  //const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      //변경을 받아들인다.
      const {
          target: { name, value },
        } = e;
       if (name === "email") {
        setEmail(value);
        } else if (name === "emailDomain") { 
          setEmailDomain(value);
        } else if (name === "phoneNum1") {
          setPhoneNum1(value);
        } else if (name === "phoneNum2") {
          setPhoneNum2(value);
        } else if (name === "phoneNum3") {
          setPhoneNum3(value);
        } else if (name === "detailAddress") {
          setDetailAddress(value);
        }

      };

      useEffect(() => {
        // 이미 로드된 경우를 체크하는 것을 여기에서 진행합니다.
        if (window.daum && window.daum.Postcode) {
          setIsScriptLoaded(true);
          return;
        }
      
        // Kakao 우편번호 서비스 스크립트 로드
        const script = document.createElement('script');
        script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
        script.onload = () => {
          setIsScriptLoaded(true); // 스크립트 로드 완료시 상태 업데이트
        };
        document.head.appendChild(script);
      
        // 컴포넌트가 언마운트될 때 스크립트 제거
        return () => {
          document.head.removeChild(script);
        };
      }, []); // 종속성 배열이 비어 있으므로 마운트 시에만 실행됩니다.
      
      const openPostcode = () => {
        if (isScriptLoaded && window.daum && window.daum.Postcode) {
          new window.daum.Postcode({
            oncomplete: function(data:any) {
              setPostcode(data.zonecode); // 우편번호 설정
              setAddress(data.address); // 주소 설정
            }
          }).open();
        } else {
          alert("우편번호 서비스를 로드하는 중입니다. 잠시 후 다시 시도해주세요.");
        }
      };
      

  return (
    <Wrapper>
      <GlobalStyle /> 
      <Title> 회원가입 </Title>
        <Step>
          <One>   
            <CheckCircle />
            <Check src="/check.svg" />   
          </One>
          <Blue/>
          <Blue/>
          <Blue/>
          <Two>
            <CheckCircle />
            <Check src="/check.svg" />   
          </Two>
          <Blue/>
          <Blue/>
          <Blue/>
          <Thr>      
            <BlueCircle />
            <Numthr> 3 </Numthr>
            <Stepname> 개인정보입력 </Stepname>
          </Thr>
        </Step>
        <Main>
          <MainTitle> 개인 정보를 입력해주세요 </MainTitle>
          <Container>
          <Label>
          <GetLabel> 이메일</GetLabel>
          <Required>*</Required>
          </Label>
        
          <EmailLabel> 
          <EmailInput
            onChange={onChange}
            name="email" 
            value={email}
            placeholder="메일 주소를 입력하세요"       
            type="text"
            required/>
            <Sign> @ </Sign>

          <EmailInput
            onChange={onChange}
            name="emailDomain" 
            value={emailDomain}
            placeholder="직접입력"       
            type="text"
            required/>  
          </EmailLabel> 
       
          <Label>
            <GetLabel> 전화번호</GetLabel>   
            <Required>*</Required>

          </Label>

          <PhoneLabel>
          <PhoneInput
            onChange={onChange}
            name="phoneNum1" 
            value={phoneNum1}
            type="text"
            required/>
          <Sign> - </Sign>

          <PhoneInput
            onChange={onChange}
            name="phoneNum2" 
            value={phoneNum2}
            type="text"
            required/>
          <Sign> - </Sign>
         
          <PhoneInput
    onChange={onChange}
    name="phoneNum3" 
    value={phoneNum3}
    type="text"
    required/>      
          </PhoneLabel>

          <Label>
           <GetLabel> 주소 </GetLabel>
           <Required>*</Required>

          </Label>

          <AddressLabel> 
          <AddressInput
              type="text"
              value={postcode}
              readOnly // 우편번호는 자동으로 입력되므로 읽기 전용
            />
          <Checkbtn  onClick={openPostcode}> 주소검색 </Checkbtn>
          </AddressLabel> 
          <AddressInput
            type="text"
            value={address}
            readOnly // 주소는 자동으로 입력되므로 읽기 전용
            />
        
          <Input
            type="text"
            value={detailAddress}
            onChange={(e) => setDetailAddress(e.target.value)} // 상세 주소 입력을 위한 이벤트 핸들러
            placeholder="상세 주소 입력"
            />
        </Container>
      </Main>
      <Nextbtn to = "/SignUpComplete" > 회원가입 완료 </Nextbtn>
  </Wrapper>
  )
}
