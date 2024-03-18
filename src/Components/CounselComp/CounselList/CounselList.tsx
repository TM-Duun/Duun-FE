import { SharedListHeader, SharedListWrapper } from "../../Shared/TimeLine/TimeLineList";

export default function CounselList() {
  return (
    <SharedListWrapper>
        <SharedListHeader>
            <p>번호</p>
            <p>문의 유형</p>
            <p>제목</p>
            <p>문의 날짜</p>
            <p>처리 상태</p>
        </SharedListHeader>
    </SharedListWrapper>
  )
}
