import RefundComp from "../../Components/RefundComp/RefundComp";
import { SharedBox, SharedWrapper } from "../../Components/Shared/PagesComp/PagesComp";

export default function Refund() {
  return (
    <SharedWrapper>
      <SharedBox>
        <RefundComp />
      </SharedBox>
    </SharedWrapper>
  )
}
