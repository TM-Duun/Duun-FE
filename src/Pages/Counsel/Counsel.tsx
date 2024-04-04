import { Bean, CounselTop, CounselWrapper, CsMiddle, CsCircle, CsListBox, CsListHeader, CsNoContent, CsNoImg, CsScript, CsTitle, CsBottom, CsWriteBtn } from "./CounselStyles";

export default function Counsel() {
  return (
    <Bean>
      <CounselWrapper>
        <CounselTop>
          <CsCircle src="/circle.svg"/>
          <CsTitle>1:1 문의</CsTitle>
          <CsScript>1:1 문의는 <b>회원에게만 제공</b>되며, 비회원에게는 제공하지 않습니다.<br/>
          게시글은 <b>비밀글</b>로 모두 저장되어 등록자와 운영자만 게시글 확인이 가능합니다</CsScript>
        </CounselTop>
        <CsMiddle>
          <CsListHeader>
              <p>번호</p>
              <p>문의 유형</p>
              <p>제목</p>
              <p>문의 날짜</p>
              <p>답변 상태</p>
          </CsListHeader>
          <CsListBox>
            <CsNoImg src="/nomark.svg"/>
            <CsNoContent>1:1 문의 내역이 없습니다.</CsNoContent>
          </CsListBox>
        </CsMiddle>
        <CsBottom>
          <CsWriteBtn>작성 하기</CsWriteBtn>
        </CsBottom>
      </CounselWrapper>
    </Bean>
  )
}
