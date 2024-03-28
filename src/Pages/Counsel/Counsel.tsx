import styled from "styled-components";
import { CsBottom, CsBtn, CsCircle, CsDateInput, CsLine, CsListHeader, CsMenu, CsMiddle, CsPickerContainer, CsScript, CsSelect, CsSubmitInput, CsTitle, CsTop, Dash } from "./CounselStyles";
import { useEffect, useState } from "react";
import axios from "axios";

const CounselWrapper = styled.div`
  width : 100vw;
  min-height : 100vh;
  margin : 0;
  padding : 0;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
`;


export default function Counsel() {

  const [counselPosts, setCounselPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setCounselPosts(response.data);
    }

    fetchData();
  }, []);

  console.log(counselPosts);
  return (
    <CounselWrapper>
      <CsTop>
        <CsCircle src="/circle.svg"/>
        <CsTitle>1:1 문의</CsTitle>
        <CsScript>1:1 문의는 <b>회원에게만 제공</b>되며, 비회원에게는 제공하지 않습니다.<br/>
        게시글은 <b>비밀글</b>로 모두 저장되어 등록자와 운영자만 게시글 확인이 가능합니다</CsScript>
        <CsLine></CsLine>
      </CsTop>
      <CsMiddle>
        <CsMenu>
          <CsSelect>
              <CsBtn>1년</CsBtn>
              <CsBtn>6개월</CsBtn>
              <CsBtn>3개월</CsBtn>
              <CsBtn>1개월</CsBtn>
          </CsSelect>
        </CsMenu>
        <CsPickerContainer>
          <CsDateInput defaultValue="2024-01-25"/>
          <Dash>~</Dash>
          <CsDateInput defaultValue="2024-02-26"/>
          <CsSubmitInput
              type="submit"
              value="조회"/>
        </CsPickerContainer>
      </CsMiddle>
      <CsBottom>
        <CsListHeader>
            <p>번호</p>
            <p>문의 유형</p>
            <p>제목</p>
            <p>문의 날짜</p>
            <p>답변 상태</p>
        </CsListHeader>
        
      </CsBottom>
    </CounselWrapper>
  )
}
