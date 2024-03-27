import styled from "styled-components"
import { MrBottom, MrCircle, MrListContainer, MrListMenu, MrOpenList, MrScript, MrTitle, MrTop, NoListContainer, NoListSub, NoListTitle } from "./MyReviewStyles";
import { useState } from "react";


const MyReviewWrapper = styled.div`
  width : 100vw;
  height : 100vh;
  margin : 0;
  padding : 0;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
`;

export default function MyReview() {

  const [activeTab, setActiveTab] = useState('availableReviews');

  return (
    <MyReviewWrapper>
      <MrTop>
        <MrCircle src="/circle.svg"/>
        <MrTitle>내가 쓴 리뷰</MrTitle>
        <MrScript>상품 리뷰를 작성하면 포인트를 지급합니다.<br/>
          <b>(일반 리뷰 500P / 포토 리뷰 1,000P / 스타일 리뷰 2,000P)</b></MrScript>
      </MrTop>
      <MrBottom>
        <MrListMenu>
          <MrOpenList
              onClick={() => setActiveTab('availableReviews')}
              style={{ 
                  borderBottom: activeTab === 'availableReviews' ? '3px solid #678ef2' : 'none',
              }}>
                  작성 가능한 리뷰 <span>0</span>
          </MrOpenList>
          <MrOpenList
              onClick={() => setActiveTab('myReviews')}
              style={{
                  borderBottom: activeTab === 'myReviews' ? '3px solid #678ef2' : 'none'
              }}>
                  나의 리뷰
          </MrOpenList>
        </MrListMenu>
        <MrListContainer>
          <NoListContainer>
            <NoListTitle>작성 가능한 리뷰가 없습니다.</NoListTitle>
            <NoListSub>배송이 완료된 상품만 목록에 노출됩니다.</NoListSub>
          </NoListContainer>
        </MrListContainer>
      </MrBottom>
    </MyReviewWrapper>
  )
}
