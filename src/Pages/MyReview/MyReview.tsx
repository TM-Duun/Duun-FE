import MyReviewComp from "../../Components/MyReviewComp/MyReviewComp";
import { SharedBox, SharedWrapper } from "../../Components/Shared/PagesComp/PagesComp";

export default function MyReview() {
  return (
    <SharedWrapper>
      <SharedBox>
        <MyReviewComp />
      </SharedBox>
    </SharedWrapper>
  )
}
