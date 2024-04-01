import { Wrapper,Main,Dark,Checkcircle,Complete,Detail,Goback,Gomain} from "../SignUp/SignUpCompleteStyles";
import  useScrollToTop  from '../../Hooks/Scroll/useScrollToTop';

// 로그인 완료 페이지
export default function SingUpComplete() {
  useScrollToTop();
  
  return (
      <Wrapper>
        <Dark>
          <Main>
          <Checkcircle src="/checkcircle.svg" />  
            <Complete> 회원가입 완료!</Complete>
            <Detail> 로그인 페이지로 돌아갑니다. </Detail>
            <Goback to="/login"> 확인 </Goback>
          </Main>
          <Gomain to="/">메인페이지로 </Gomain>
        </Dark>
      </Wrapper>
    )
  }
  