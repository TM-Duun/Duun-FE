import { Wrapper,Step,Title,One,CheckCircle,BlueCircle,Check,Stepname
  ,Blue,Gray,Two,WhiteCircle,Numtwo,Numthr,Thr
        , Main,MainTitle,Container,IdLabel,IdInput,Label,Required,GetLabel,Input,Checkbtn,Nextbtn} from "./SignUp2Styles";
  import { useState } from "react";

// 회원가입 페이지
export default function SignUp2() {
  const [id, GetID] = useState("");
  const [password, GetPassword] = useState("");
  const [checkpassword, CheckPassword] = useState("");
  const [username, GetUsername] = useState("");
  //const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      //변경을 받아들인다.
      const {
          target: { name, value },
        } = e;
       if (name === "id") {
          GetID(value);
        } else if (name === "password") {
          GetPassword(value);
        } else if (name === "checkpassword") {
          CheckPassword(value);
        } else if (name === "username") {
          GetUsername(value);
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
        <BlueCircle />
        <Numtwo> 2 </Numtwo> 
        <Stepname> 회원정보 </Stepname>
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
        <MainTitle> 회원 정보를 입력해주세요 </MainTitle>
        <Container>
        <Label>
        <GetLabel> 아이디</GetLabel>
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
        <GetLabel> 비밀번호</GetLabel>   
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
          name="checkpasword" 
          value={checkpassword}
          placeholder="비밀번호를 입력하세요"       
          type="text"
          required/>

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
      </Main>
      <Nextbtn to = "/SignUp3" > 다음 </Nextbtn>
  </Wrapper>
  )
}
