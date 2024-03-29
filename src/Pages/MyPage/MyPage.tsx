import { Bean, Circle, InfoBox, InfoItem, InfoTitle, MenuItemTitle, MpBottom, MpInfoContainer, MpMenu, MpMenuItem, MpProfileContainer, MpTop, MpWrapper, ProfileImg, ProfileLevel, ProfileLevelContainer, ProfileName, ProfileSub } from "./MyPageStyles";
import { infoData, menuItems } from "./MyPageData";
import { Link } from "react-router-dom";

export default function MyPage() {
  return (
    <Bean>
      <MpWrapper>
        <MpTop>
          <MpProfileContainer>
            <ProfileName>안녕하세요! 문규리님 {" > "}</ProfileName>
            <ProfileLevelContainer>
              <ProfileLevel>Lv. Seed</ProfileLevel>
              <ProfileImg src="/seed.svg"/>
            </ProfileLevelContainer>
            <ProfileSub>다음 등급은 <b>Seed</b>입니다. <br/>남은 구매 금액은 <b>25,000원</b> 입니다.</ProfileSub>
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
    </Bean>
  )
}
