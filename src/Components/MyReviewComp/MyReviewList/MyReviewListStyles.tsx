import styled from "styled-components";


export const Wrapper = styled.div`
    width : 100%;
    height : 100%;
    margin : 30px 0 0 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`;

export const MrListMenu = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0 50px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    border-bottom : 1px solid #ccc;
`;

export const MrOpenList = styled.button`
    width : auto;
    height : 100%;
    margin : 0 50px 0 0;
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
    height : 400px;
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