import { useState } from "react";
import { ItemImg, ItemName, LoginItem, LogoImg, LogoTitle, NavItem, NavLeft, NavMiddle, NavRight, NavSearch, SearchIcon, Wrapper } from "./NavStyles";
import { Link } from "react-router-dom";

const menuItems = [
  { src: "/cart.svg", name: "장바구니", path: "/cart" },
  { src: "/heart.svg", name: "찜", path: "/likes" },
  { src: "/user.svg", name: "마이페이지", path: "/mypage" },
];

// 메뉴바 컴포넌트
export default function Nav() {

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
          <Link key={item.name} to={item.path} style={{ textDecoration: 'none' }}>
            <NavItem>
              <ItemImg src={item.src} />
              <ItemName>{item.name}</ItemName>
            </NavItem>
          </Link>
        ))}
        <LoginItem to="/login">
          Login
        </LoginItem>
      </NavRight>
    </Wrapper>
  )
}
