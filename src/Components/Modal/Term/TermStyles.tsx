import styled from "styled-components";


export const TermMain = styled.div`
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
    width : 50vw;
    height : 70vh;
    margin : 0;
    padding : 20px;
    box-sizing : border-box;
    background : white;
    border-radius : 30px;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;
    gap : 20px;
    box-shadow : 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const TermMainTitle = styled.p`
    width : 100%;
    font-size : 24px;
    font-family : 'pretendard';
    font-weight : bold;
    color : black;
    padding : 10px 0;
    box-sizing : border-box;
    border-bottom : 1px solid #c9c9c9;

    span {
      color : #678fe2;
    }
`;

export const TermMainDetail = styled.div`
    width : 100%;    
    height: 300px;
    font-size: 12px;
    font-family: "Pretendard-Thin", sans-serif;
    overflow-y: auto;
    border : 1px solid #c9c9c9;
    border-radius : 10px;
    padding : 20px;
    box-sizing : border-box;

    /* 스크롤바 전체 디자인 */
    &::-webkit-scrollbar {
      width: 12px; /* 스크롤바 너비 */
      background-color: #D9D9D9;
    }

    /* 스크롤바 핸들(바) 디자인 */
    &::-webkit-scrollbar-thumb {
      background-color: #678EF2;
      border-radius: 4px;
    }

    /* 스크롤바 버튼(위, 아래) 디자인 */
    &::-webkit-scrollbar-button {
      display: none;
    }
`;

export const TermCheck = styled.div`
    width : 100px;
    height : 40px;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : white;
    color : #678ef2;
    border-radius : 10px;
    border : 1px solid #678ef2;
    transition : all 0.3s ease;

    &:hover {
      cursor : pointer;
      background-color : #678ef2;
      color : white;
    }
`;