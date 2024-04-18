import styled from "styled-components";

export const Bean = styled.div`
    margin : 0;
    padding : 0;
`;

export const CounselWrapper = styled.div`
  width : 100vw;
  min-height : 100vh;
  margin : 30px 0 0 0;
  padding : 0;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
`;

export const CounselTop = styled.div`
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

export const CsCircle = styled.img`
    position : absolute;
    top : 20px;
    left : -10px;
    width : 30px;
    height : 30px;
    object-fit : contain;
`;

export const CsTitle = styled.p`
    font-size : 24px;
    font-weight : bold;
    font-family : 'pretendard';
    color : #678EF2;
`;

export const CsScript = styled.p`
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

export const CsMiddle = styled.div`
    width : 65vw;
    height : 60vh;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
    border-bottom : 1px solid #ccc;
`;

export const CsListHeader = styled.div`
    width : 100%;
    height : 15%;
    margin : 0;
    padding : 10px 50px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : space-between;
    border-top : 3px solid #555;
    border-bottom : 1px solid #ccc;
    text-align : center;

    p {
        font-family : 'pretendard';
        font-size : 14px;
    }
`;

export const CsListBox = styled.div`
    width : 100%;
    height : 85%;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    gap : 10px;
`;

export const CsNoImg = styled.img`
    width : 100px;
    height : 100px;
    object-fit : contain;
`;

export const CsNoContent = styled.p`
    font-size : 16px;
    font-weight : medium;
    font-family : 'pretendard';
    color : black;
`;

export const CsBottom = styled.div`
    width : 65vw;
    height : 10vh;
    margin : 0;
    padding : 0;
    display : flex;
    justify-content : flex-end;
    align-items : center;
`;

export const CsWriteBtn = styled.div`
    width : 100px;
    height : 40px;
    margin : 0;
    padding : 0 10px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : #678fe2;
    border-radius : 30px;
    color : white;
    font-size : 14px;

    &:hover {
        cursor : pointer;
        background-color : #597CD7;
    }
`;