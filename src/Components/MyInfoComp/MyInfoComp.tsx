import { SharedCircle, SharedContainer, SharedLine, SharedTitle } from "../Shared/PagesComp/PagesComp";
import MyInfoForm from "./MyInfoForm/MyInfoForm";

export default function MyInfoComp() {
  return (
    <>
      <SharedContainer>
          <SharedCircle src="/circle.svg"/>
          <SharedTitle>회원정보 확인 / 수정</SharedTitle>
      </SharedContainer>
      <SharedLine />
      <MyInfoForm />
    </>
  )
}