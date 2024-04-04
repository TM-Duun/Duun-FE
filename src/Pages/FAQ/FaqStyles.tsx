import styled from "styled-components";

export const Bean = styled.div`
    margin : 0;
    padding : 0;
`;

export const FaqWrapper = styled.div`
  width : 100vw;
  min-height : 100vh;
  margin : 80px 0 0 0;
  padding : 0;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
`;

export const FaqTop = styled.div`
    position : relative;
    width : 65vw;
    height : 20vh;
    margin : 0 0 0 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    gap : 20px;
    justify-content : center;
`;

export const FaqCircle = styled.img`
    position : absolute;
    top : 10px;
    left : -13px;
    width : 30px;
    height : 30px;
    object-fit : contain;
`;

export const FaqTitle = styled.p`
    font-size : 24px;
    font-weight : bold;
    font-family : 'pretendard';
    color : #678EF2;
`;

export const FaqScript = styled.p`
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

export const FaqLine = styled.div`
    width : 100%;
    height : 1px;
    background-color : #C2C2C2;
`;

export const FaqBottom = styled.div`
    width : 65vw;
    min-height : 60vh;
    overflow-x : hidden;
    overflow-y : auto;
    margin : 0;
    padding : 0 10px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
    align-items : center;
`;

export const FaqItemBox = styled.div`
    width : 100%;
    height : 150px;
    margin : 10px 0 20px 0;
    padding : 20px 20px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    justify-content : space-evenly;
    border : 1px solid #ddd;
    border-radius : 20px;
    transition : all 0.3s ease;

    &:hover {
        cursor : pointer;
        transform : scale(1.01);
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