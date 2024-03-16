import { InfoBox, InfoItem, InfoTitle, MpInfoContainer, MpProfileContainer, ProfileImg, ProfileLevel, ProfileLevelContainer, ProfileName, ProfileSub, Wrapper } from "./MpContentsStyles";

export default function MPContents() {

  const infoData = [
    { title: '포인트', result : '30,000점' },
    { title: '주문 / 배송', result : '1개' },
    { title: '쿠폰', result : '2개' },
  ];

  return (
    <Wrapper>
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
    </Wrapper>
  )
}
