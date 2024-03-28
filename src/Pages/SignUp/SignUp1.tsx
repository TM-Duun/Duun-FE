import { Wrapper,Step,Title,One,BlueCircle,Numone,Stepname,Gray,Two,WhiteCircle,Numtwo,Numthr,Thr
        , Main,MainTitle,Container, CheckboxLabel, RequiredCheckbox, OptionalCheckbox, CheckboxInput,AllCheckbox
      ,Termbtn,Caution,Nextbtn} from "./SignUp1Styles";
import  { useState } from 'react';
import  useScrollToTop  from '../../Hooks/Scroll/useScrollToTop';


// 회원가입 페이지
export default function SignUp1() {
  useScrollToTop();

  const [allAccepted, setAllAccepted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [marketingAccepted, setMarketingAccepted] = useState(false);
 
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

  return (
    <Wrapper>
      <Title> 회원가입 </Title>
      <Step>
       <One>   
        <BlueCircle />
        <Numone> 1 </Numone> 
        <Stepname> 이용약관 </Stepname>
       </One>
       <Gray/>
       <Gray/>
       <Gray/>
       <Two>
        <WhiteCircle />
        <Numtwo> 2 </Numtwo> 
        </Two>
       <Gray/>
       <Gray/>
       <Gray/>
       <Thr>      
        <WhiteCircle />
        <Numthr> 3 </Numthr>
         </Thr>
      </Step>
      <Main>
        <MainTitle> 약관동의 ( Duun 홈페이지 ) </MainTitle>
        <Container>
          
    
        <CheckboxLabel>
          <CheckboxInput
          type="checkbox"
          name="AllAccepted"
          checked={allAccepted}
          onChange={onCheck}/>
          <AllCheckbox> 전체 약관 동의 </AllCheckbox>
        </CheckboxLabel>
   
        <CheckboxLabel>
          <CheckboxInput
          type="checkbox"
          name="termsAccepted"
          checked={termsAccepted}
          onChange={onCheck}
        />
          <RequiredCheckbox>[필수] 이용 약관 동의 </RequiredCheckbox>
          <Termbtn  to = "/Term1"> 내용보기 </Termbtn>
        </CheckboxLabel>

        <CheckboxLabel>
          <CheckboxInput
          type="checkbox"
          name="privacyAccepted"
          checked={privacyAccepted}
          onChange={onCheck}
        />
          <RequiredCheckbox>[필수] 개인정보 수집, 이용 동의</RequiredCheckbox>
          <Termbtn to = "/Term2"> 내용보기 </Termbtn>

        </CheckboxLabel>

        <CheckboxLabel>
          <CheckboxInput
          type="checkbox"
          name="marketingAccepted"
          checked={marketingAccepted}
          onChange={onCheck}
        />
          <OptionalCheckbox>[선택] 쇼핑정보 수신 동의</OptionalCheckbox>
          <Termbtn  to = "/Term3"> 내용보기 </Termbtn>

        </CheckboxLabel>
        </Container>
        <Caution> * 필수항목에 동의하지 않으실 경우 서비스 가입이 불가합니다. </Caution>
        <Caution> * 선택항목에 동의하지 않으셔도 서비스 가입에 가능하나, 관련 서비스는 제공받으실 수 없습니다. </Caution>

      </Main>
      <Nextbtn to = "/SignUp2" > 다음 </Nextbtn>
</Wrapper>
  )
}
