import { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import { AddressData, AddressObj } from "../../Types/Address/AddressData";
import { useNavigate } from "react-router-dom";
import { AddressNum, ChangeBtn, EmailDiv, ExtraAdMetaBox, ExtraAddressBox, ExtraAddressContainer, ExtraAddressContent, ExtraEmailBox, ExtraMetaBox, ExtraPhoneBox, MiCancelBtn, MiCheckContainer, MiContainer, MiExtraContainer, MiIdContent, MiMainBox, MiName, MiSaveBtn, PhoneDiv } from "./MyInfoFormStyles";

interface InFormProps {
  onIdChangePopup: () => void;
  onPwdChangePopup: () => void;
}

export const MyInfoForm: React.FC<InFormProps> = ({ onIdChangePopup, onPwdChangePopup }) => {

  const [ selectEmail, setSelectEmail ] = useState("naver.com");
  const open = useDaumPostcodePopup(postcodeScriptUrl);
  const [ addressObj, setAddressObj ] = useState<AddressObj>({ zoneCode: '', areaAddress: '', townAddress: '' });
  const navigate = useNavigate();

  const onChangeEmail = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setSelectEmail(e.target.value);
  };

  const handleAddressComplete = (data: AddressData) => {
    let fullAddress = data.address;
    let extraAddress = '';
    const zoneCode = data.zonecode;
    const localAddress = data.sido + ' ' + data.sigungu;
    if (data.addressType == 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
      }

      fullAddress = fullAddress.replace(localAddress, '');

      setAddressObj({
        zoneCode: zoneCode,
        areaAddress: localAddress,
        townAddress: fullAddress += (extraAddress !== '' ? `(${extraAddress})` : '')
      });
    }
  };

  const onHandleClick = () => {
    open({ onComplete: handleAddressComplete})
  };

  const onHandleMypage = () => {
    navigate('/mypage');
  }

  return (
    <>
      <MiContainer>
          <MiMainBox>
            <p>아이디</p>
            <MiIdContent>
              <p>duun0123</p>
              <ChangeBtn onClick={onIdChangePopup}>아이디 변경</ChangeBtn>
            </MiIdContent>
          </MiMainBox>
          <MiMainBox>
            <p>이름<span>*</span></p>
            <MiName>문규리</MiName>
          </MiMainBox>
          <MiMainBox>
            <p>비밀번호</p>              
            <ChangeBtn onClick={onPwdChangePopup}>비밀번호 변경</ChangeBtn>
          </MiMainBox>
      </MiContainer>
      <MiExtraContainer>
        <ExtraMetaBox>
          <p>휴대폰 번호<span>*</span></p>
          <ExtraPhoneBox>
            <PhoneDiv>010</PhoneDiv>
            <PhoneDiv>1234</PhoneDiv>
            <PhoneDiv>5678</PhoneDiv>
          </ExtraPhoneBox>
        </ExtraMetaBox>
        <ExtraAdMetaBox>
          <p>주소</p>
          <ExtraAddressContainer>
            <ExtraAddressBox>
              <AddressNum>{addressObj ? addressObj.zoneCode : "12345"}</AddressNum>
              <ChangeBtn onClick={onHandleClick}>주소지 변경</ChangeBtn>
            </ExtraAddressBox>
            <ExtraAddressContent>{addressObj ? addressObj.areaAddress : "201동 1205호" }</ExtraAddressContent>
            <ExtraAddressContent>{addressObj ? addressObj.townAddress : "인천 연수구 컨벤시아대로 116(송도동, 푸르지오월드마크)" }</ExtraAddressContent>
          </ExtraAddressContainer>
        </ExtraAdMetaBox>
          <ExtraMetaBox>
            <p>이메일</p>
            <ExtraEmailBox>
              <EmailDiv>duun0126</EmailDiv>
              @
              <label htmlFor="email">{selectEmail}</label>
              <select name="email" id="email" onChange={onChangeEmail} value={selectEmail}>
                <option value="naver.com">naver.com</option>
                <option value="gmail.com">gmail.com</option>
                <option value="yahoo.com">yahoo.com</option>
                <option value="hotmail.com">hotmail.com</option>
                <option value="outlook.com">outlook.com</option>
                <option value="gmail.com">gmail.com</option>
              </select>
            </ExtraEmailBox>
          </ExtraMetaBox>
        </MiExtraContainer>
        <MiCheckContainer>
          <MiSaveBtn>변경사항 저장</MiSaveBtn>
          <MiCancelBtn onClick={onHandleMypage}>취소하기</MiCancelBtn>
        </MiCheckContainer>
    </>
  )
}

export default MyInfoForm;
