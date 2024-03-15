import { Wrapper,Step,Title,One,BlueCircle,Numone,Stepname,Gray,Two,WhiteCircle,Numtwo,Numthr,Thr
        , Main,MainTitle,Container, CheckboxLabel, RequiredCheckbox, OptionalCheckbox, CheckboxInput,AllCheckbox
      ,Termbtn,Caution,Nextbtn} from "./SignUp1Styles";
import  { useState } from 'react';


// 회원가입 페이지
export default function SignUp() {
  const [AllAccepted, setAllAccepted] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [marketingAccepted, setMarketingAccepted] = useState(false);
 
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
            checked={AllAccepted}
            onChange={() => setAllAccepted(!AllAccepted)}/>
          <AllCheckbox> 전체 약관 동의 </AllCheckbox>
        </CheckboxLabel>
   
        <CheckboxLabel>
          <CheckboxInput
            type="checkbox"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}/>
          <RequiredCheckbox>[필수] 이용 약관</RequiredCheckbox>
          <Termbtn  to = "/Login"> 내용보기 </Termbtn>
        </CheckboxLabel>

        <CheckboxLabel>
          <CheckboxInput
            type="checkbox"
            checked={privacyAccepted}
            onChange={() => setPrivacyAccepted(!privacyAccepted)}/>
          <RequiredCheckbox>[필수] 개인정보 수집, 이용 동의</RequiredCheckbox>
          <Termbtn to = "/Login"> 내용보기 </Termbtn>

        </CheckboxLabel>

        <CheckboxLabel>
          <CheckboxInput
            type="checkbox"
            checked={marketingAccepted}
            onChange={() => setMarketingAccepted(!marketingAccepted)}/>
          <OptionalCheckbox>[선택] 쇼핑정보 수신 동의</OptionalCheckbox>
          <Termbtn  to = "/Login"> 내용보기 </Termbtn>

        </CheckboxLabel>
        </Container>
        <Caution> * 필수항목에 동의하지 않으실 경우 서비스 가입이 불가합니다. </Caution>
        <Caution> * 선택항목에 동의하지 않으셔도 서비스 가입에 가능하나, 관련 서비스는 제공받으실 수 없습니다. </Caution>

      </Main>
      <Nextbtn to = "/SignUp2" > 다음 </Nextbtn>
</Wrapper>
  )
}
