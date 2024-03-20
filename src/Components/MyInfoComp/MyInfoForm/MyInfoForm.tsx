import { useState } from "react";
import { AddressNum, ChangeBtn, EmailDiv, ExtraAdMetaBox, ExtraAddressBox, ExtraAddressContainer, ExtraAddressContent, ExtraEmailBox, ExtraMetaBox, ExtraPhoneBox, MfCancelBtn, MfCategoryBox, MfCheckContainer, MfContainer, MfDataBox, MfExtraContainer, MfIdBox, MfName, MfSaveBtn, PhoneDiv, Wrapper } from "./MyInfoFormStyles";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import { AddressData, AddressObj } from "../../../Types/Address/AddressData";
import { useNavigate } from "react-router-dom";

export default function MyInfoForm() {

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
    <Wrapper>
        <MfContainer>
          <MfCategoryBox>
              <p>아이디</p>
              <p>이름<span>*</span></p>
              <p>비밀번호</p>                
          </MfCategoryBox>
          <MfDataBox>
            <MfIdBox>
              <p>duun0123</p>
              <ChangeBtn>아이디 변경</ChangeBtn>
            </MfIdBox>
            <MfName>문규리</MfName>
            <ChangeBtn>비밀번호 변경</ChangeBtn>
          </MfDataBox>
        </MfContainer>
        <MfExtraContainer>
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
              <select name="email" id="email" onChange={onChangeEmail}>
                <option value="naver.com" selected>naver.com</option>
                <option value="gmail.com">gmail.com</option>
                <option value="yahoo.com">yahoo.com</option>
                <option value="hotmail.com">hotmail.com</option>
                <option value="outlook.com">outlook.com</option>
                <option value="gmail.com">gmail.com</option>
              </select>
            </ExtraEmailBox>
          </ExtraMetaBox>
        </MfExtraContainer>
        <MfCheckContainer>
          <MfSaveBtn>변경사항 저장</MfSaveBtn>
          <MfCancelBtn onClick={onHandleMypage}>취소하기</MfCancelBtn>
        </MfCheckContainer>
    </Wrapper>
  )
}
