import { useState } from "react";
import MyInfoForm from "../../Components/MyInfoForm/MyInfoForm";
import { Bean, MiBottom, MiCircle, MiLine, MiTitle, MiTop, MiWrapper } from "./MyInfoStyles";

export default function MyInfo() {

  const [changeId, setChangeId] = useState(false);
  const [changePwd, setChangePwd] = useState(false);

  const toggleChangeId = () => {
    setChangeId(prev => !prev);
  };

  const toggleChangePwd = () => {
    setChangePwd(prev =>!prev);
  };

  return (
    <Bean>
      <MiWrapper>
        <MiTop>
          <MiCircle src="/circle.svg"/>
          <MiTitle>회원정보 수정</MiTitle>
          <MiLine></MiLine>
        </MiTop>
        <MiBottom>
          <MyInfoForm changeId={changeId} changePwd={changePwd} onIdChange={toggleChangeId} onPwdChange={toggleChangePwd}/>
        </MiBottom>
      </MiWrapper>
      {changeId ? (
        <CIWrapper>
          
        </CIWrapper>
      ) : (
        null
      )}
      {changePwd ? (
        <CPWrapper>

        </CPWrapper>
      ) : (
        null
      )}
    </Bean>
  )
}
