import FaqComp from "../../Components/FaqComp/FaqComp";
import { SharedBox, SharedWrapper } from "../../Components/Shared/PagesComp/PagesComp";

export default function Faq() {
  return (
    <SharedWrapper>
      <SharedBox>
        <FaqComp />
      </SharedBox>
    </SharedWrapper>
  )
}
