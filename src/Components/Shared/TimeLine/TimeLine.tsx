import styled from "styled-components";

export const TlWrapper = styled.div`
    width : 100%;
    height : 100%;
    margin : 20px 0 0 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : space-between;
`;

export const TlMenu = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : center;
`;

export const TlSelect = styled.div`
    width : auto;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    justify-content : center;
    align-items : center;
`;

export const TlBtn = styled.button`
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

export const TlPickerContainer = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;
`;

export const TlDateInput = styled.input.attrs({ type: 'date' })`
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

export const TlSubmitInput = styled.input`
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
