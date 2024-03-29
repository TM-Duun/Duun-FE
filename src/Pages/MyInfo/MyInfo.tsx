import styled from "styled-components";
import MyInfoForm from "../../Components/MyInfoForm/MyInfoForm";
import { Bean, MiBottom, MiCircle, MiLine, MiTitle, MiTop } from "./MyInfoStyles";

export const MiWrapper = styled.div`
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
    <Bean>
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
    </Bean>
  )
}
