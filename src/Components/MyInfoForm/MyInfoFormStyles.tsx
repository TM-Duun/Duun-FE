import styled from "styled-components";

export const Bean = styled.div`
    margin : 0;
    padding : 0;
`;

export const MiContainer = styled.div`
    width : 100%;
    height : auto;
    margin : 0;
    padding : 0 80px 10px 80px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    border-bottom : 1px solid #C2C2C2;
`;

export const MiMainBox = styled.div`
    width : 100%;
    height : 50px;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : flex-start;

    p {
        width : 20%;
        font-size : 16px;
        font-family : 'pretendard';
        font-weight : medium;
        color : black;

        span {
            color : #3D5AF1;
        }
    }
`;

export const MiIdContent = styled.div`
    display : flex;
    justify-content : flex-start;
    align-items : center;
    gap : 60px;
    margin : 0;
    padding : 0;
`;

export const ChangeBtn = styled.div`
    width : 100px;
    height : 40px;
    margin : 0;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : center;
    color : white;
    background-color : #868686;
    border-radius : 30px;
    font-size : 12px;

    &:hover {
        cursor : pointer;
    }
`;

export const MiName = styled.p`
    font-size : 16px;
    font-family : 'pretendard';
    font-weight : medium;
    color : black;
`;

export const MiExtraContainer = styled.div`
    width : 100%;
    height : auto;
    margin : 0;
    padding : 20px 80px;
    box-sizing : border-box;
    display : flex;
    flex-direction : column;
    border-bottom : 1px solid #C2C2C2;
    justify-content : space-evenly;
`;

export const ExtraMetaBox = styled.div`
    width : 100%;
    height : 50px;
    margin : 0;
    padding : 0;
    display : flex;
    gap : 30px;
    align-items : center;
    justify-content : flex-start;
    
    p {
        width : 20%;
        font-size : 16px;
        font-family : 'pretendard';
        font-weight : medium;
        color : black;

        span {
            color : #3D5AF1;
        }
    }
`;

export const ExtraPhoneBox = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    gap : 10px;
    align-items : center;
    justify-content : flex-start;
`;

export const PhoneDiv = styled.div`
    width : 100px;
    height : 40px;
    display : flex;
    align-items : center;
    justify-content : center;
    margin : 0;
    padding : 0;
    background-color : #c9c9c9;
    border : 0.5px solid #c5c5c5;
    color : #A5A5A5;
`;

export const ExtraAdMetaBox = styled.div`
    width : 100%;
    height : 150px;
    margin : 0;
    padding : 0;
    display : flex;
    gap : 30px;
    justify-content : flex-start;
    
    p {
        width : 20%;
        height : 100%;
        margin : 10px 0 0 0;
        padding : 0;
        font-size : 18px;
        font-family : 'pretendard';
        font-weight : medium;
        color : black;

    }
`;

export const ExtraAddressContainer = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    flex-direction : column;
    justify-content : flex-start;
`;

export const ExtraAddressBox = styled.div`
    width : 100%;
    height : 50px;
    margin : 0 0 10px 0;
    padding : 0;
    display : flex;
    gap : 10px;
    align-items : center;
    justify-content : flex-start;
`;

export const AddressNum = styled.div`
    width : 100px;
    height : 40px;
    display : flex;
    align-items : center;
    justify-content : center;
    margin : 0;
    padding : 0;
    background-color : #c9c9c9;
    border : 0.5px solid #c5c5c5;
    color : #A5A5A5;
`;

export const ExtraAddressContent = styled.div`
    width : 365px;
    height : 40px;
    margin : 0 0 10px 0;
    padding : 5px 10px;
    box-sizing : border-box;
    display : flex;
    justify-content : flex-start;
    align-items : center;
    background-color : #c9c9c9;
    border : 0.5px solid #c5c5c5;
    color : #A5A5A5;
`;

export const ExtraEmailBox = styled.div`
    width : 100%;
    height : 100%;
    margin : 0;
    padding : 0;
    display : flex;
    gap : 10px;
    align-items : center;
    justify-content : flex-start;

    p {
        font-size : 18px;
        font-family : 'pretendard';
        font-weight : medium;
        color : black;
    }

    label, select {
        width : 100px;
        height : 40px;
        margin : 0;
        padding : 10px;
        box-sizing : border-box;
        display : flex;
        align-items : center;
        border : 0.5px solid #c5c5c5;
        color : black;
        font-family : 'pretendard';
        font-weight : medium;
        font-size : 14px;
    }

    select {
        width : 120px;
    }
`;

export const EmailDiv = styled.div`
    width : 100px;
    height : 40px;
    margin : 0;
    padding : 10px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    border : 0.5px solid #c5c5c5;
    color : black;
    font-size : 14px;
    font-family : 'pretendard';
    font-weight : medium;
`;

export const MiCheckContainer = styled.div`
    width : 100%;
    height : 10%;
    margin : 10px 0 0 0;
    gap : 20px;
    padding : 0;
    display : flex;
    align-items : center;
    justify-content : flex-end;
`;

export const MiSaveBtn = styled.div`
    width : 100px;
    height : 40px;
    margin : 0;
    padding : 0 10px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : center;
    color : white;
    background-color : #678EF2;
    border-radius : 30px;
    font-size : 12px;

    &:hover {
        cursor : pointer;
    }
`;

export const MiCancelBtn = styled.div`
    width : 100px;
    height : 40px;
    margin : 0;
    padding : 0 10px;
    box-sizing : border-box;
    display : flex;
    align-items : center;
    justify-content : center;
    color : #678EF2;
    background-color : white;
    border-radius : 30px;
    border : 1px solid #678EF2;
    font-size : 12px;

    &:hover {
        cursor : pointer;
    }
`;