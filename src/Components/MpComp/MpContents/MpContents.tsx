import { MpInfoContainer, MpProfileContainer, ProfileLevel, ProfileName, ProfileSub, Wrapper } from "./MpContentsStyles";

export default function MyPageContents() {

  const infoData = [
    { title: '포인트', result : '30,000점' },
    { title: '주문 / 배송', result : '1개' },
    { title: '쿠폰', result : '2개' },
  ];

  return (
    <Wrapper>
      <MpProfileContainer>
        <ProfileName>안녕하세요! 문규리님 {" > "}</ProfileName>
        <ProfileLevel>Lv. Seed</ProfileLevel>
        <ProfileSub>다음 등급은 <b>Seed</b>입니다. <br/>남은 구매 금액은 25,000원 입니다.</ProfileSub>
      </MpProfileContainer>
      <MpInfoContainer>
        
      </MpInfoContainer>
    </Wrapper>
  )
}
