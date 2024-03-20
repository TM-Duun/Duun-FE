import LikesComp from "../../Components/LikesComp/LikesComp";
import { SharedBox, SharedWrapper } from "../../Components/Shared/PagesComp/PagesComp";

export default function Likes() {
  return (
    <SharedWrapper>
      <SharedBox>
        <LikesComp />
      </SharedBox>
    </SharedWrapper>
  )
}
