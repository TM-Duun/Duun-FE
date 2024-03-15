import { Wrapper,Step,Title,One,CheckCircle,BlueCircle,Check,Stepname
  ,Blue,Two,Numthr,Thr
        , Main,MainTitle,Container,EmailLabel,EmailInput,Label,Required,GetLabel,
        AddressLabel,PhoneLabel,PhoneInput,Sign,AddressInput,Input,Checkbtn,Nextbtn} from "./SignUp3Styles";
  import { useState } from "react";

// 회원가입 페이지
export default function SignUp3() {
  const [email, Getemail] = useState("");
  const [phonenum, GetPhonenum] = useState("");
  const [address, Getaddress] = useState("");
  //const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      //변경을 받아들인다.
      const {
          target: { name, value },
        } = e;
       if (name === "email") {
        Getemail(value);
        } else if (name === "phonenum") {
          GetPhonenum(value);
        } else if (name === "address") {
          Getaddress(value);
        }

      };
return (
  <Wrapper>
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
          name="email" 
          value={email}
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
          name="phonenum" 
          value={phonenum}
          type="text"
          required/>
          <Sign> - </Sign>

         <PhoneInput
          onChange={onChange}
          name="phonenum" 
          value={phonenum}
          type="text"
          required/>
          <Sign> - </Sign>
         
          <PhoneInput
          onChange={onChange}
          name="phonenum" 
          value={phonenum}
          type="text"
          required/>         
        </PhoneLabel>

          <Label>
           <GetLabel> 주소 </GetLabel>
           <Required>*</Required>

        </Label>

        <AddressLabel> 
        <AddressInput
          onChange={onChange}
          name="address" 
          value={address}
          type="text"
          required/>
          <Checkbtn> 주소검색 </Checkbtn>
       </AddressLabel> 
        <AddressInput
          onChange={onChange}
          name="address" 
          value={address}
          type="text"
          required/>
        
        <Input
          onChange={onChange}
          name="address" 
          value={address}
          type="text"
          required/>
      
        </Container>
      </Main>
      <Nextbtn to = "/SignUpComplete" > 회원가입 완료 </Nextbtn>
  </Wrapper>
  )
}
