import { useState } from "react";
import MyInfoForm from "../../Components/MyInfoForm/MyInfoForm";
import { Bean, CIForm, CITitle, CIWrapper, CurrentId, CIBox, MiBottom, MiCircle, MiLine, MiTitle, MiTop, MiWrapper, CIInfo } from "./MyInfoStyles";
import './MyInfoScss.scss';

export default function MyInfo() {

  const [changeIdPopup, setChangeIdPopup] = useState(false);
  const [changePwdPopup, setChangePwdPopup] = useState(false);


  const toggleChangeIdPopup = () => {
    setChangeIdPopup(prev => !prev);
  };

  const toggleChangePwdPopup = () => {
    setChangePwdPopup(prev =>!prev);
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
          <MyInfoForm onIdChangePopup={toggleChangeIdPopup} onPwdChangePopup={toggleChangePwdPopup}/>
        </MiBottom>
      </MiWrapper>
      {changeIdPopup ? (
        <>
          <div className="overlay"></div>
          <CIWrapper>
            <CITitle>아이디 변경</CITitle>
            <CIForm>
              <CIBox>
                <CIInfo>현재 아이디 : </CIInfo>
                <CurrentId>duun0123</CurrentId>
              </CIBox>
              <CIBox>
                <CIInfo>변경 아이디 : </CIInfo>
                <input
                  className="newIdInput"
                  type="text"
                  placeholder="변경할 아이디 입력" />
              </CIBox>
            </CIForm>
            <div className="btnBox">
              <div className="CPcheckBtn">변경하기</div>
              <div className="CPcancelBtn" onClick={toggleChangeIdPopup}>취소하기</div>
            </div>
          </CIWrapper>
        </>
      ) : (
        null
      )}
      {changePwdPopup ? (
        <>
          <div className="overlay"></div>
          <div className="CPWrapper">
            <div className="CPTitle">비밀번호 변경</div>
            <form className="CPForm">
              <div className="CPBox">
                <p className="CPInfo">현재 비밀번호 : </p>
                <input 
                  className="CPInput" 
                  type="password" 
                  placeholder="현재 비밀번호 입력"
                   />
              </div>
              <div className="NPBox">
                <p className="CPInfo">변경 비밀번호 : </p>
                <input className="CPInput" type="password" placeholder="변경할 비밀번호 입력" />
              </div>
              <div className="NPConfirm">
                <p className="CPInfo">비밀번호 확인 : </p>
                <input className="CPInput" type="password" placeholder="변경할 비밀번호 입력" />
              </div>
            </form>
            <div className="btnBox">
              <div className="CPcheckBtn">변경하기</div>
              <div className="CPcancelBtn" onClick={toggleChangePwdPopup}>취소하기</div>
            </div>
          </div>
        </>
      ) : (
        null
      )}
    </Bean>
  )
}