import { Wrapper,Step,Title,One,BlueCircle,Numone,Stepname,Gray,Two,WhiteCircle,Numtwo,Numthr,Thr
    ,Dark, Main,MainContentBox,Name,Detail,Nextbtn} from "./Term3Styles";
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
      <Detail> 할인쿠폰 및 혜택, 이벤트, 신상품 소식 등 쇼핑몰에서 제공하는 유익한 쇼핑정보를 SMS나 이메일로 받아보실 수 있습니다.<br/> <br/> 
단, 주문/거래 정보 및 주요 정책과 관련된 내용은 수신동의 여부와 관계없이 발송됩니다.<br/> <br/> 
선택 약관에 동의하지 않으셔도 회원가입은 가능하며, 회원가입 후 회원정보수정 페이지에서 언제든지 수신여부를 변경하실 수 있습니다.<br/><br/>  </Detail>
    <Nextbtn to = "/SignUp1" > 내용접기 </Nextbtn>
  
  </Main>
   </Dark>
    <MainContentBox/>

</Wrapper>

)
}
