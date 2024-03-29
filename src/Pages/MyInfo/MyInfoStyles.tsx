import styled from "styled-components";

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