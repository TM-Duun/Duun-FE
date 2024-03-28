import { Wrapper,Main,Dark,Checkcircle,Complete,Detail,Gomain} from "../Login/LoginCompleteStyles";
import  useScrollToTop  from '../../Hooks/Scroll/useScrollToTop';

// 로그인 완료 페이지
export default function LoginComplete() {
  useScrollToTop();

    return (
      <Wrapper>
        <Dark>
          <Main>
          <Checkcircle src="/checkcircle.svg" />  
            <Complete> 로그인 완료!</Complete>
            <Detail> 메인 페이지로 돌아갑니다. </Detail>
            <Gomain to="/"> 확인 </Gomain>
          </Main>
        </Dark>
      </Wrapper>
    )
  }
  