import { Wrapper, Container,EmailLabel,EmailInput,Label,Required,GetLabel,
        AddressLabel,PhoneLabel,PhoneInput,Sign,Checkbtn,Nextbtn,SignUpLastFormBox,AddressInputWrap,AddressInput1,AddressInput2,AddressContentInput} from "./SignUp3Styles";
import { useEffect, useState } from "react";
import  useScrollToTop  from '../../Hooks/Scroll/useScrollToTop';
import SignUpHeader from "../../Components/SignUp/SignUpHeader/SignUpHeader";
import { Bean } from "../Counsel/CounselStyles";
import { MainTitle } from "./SignUp1Styles";
import useStoreSignupInfo from '../../Store/userInfo';
import { useNavigate } from "react-router-dom";
import { AddressData, AddressObj } from "../../Types/Address/AddressData";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import axios from "axios";

declare global {
  interface Window { daum: any; }
}
  
// 회원가입 페이지
export default function SignUp3() {
  useScrollToTop();

  const open = useDaumPostcodePopup(postcodeScriptUrl);

  const [email, setEmail] = useState("");
  const [emailDomain, setEmailDomain] = useState(""); 
  const [phoneNum1, setPhoneNum1] = useState("");
  const [phoneNum2, setPhoneNum2] = useState("");
  const [phoneNum3, setPhoneNum3] = useState("");
  const [detailAddress, setDetailAddress] = useState(""); // 상세 주소를 위한 state
  const [ addressObj, setAddressObj ] = useState<AddressObj>({ zoneCode: '', areaAddress: '', townAddress: '' });
  const [userSiId, setUserSiId] = useState('');
  const [userSiname, setUserSiname] = useState('');
  const [siPassword, setSiPassword] = useState('');

  const { userId, username, password, resetUserInfo } = useStoreSignupInfo();  // 이 위치가 올바름

  useEffect(() => {
    setUserSiId(userId);
    setUserSiname(username);
    setSiPassword(password);
  }, [userId, username, password]);

  console.log(userSiId, userSiname, siPassword);
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //변경을 받아들인다.
    const { target: { name, value }, } = e;
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

  const onFinalizeSignUp = async () => {
    const completeEmail = `${email}@${emailDomain}`;
    const completePhone = `${phoneNum1}${phoneNum2}${phoneNum3}`;
    const fullAddress = `${addressObj.areaAddress} ${detailAddress}`;

    const userAllInfo = {
      userId: userSiId,
      userName: userSiname,
      password: siPassword,
      email: completeEmail,
      phoneNumber: completePhone,
      address: fullAddress
    };

    console.log(userAllInfo);

    try {
      const result = await axios.post('http://54.180.145.158:8080/users', userAllInfo);
      console.log(result.data);
      resetUserInfo();
      navigate('/SignUpComplete');
    } catch (error) {
      console.error('Signup failed:', error);
      // Optionally handle error, e.g., show error message
    }
  };

  const handleAddressComplete = (data: AddressData) => {
    const fullAddress = data.address;
    const zoneCode = data.zonecode;
    setAddressObj({
      zoneCode: zoneCode,
      areaAddress: fullAddress,
      townAddress: ''
    });
  };
      
  const onHandleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    open({ onComplete: handleAddressComplete });
  };
    
  return (
    <Bean>
      <Wrapper>
        <SignUpHeader />
        <SignUpLastFormBox>
          <MainTitle> 개인 정보를 입력해주세요 </MainTitle>
          <Container>
            <Label>
              <GetLabel>이메일</GetLabel>
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
              <Sign>@</Sign>
              <EmailInput
                onChange={onChange}
                name="emailDomain" 
                value={emailDomain}
                placeholder="직접입력"       
                type="text"
                required/>  
            </EmailLabel> 

            <Label>
              <GetLabel>전화번호</GetLabel>   
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
              <AddressInputWrap>
                <AddressInput1
                  type="text"
                  value={addressObj ? addressObj.zoneCode : ""}
                  readOnly/>
                <Checkbtn onClick={(e) => onHandleClick(e)}> 주소검색 </Checkbtn>
              </AddressInputWrap>
              <AddressInput2
                type="text"
                value={addressObj ? addressObj.areaAddress : ""}
                readOnly/>
              <AddressContentInput
                type="text"
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
                placeholder="상세 주소 입력"/>
            </AddressLabel> 
          </Container>
        </SignUpLastFormBox>
        <Nextbtn onClick={onFinalizeSignUp} > 완료 </Nextbtn>
    </Wrapper>
  </Bean>
  )
}
