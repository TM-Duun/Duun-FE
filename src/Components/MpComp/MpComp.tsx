import { Wrapper } from "./MpCompStyles";
import MpContainer from "./MpContainer/MpContainer";
import MPContents from "./MpContents/MpContents";

export default function MpComp() {
  return (
    <Wrapper>
      <MPContents />
      <MpContainer />
    </Wrapper>
  )
}
