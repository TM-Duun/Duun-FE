// import { useState } from "react";
import { CartBadge, ItemImg, ItemName, LoginItem, LogoImg, LogoTitle, LogoutItem, NavContainer, NavItem, NavLeft, NavRight, Wrapper } from "./NavStyles";
import useStore from "../../Store/StoreCartBadge";
import  useStoreHeart from "../../Store/StoreHeartBadge"
import StoreLoginInfo from "../../Store/StoreLoginInfo";

const menuItems = [
  { src: "/cart.svg", name: "장바구니", path: "/cart" },
  { src: "/heart.svg", name: "찜", path: "/likes" },
  { src: "/user.svg", name: "마이페이지", path: "/mypage" },
];

// 메뉴바 컴포넌트
export default function Nav() {
  const itemCount=useStore(state=>state.itemCount);
  const {likedItems}=useStoreHeart();
  const likesCount=likedItems.length;
  const { userId, setUserId } = StoreLoginInfo();

  const handleLogout = () => {
    setUserId("");
  };

  return (
    <Wrapper>
      <NavContainer>
      <NavLeft to="/">
        <LogoImg src="/DuunLogo.svg"/>
        <LogoTitle>Duun</LogoTitle>
      </NavLeft>
      <NavRight>
        {menuItems.map((item) => (
          <NavItem key={item.name} to={item.path} $isTarget={item.name==="장바구니" || item.name==="찜"}>
            {item.name === "장바구니" && itemCount > 0 && <CartBadge>{itemCount}</CartBadge>}
            {item.name === "찜" && likesCount > 0 && <CartBadge>{likesCount}</CartBadge>}
            <ItemImg src={item.src}>
            </ItemImg>
            <ItemName>
              {item.name}
            </ItemName>
          </NavItem>
        ))}
        {userId ? (
          <LogoutItem onClick={handleLogout}>Logout</LogoutItem>
        ) : (
          <LoginItem to="/login">
            Login
          </LoginItem>
        )}
      </NavRight>
      </NavContainer>
    </Wrapper>
  )
}