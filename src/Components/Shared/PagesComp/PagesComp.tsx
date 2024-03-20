import styled from "styled-components";


export const SharedWrapper = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0;
    padding-top : 100px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : center;
`;

export const SharedBox = styled.div`
    width : 75%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;
`;


export const SharedContainer = styled.div`
    position: relative;
    width : 100%;
    height : 50%;
    margin : 0;
    padding : 20px 50px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
`;

export const SharedCircle = styled.img`
    position : absolute;
    top : 10px;
    left : 40px;
    width : 30px;
    height : 30px;
    object-fit : contain;
`;

export const SharedTitle = styled.h2`
    font-size : 24px;
    font-weight : bold;
    font-family : 'pretendard';
    color : #678EF2;
`;

export const SharedScript = styled.p`
    margin-top : 20px;
    font-size : 14px;
    font-weight : medium;
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

export const SharedLine = styled.div`
    width : 100%;
    height : 1px;
    margin : 20px 0 0 0;
    padding : 0;
    background-color : #ddd;
`;