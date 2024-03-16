import OrderComp from "../../Components/OrderComp/OrderComp";
import { SharedBox, SharedWrapper } from "../../Components/Shared/PagesComp/PagesComp";

export default function Order() {
  return (
    <SharedWrapper>
      <SharedBox>
        <OrderComp />
      </SharedBox>
    </SharedWrapper>
  )
}
