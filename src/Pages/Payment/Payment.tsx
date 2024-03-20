import PaymentComp from "../../Components/PaymentComp/PaymentComp";
import { SharedBox, SharedWrapper } from "../../Components/Shared/PagesComp/PagesComp";

export default function Payment() {
  return (
    <SharedWrapper>
      <SharedBox>
        <PaymentComp />
      </SharedBox>
    </SharedWrapper>
  )
}
