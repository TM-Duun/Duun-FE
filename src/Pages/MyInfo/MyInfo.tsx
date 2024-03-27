import styled from "styled-components"
import MyInfoForm from "../../Components/MyInfoForm/MyInfoForm";
import { MiBottom, MiCircle, MiLine, MiTitle, MiTop } from "./MyInfoStyles";


const MiWrapper = styled.div`
  width : 100vw;
  height : 100vh;
  margin : 0;
  padding : 0;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
`;

export default function MyInfo() {
  return (
    <MiWrapper>
      <MiTop>
        <MiCircle src="/circle.svg"/>
        <MiTitle>회원정보 수정</MiTitle>
        <MiLine></MiLine>
      </MiTop>
      <MiBottom>
        <MyInfoForm />
      </MiBottom>
    </MiWrapper>
  )
}
