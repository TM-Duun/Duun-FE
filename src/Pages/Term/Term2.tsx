import { Wrapper,Step,Title,One,BlueCircle,Numone,Stepname,Gray,Two,WhiteCircle,Numtwo,Numthr,Thr
    ,Dark, Main,MainContentBox,Name,Detail,Nextbtn} from "./Term1Styles";
import  useScrollToTop  from '../../Hooks/Scroll/useScrollToTop';


// 회원가입 페이지
export default function term1() {
  useScrollToTop();
  
  
return (
<Wrapper>
  <Dark>
     <Title> 회원가입 </Title>
  <Step>
   <One>   
    <BlueCircle />
    <Numone> 1 </Numone> 
    <Stepname> 이용약관 </Stepname>
   </One>
   <Gray/>
   <Gray/>
   <Gray/>
   <Two>
    <WhiteCircle />
    <Numtwo> 2 </Numtwo> 
    </Two>
   <Gray/>
   <Gray/>
   <Gray/>
   <Thr>      
    <WhiteCircle />
    <Numthr> 3 </Numthr>
     </Thr>
  </Step>
  <Main>
   
      <Name> [필수] 이용 약관 동의 </Name>   
      <Detail> 1. 개인정보 수집목적 및 이용목적<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;가. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는 청구지 등 발송 , 금융거래 본인 인증 및 금융 서비스<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;나. 회원 관리<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정 이용 방지와 비인가 사용 방지 , 가입 의사 확인 , 연령확인 , 만14세 미만 아동 개인정보 수집 시 법정 대리 &nbsp;&nbsp;&nbsp;&nbsp;인 동의여부 확인, 불만처리 등 민원처리 , 고지사항 전달<br/><br/>
    2. 수집하는 개인정보 항목 : 이름 , 로그인ID , 비밀번호 , 이메일 , 14세미만 가입자의 경우 법정대리인의 정보<br/><br/>
    3. 개인정보의 보유기간 및 이용기간<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.<br/><br/>
    &nbsp;&nbsp;&nbsp;&nbsp;가. 회사 내부 방침에 의한 정보 보유 사유<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;o 부정거래 방지 및 쇼핑몰 운영방침에 따른 보관 : OO년<br/><br/>
    &nbsp;&nbsp;&nbsp;&nbsp;나. 관련 법령에 의한 정보보유 사유<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;o 계약 또는 청약철회 등에 관한 기록<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;-보존이유 : 전자상거래등에서의소비자보호에관한법률<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;-보존기간 : 5년<br/><br/>
    &nbsp;&nbsp;&nbsp;&nbsp;o 대금 결제 및 재화 등의 공급에 관한 기록<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;-보존이유: 전자상거래등에서의소비자보호에관한법률<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;-보존기간 : 5년<br/><br/>
    &nbsp;&nbsp;&nbsp;&nbsp;o 소비자 불만 또는 분쟁처리에 관한 기록<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;-보존이유 : 전자상거래등에서의소비자보호에관한법률<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;-보존기간 : 3년<br/><br/>
    &nbsp;&nbsp;&nbsp;&nbsp;o 로그 기록<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;-보존이유: 통신비밀보호법<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;-보존기간 : 3개월<br/><br/>
    ※ 동의를 거부할 수 있으나 거부시 회원 가입이 불가능합니다.<br/> </Detail>
    <Nextbtn to = "/SignUp1" > 내용접기 </Nextbtn>
  
  </Main>
   </Dark>
    <MainContentBox/>

</Wrapper>

)
}
