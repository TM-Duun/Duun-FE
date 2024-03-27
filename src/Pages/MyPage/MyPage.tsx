import styled from "styled-components";
import { Circle, InfoBox, InfoItem, InfoTitle, MenuItemTitle, MpBottom, MpInfoContainer, MpMenu, MpMenuItem, MpProfileContainer, MpTop, ProfileImg, ProfileLevel, ProfileLevelContainer, ProfileName, ProfileSub } from "./MyPageStyles";
import { infoData, menuItems } from "./MyPageData";
import { Link } from "react-router-dom";

const MpWrapper = styled.div`
  width : 100vw;
  height : 100vh;
  margin : 0;
  padding : 0;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
`;
// 마이페이지
export default function MyPage() {
  return (
    <MpWrapper>
      <MpTop>
        <MpProfileContainer>
          <ProfileName>안녕하세요! 문규리님 {" > "}</ProfileName>
          <ProfileLevelContainer>
            <ProfileLevel>Lv. Seed</ProfileLevel>
            <ProfileImg src="/seed.svg"/>
          </ProfileLevelContainer>
          <ProfileSub>다음 등급은 <b>Seed</b>입니다. <br/>남은 구매 금액은 25,000원 입니다.</ProfileSub>
        </MpProfileContainer>
        <MpInfoContainer>
          {infoData.map((info, index) => (
            <InfoBox key={index}>
              <InfoTitle>{info.title}</InfoTitle>
              <InfoItem>{info.result}</InfoItem>
            </InfoBox>
          ))}
        </MpInfoContainer>
      </MpTop>
      <MpBottom>
        {menuItems.map(({ title, items }) => (
          <MpMenu key={title}>
            <Circle src="/circle.svg" />
            <MenuItemTitle>{title}</MenuItemTitle>
            {items.map(({ name, link }) => (
              <MpMenuItem key={name}>
                <Link to={link}>{name}</Link>
              </MpMenuItem>
            ))}
          </MpMenu>
        ))}
      </MpBottom>
    </MpWrapper>
  )
}
