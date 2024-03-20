import { useState } from "react";
import { CartBadge, ItemImg, ItemName, LoginItem, LogoImg, LogoTitle, NavItem, NavLeft, NavMiddle, NavRight, NavSearch, SearchIcon, Wrapper } from "./NavStyles";
import useStore from "../../Store/StoreCartBadge";
const menuItems = [
  { src: "/cart.svg", name: "장바구니", path: "/cart" },
  { src: "/heart.svg", name: "찜", path: "/likes" },
  { src: "/user.svg", name: "마이페이지", path: "/mypage" },
];

// 메뉴바 컴포넌트
export default function Nav() {
  const itemCount=useStore(state=>state.itemCount);
  const [searchValue , setSearchValue] = useState("");

  const onSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  return (
    <Wrapper>
      <NavLeft to="/">
        <LogoImg src="DuunLogo.svg"/>
        <LogoTitle>Duun</LogoTitle>
      </NavLeft>
      <NavMiddle>
        <NavSearch 
          type="text"
          placeholder="Search the Items"
          value = { searchValue }
          onChange={onSearchChange}
          />
        <SearchIcon src="/searchIcon.svg"/>
      </NavMiddle>
      <NavRight>
        {menuItems.map((item) => (
          <NavItem key={item.name} to={item.path} $isTarget={item.name==="장바구니"}>
            {item.name === "장바구니" && itemCount > 0 && <CartBadge>{itemCount}</CartBadge>}
            <ItemImg src={item.src}>
            </ItemImg>
            <ItemName>
              {item.name}
            </ItemName>
          </NavItem>
        ))}
        <LoginItem to="/login">
          Login
        </LoginItem>
      </NavRight>
    </Wrapper>
  )
}
