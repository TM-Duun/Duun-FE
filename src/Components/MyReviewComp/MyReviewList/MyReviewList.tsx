import { useState } from "react";
import { MrListContainer, MrListMenu, MrOpenList, NoListContainer, NoListSub, NoListTitle, Wrapper } from "./MyReviewListStyles";

export default function MyReviewList() {

    const [activeTab, setActiveTab] = useState('availableReviews');

    return (
        <Wrapper>
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
        </Wrapper>
    )
}
