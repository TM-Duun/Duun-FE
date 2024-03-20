import styled from "styled-components";


export const SharedListWrapper = styled.div`
    width : 100%;
    height : 400px;
    margin : 40px 0 0 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
    border-radius : 30px;
`;

export const SharedListHeader = styled.div`
    width : 100%;
    height : 15%;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : space-evenly;
    border-top : 3px solid #555;
    border-bottom : 1px solid #ccc;
    text-align : center;

    p {
        font-family : 'pretendard';
        font-size : 14px;
    }
`;
