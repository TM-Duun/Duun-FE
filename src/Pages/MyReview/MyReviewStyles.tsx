import styled from "styled-components";

export const MrTop = styled.div`
    position : relative;
    width : 65vw;
    height : 20vh;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    gap : 20px;
    justify-content : center;
`;

export const MrCircle = styled.img`
    position : absolute;
    top : 15px;
    left : -10px;
    width : 30px;
    height : 30px;
    object-fit : contain;
`;

export const MrTitle = styled.p`
    font-size : 24px;
    font-weight : bold;
    font-family : 'pretendard';
    color : #678EF2;
`;

export const MrScript = styled.p`
    font-size : 14px;
    font-weight : regular;
    font-family : 'pretendard';
    color : #484545;

    b {
        font-weight : bold;
    }

    a {
        text-decoration : none;
        color : #484545;
        font-weight : bold;
    }
`;

export const MrBottom = styled.div`
    width : 65vw;
    height : 60vh;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
`;

export const MrListMenu = styled.div`
    width : 100%;
    height : 10vh;
    margin : 0;
    padding : 0 50px;
    box-sizing : border-box;
    display : flex;
    gap : 30px;
    align-items : center;
    justify-content : flex-start;
    border-bottom : 1px solid #c9c9c9;
`;

export const MrOpenList = styled.button`
    width : auto;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : white;
    border : none;
    border-bottom-radius : 10px;

    span {
        margin : 0;
        padding : 0;
        margin-left : 5px;
        color : #678EF2;
        font-size : 16px;
    }

    &:hover {
        cursor : pointer;
    }
`;

export const MrListContainer = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`;

export const NoListContainer = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`;

export const NoListTitle = styled.h1`
    font-size: 36px;
    font-weight: 600;
    font-family : 'pretendard';
    color : black;
    margin-bottom : 10px;
`;

export const NoListSub = styled.p`
    font-size : 12px;
    font-weight : medium;
    font-family : 'pretendard';
    color : black;
`;