import { SingUpCompleteContainer,Complete,Goback,Gomain} from "../SignUp/SignUpCompleteStyles";

// 로그인 완료 페이지
export default function SingUpComplete() {
    return (
      <SingUpCompleteContainer>
        <Complete> 회원가입 완료!</Complete>
        <Goback to="/login"> 로그인 페이지로 돌아갑니다.</Goback>
        <Gomain to="/">메인페이지로 </Gomain>
      </SingUpCompleteContainer>
    )
  }
  