import styled from "styled-components";



export const FlWrapper = styled.div`
    width : 100%;
    height : 400px;
    margin : 0;
    padding : 20px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    overflow-y : auto;
`;

export const FlContainer = styled.div`
    width : 100%;
    height : 100%;
    margin : 0 0 20px 0;
    padding : 0 20px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    justify-content : space-evenly;
    border : 1px solid #ddd;
    border-radius : 20px;
    transition : all 0.3s ease;

    &:hover {
        cursor : pointer;
        transform : scale(1.02);
    }
`;

export const FlTitle = styled.h1`
    font-size : 24px;
    font-family : 'pretendard';
    font-weight : bold;
    color : black;
`;

export const FlContent = styled.p`
    font-size: 16px;
    font-family : 'pretendard';
    font-weight : medium;
    color : #ccc;
`;
