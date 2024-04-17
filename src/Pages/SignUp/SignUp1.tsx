import { Wrapper, SignUpUseBox, MainTitle, Container, CheckboxWrap, RequiredCheckbox, OptionalCheckbox, CheckboxInput,AllCheckbox,Termbtn,Caution,Nextbtn, CheckboxExplain, CheckboxLabel, CheckLine} from "./SignUp1Styles";
import  { useState } from 'react';
import  useScrollToTop  from '../../Hooks/Scroll/useScrollToTop';
import SignUpHeader from "../../Components/SignUp/SignUpHeader/SignUpHeader";
import { Bean } from "../Counsel/CounselStyles";
import Term from "../../Components/Modal/Term/Term";
import { useNavigate } from "react-router-dom";


// 회원가입 페이지
export default function SignUp1() {
  useScrollToTop();

  const [allAccepted, setAllAccepted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [marketingAccepted, setMarketingAccepted] = useState(false);

  const [termPopup, setTermPopup] = useState(false);
  const [termSelect, setTermSelect] = useState(0);

  const navigate = useNavigate();
 
  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    if (name === "AllAccepted") {
      // "전체 동의" 체크박스 처리
      setAllAccepted(checked);
      setTermsAccepted(checked);
      setPrivacyAccepted(checked);
      setMarketingAccepted(checked);
    } else {

      // 개별 항목 처리
      if (name === "termsAccepted") {
        setTermsAccepted(checked);
      } else if (name === "privacyAccepted") {
        setPrivacyAccepted(checked);
      } else if (name === "marketingAccepted") {
        setMarketingAccepted(checked);
      }
  
      // "전체 동의" 체크박스 상태 업데이트를 위한 조건 확인
      // 여기서는 setState가 비동기로 작동하기 때문에 직후에 최신 상태를 바로 읽을 수 없습니다.
      // 따라서, 개별 체크 상태를 먼저 업데이트 한 후, 그 결과를 바탕으로 "전체 동의" 상태를 결정합니다.
      const isAllChecked = 
        (name === "termsAccepted" ? checked : termsAccepted) &&
        (name === "privacyAccepted" ? checked : privacyAccepted) &&
        (name === "marketingAccepted" ? checked : marketingAccepted);
  
      setAllAccepted(isAllChecked);
    }
  };

  const onTermPopup = (selectedTerm: number) => {
    if (!termPopup && selectedTerm !== undefined) {
      setTermSelect(selectedTerm);
    } else {
      setTermSelect(0);
    }
    setTermPopup(!termPopup);
  };

  const toHandleNext = () => {
    if (allAccepted || (termsAccepted && privacyAccepted)) {
      navigate('/signup/2');
    } else {
      alert("필수 약관에 동의해야 회원 가입을 진행할 수 있습니다.");
    }
  };

  return (
    <Bean>
      <Wrapper>
        <SignUpHeader />
        <SignUpUseBox>
          <MainTitle>약관동의 ( Duun 홈페이지 )</MainTitle>
          <Container>
            <CheckboxWrap>
              <CheckboxExplain>
                  <CheckboxInput
                  id="AllAccepted"
                  type="checkbox"
                  name="AllAccepted"
                  checked={allAccepted}
                  onChange={onCheck}/>
              <CheckboxLabel htmlFor="AllAccepted"></CheckboxLabel>
              <AllCheckbox> 전체 약관 동의 </AllCheckbox>
              </CheckboxExplain>
            </CheckboxWrap>

            <CheckLine></CheckLine>
    
            <CheckboxWrap>
              <CheckboxExplain>
                  <CheckboxInput
                    id="termsAccepted"
                    type="checkbox"
                    name="termsAccepted"
                    checked={termsAccepted}
                    onChange={onCheck}
                    required/>
                <CheckboxLabel htmlFor="termsAccepted"></CheckboxLabel>
                <RequiredCheckbox><span>[필수]</span> 이용 약관 동의 </RequiredCheckbox>
              </CheckboxExplain>
              <Termbtn onClick={() => onTermPopup(1)}>내용보기</Termbtn>
            </CheckboxWrap>

            <CheckboxWrap>
              <CheckboxExplain>
                  <CheckboxInput
                    id="privacyAccepted"
                    type="checkbox"
                    name="privacyAccepted"
                    checked={privacyAccepted}
                    onChange={onCheck}
                    required/>
                <CheckboxLabel htmlFor="privacyAccepted"></CheckboxLabel>
                <RequiredCheckbox><span>[필수]</span> 개인정보 수집, 이용 동의</RequiredCheckbox>
              </CheckboxExplain>
              <Termbtn onClick={() => onTermPopup(2)}> 내용보기 </Termbtn>
            </CheckboxWrap>

            <CheckboxWrap>
              <CheckboxExplain>
                  <CheckboxInput
                    id="marketingAccepted"
                    type="checkbox"
                    name="marketingAccepted"
                    checked={marketingAccepted}
                    onChange={onCheck}/>
                <CheckboxLabel htmlFor="marketingAccepted"></CheckboxLabel>
                <OptionalCheckbox>[선택] 쇼핑정보 수신 동의</OptionalCheckbox>
              </CheckboxExplain>
              <Termbtn onClick={() => onTermPopup(3)}> 내용보기 </Termbtn>
            </CheckboxWrap>
          </Container>
          <Caution>
            <p> * 필수항목에 동의하지 않으실 경우 서비스 가입이 불가합니다. </p>
            <p> * 선택항목에 동의하지 않으셔도 서비스 가입에 가능하나, 관련 서비스는 제공받으실 수 없습니다. </p>
          </Caution>
        </SignUpUseBox>
        <Nextbtn onClick={toHandleNext} > 다음 </Nextbtn>
      </Wrapper>
      { termPopup && <Term setTermPopup={setTermPopup} termSelect={termSelect}/>}
    </Bean>
  )
}
