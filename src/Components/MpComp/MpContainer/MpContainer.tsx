import { Link } from "react-router-dom";
import { MenuItemTitle, MpMenu, MpMenuItem, Wrapper } from "./MpContainerStyles";

export default function MpContainer() {
  return (
    <Wrapper>
      <MpMenu>
          <MenuItemTitle>상품 내역</MenuItemTitle>
          <MpMenuItem><Link to="/">관심 상품</Link></MpMenuItem>
          <MpMenuItem><Link to="/">결제 내역</Link></MpMenuItem>
        </MpMenu>
        <MpMenu>
          <MenuItemTitle>계정 관리</MenuItemTitle>
          <MpMenuItem><Link to="/">회원정보 확인 / 수정</Link></MpMenuItem>
          <MpMenuItem><Link to="/">내가 쓴 리뷰</Link></MpMenuItem>
        </MpMenu>
        <MpMenu>
          <MenuItemTitle>구매 내역</MenuItemTitle>
          <MpMenuItem><Link to="/">주문 / 배송 조회</Link></MpMenuItem>
          <MpMenuItem><Link to="/">취소 / 반품 내역</Link></MpMenuItem>
        </MpMenu>
        <MpMenu>
          <MenuItemTitle>Q&A</MenuItemTitle>
          <MpMenuItem><Link to="/">FAQ</Link></MpMenuItem>
          <MpMenuItem><Link to="/">1:1 문의</Link></MpMenuItem>
        </MpMenu>
    </Wrapper>
  )
}
