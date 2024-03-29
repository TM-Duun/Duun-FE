import styled from "styled-components";

export const Bean = styled.div`
    margin : 0;
    padding : 0;
`;

export const OrderWrapper = styled.div`
  width : 100vw;
  min-height : 100vh;
  margin : 0;
  padding : 0;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
`;

export const OdTop = styled.div`
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

export const OdCircle = styled.img`
    position : absolute;
    top : 5px;
    left : -10px;
    width : 30px;
    height : 30px;
    object-fit : contain;
`;

export const OdTitle = styled.p`
    font-size : 24px;
    font-weight : bold;
    font-family : 'pretendard';
    color : #678EF2;
`;

export const OdScript = styled.p`
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

export const OdLine = styled.div`
    width : 100%;
    height : 1px;
    background-color : #C2C2C2;
`;

export const OdMiddle = styled.div`
    width : 65vw;
    height : 5vh;
    margin : 0;
    padding : 0;
    display : flex;
    justify-content : center;
    align-items : center;
`;

export const OdMenu = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : center;
`;

export const OdSelect = styled.div`
    width : auto;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    justify-content : center;
    align-items : center;
`;

export const OdBtn = styled.button`
    width : 80px;
    height : 20px;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;
    border : none;
    background-color : transparent;
    border-right : 2px solid #ccc;
    color : #8C8C8C;

    &:last-child {
        border-right : none;
    }

    &:hover {
        color : #678EF2;
        cursor: pointer;
    }
`;

export const OdPickerContainer = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;
`;

export const OdDateInput = styled.input.attrs({ type: 'date' })`
    padding : 5px 10px;
    margin : 0 8px;
    border : 1px solid #ccc;
    border-radius : 20px;
    box-shadow : inset 0 1px 3px rgba(0, 0, 0, 0.1);
    -webkit-appearance: none;
    -moz-appearance: none;
    text-align: center;
    font-family : 'pretendard';
    color : #484545;

    &:hover {
        cursor: pointer;
    }
`;

export const Dash = styled.span`
    margin: 0 5px;
`;

export const OdSubmitInput = styled.input`
    padding : 7px 20px;
    margin : 0 8px;
    border : none;
    background-color : #D4DFFC;
    border-radius : 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-align: center;
    font-family : 'pretendard';
    font-weight : bold;

    &:hover {
        cursor: pointer;
    }
`;

export const OdBottom = styled.div`
    width : 65vw;
    height : 60vh;
    margin : 20px 0 0 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    align-items : center;
`;

export const OdListHeader = styled.div`
    width : 100%;
    height : 15%;
    margin : 0;
    padding : 10px 0;
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