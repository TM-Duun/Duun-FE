import styled, { keyframes } from "styled-components";

export const Bean = styled.div`
    margin : 0;
    padding : 0;
`;

export const MiWrapper = styled.div`
    width : 100vw;
    height : 100vh;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`;

export const MiTop = styled.div`
    position : relative;
    width : 65vw;
    height : 10vh;
    margin : 50px 0 0 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    gap : 20px;
    justify-content : center;
`;

export const MiCircle = styled.img`
    position : absolute;
    top : 0px;
    left : -10px;
    width : 30px;
    height : 30px;
    object-fit : contain;
`;

export const MiTitle = styled.p`
    font-size : 24px;
    font-weight : bold;
    font-family : 'pretendard';
    color : #678EF2;
`;

export const MiLine = styled.div`
    width : 100%;
    height : 1px;
    background-color : #C2C2C2;
`;

export const MiBottom = styled.div`
    width : 65vw;
    min-height : 60vh;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
`;

const upAnime = keyframes`
    0% {
        opacity : 0;
    }

    100% {
        opacity : 1;
    }
`;

export const CIWrapper = styled.div`
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
    width : 500px;
    height : 350px;
    background-color : white;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    margin : 0;
    padding : 20px;
    box-sizing : border-box;
    animation : ${upAnime} 0.3s ease;
    transition : all 0.3s ease;
`;

export const CITitle = styled.h1`
    font-size : 36px;
    font-weight : 600;
    font-family : 'pretendard';
    color : #678fe2;
    margin-bottom : 20px;
`;

export const CIForm = styled.form`
    width : 100%;
    height : 200px;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;
    border-top : 2px solid #484545;
    border-bottom : 2px solid #484545;
    margin-bottom : 15px;
`;

export const CIBox = styled.div`
    width : 100%;
    height : 100px;
    display : flex;
    align-items : center;
    justify-content : flex-start;
    gap : 30px;
    margin : 0;
    padding : 0;
    border-bottom : 1px solid #c9c9c9;
`;

export const CIInfo = styled.p`
    font-size : 20px;
    font-weight : 500;
    font-family : 'pretendard';
    color : #678EF2;
`;

export const CurrentId = styled.p`
    font-size : 18px;
    font-weight : 600;
    font-family : 'pretendard';
    color : black;
`;