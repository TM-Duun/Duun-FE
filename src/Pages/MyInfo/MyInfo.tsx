import MyInfoComp from "../../Components/MyInfoComp/MyInfoComp";
import { SharedBox, SharedWrapper } from "../../Components/Shared/PagesComp/PagesComp";

export default function MyInfo() {
  return (
    <SharedWrapper>
      <SharedBox>
        <MyInfoComp />
      </SharedBox>
    </SharedWrapper>
  )
}
